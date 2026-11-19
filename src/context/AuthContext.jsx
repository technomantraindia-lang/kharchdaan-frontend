import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

const STORAGE_KEYS = {
  TOKEN: 'kharchdaan_auth_token',
  USER: 'kharchdaan_user',
  USERS_CACHE: 'kharchdaan_registered_users',
  REFERRAL: 'kharchdaan_referral_code'
};

const getLocalUsers = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS_CACHE);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const saveUserLocally = (userData) => {
  try {
    const users = getLocalUsers();
    const cleanEmail = userData.email?.trim().toLowerCase();
    const index = users.findIndex(u => u.email?.toLowerCase() === cleanEmail);
    const updated = {
      id: userData.id || (index >= 0 ? users[index].id : Date.now()),
      name: userData.name,
      email: cleanEmail,
      phone: userData.phone || '',
      password: userData.password || (index >= 0 ? users[index].password : ''),
      wallet_balance: userData.wallet_balance || 0,
      cashback_earned: userData.cashback_earned || 0,
      role: userData.role || 'Customer'
    };

    if (index >= 0) {
      users[index] = { ...users[index], ...updated };
    } else {
      users.push(updated);
    }
    localStorage.setItem(STORAGE_KEYS.USERS_CACHE, JSON.stringify(users));
  } catch (e) {
    console.warn('Failed to cache user locally:', e);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEYS.TOKEN));
  const [loading, setLoading] = useState(false);
  const [termsRequired, setTermsRequired] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      const parsed = saved ? JSON.parse(saved) : null;
      return Boolean(parsed && !parsed.terms_accepted && !parsed.terms_accepted_at);
    } catch {
      return false;
    }
  });

  const applyUser = (userData, termsFlag) => {
    setUser(userData);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    const needsTerms = typeof termsFlag === 'boolean'
      ? termsFlag
      : Boolean(userData && !userData.terms_accepted && !userData.terms_accepted_at);
    setTermsRequired(needsTerms);
  };

  const clearSession = () => {
    setToken(null);
    setUser(null);
    setTermsRequired(false);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
  };

  const refreshUser = async () => {
    const liveToken = (token || localStorage.getItem(STORAGE_KEYS.TOKEN) || '').trim();
    if (!liveToken || liveToken.startsWith('local_auth_')) return null;
    const res = await api.getMe();
    if (res?.data) {
      applyUser(res.data, res.terms_required ?? res.data.terms_required);
      return res.data;
    }
    return null;
  };

  useEffect(() => {
    const liveToken = (token || '').trim();
    if (!liveToken) return;

    // Fake offline tokens cannot call the API — clear them so Terms Accept never hits 401.
    if (liveToken.startsWith('local_auth_')) {
      clearSession();
      return;
    }

    api.getMe()
      .then((res) => {
        if (res?.data) {
          applyUser(res.data, res.terms_required ?? res.data.terms_required);
        }
      })
      .catch((err) => {
        console.warn('getMe failed:', err);
        const msg = String(err.message || '');
        if (
          msg.includes('401')
          || msg.toLowerCase().includes('unauthenticated')
          || msg.toLowerCase().includes('invalid or expired')
        ) {
          clearSession();
        }
      });
  }, [token]);

  const login = async (identifier, password) => {
    setLoading(true);
    const cleanLogin = identifier.trim();
    const cleanEmail = cleanLogin.toLowerCase();

    try {
      // 1. Try remote API login (Customer ID / Mobile / Email)
      try {
        const response = await api.login({ login: cleanLogin, email: cleanEmail, password });
        if (response.success && response.data) {
          const authToken = response.data.access_token;
          const userData = response.data.user;
          setToken(authToken);
          localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
          applyUser(userData, response.data.terms_required);

          // Save to local cache for resilience
          saveUserLocally({ ...userData, email: userData.email || cleanEmail, password, login: cleanLogin });
          return { success: true, user: userData, terms_required: response.data.terms_required };
        }
      } catch (apiErr) {
        // Never invent a local_auth token — Terms Accept and orders need a real API token.
        console.warn('API login error:', apiErr.message);
        throw apiErr;
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    const cleanEmail = userData.email.trim().toLowerCase();
    const referralFromStorage = (() => {
      try {
        return (localStorage.getItem(STORAGE_KEYS.REFERRAL) || '').trim();
      } catch {
        return '';
      }
    })();
    const referralCode = (userData.referral_code || userData.sponsor_customer_id || referralFromStorage || '').trim();

    const payload = {
      name: userData.name?.trim(),
      email: cleanEmail,
      password: userData.password,
      password_confirmation: userData.password_confirmation || userData.password,
      phone: userData.phone || '',
      referral_code: referralCode || undefined,
      sponsor_customer_id: referralCode || undefined
    };

    // Cache locally immediately so login will always succeed
    saveUserLocally({
      name: payload.name,
      email: cleanEmail,
      phone: payload.phone,
      password: payload.password
    });

    try {
      const response = await api.register(payload);
      if (response.success && response.data) {
        const authToken = response.data.access_token;
        const newUser = response.data.user;
        setToken(authToken);
        localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
        applyUser(newUser, response.data.terms_required ?? true);
        saveUserLocally({ ...newUser, email: cleanEmail, password: payload.password });
        try {
          localStorage.removeItem(STORAGE_KEYS.REFERRAL);
        } catch {
          /* ignore */
        }
        return { success: true, user: newUser, terms_required: true };
      }
      throw new Error(response.message || 'Registration failed.');
    } catch (apiErr) {
      // Do not fake a successful MLM signup — client needs the member in admin directory
      throw apiErr;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const liveToken = (token || localStorage.getItem(STORAGE_KEYS.TOKEN) || '').trim();
      if (liveToken && !liveToken.startsWith('local_auth_')) {
        await api.logout();
      }
    } catch (e) {
      console.warn('Logout error:', e);
    } finally {
      clearSession();
    }
  };

  const clearTermsRequired = () => setTermsRequired(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token,
        termsRequired,
        clearTermsRequired,
        refreshUser,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
