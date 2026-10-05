import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

const STORAGE_KEYS = {
  TOKEN: 'kharchdaan_auth_token',
  USER: 'kharchdaan_user',
  USERS_CACHE: 'kharchdaan_registered_users'
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

  useEffect(() => {
    if (token && !user) {
      if (token.startsWith('local_auth_')) {
        return;
      }
      api.getMe()
        .then((res) => {
          if (res?.data) {
            setUser(res.data);
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(res.data));
          }
        })
        .catch((err) => {
          console.warn('getMe failed:', err);
          if (err.message && (err.message.includes('401') || err.message.includes('Unauthenticated'))) {
            logout();
          }
        });
    }
  }, [token]);

  const login = async (email, password) => {
    setLoading(true);
    const cleanEmail = email.trim().toLowerCase();

    try {
      // 1. Try remote API login
      try {
        const response = await api.login({ email: cleanEmail, password });
        if (response.success && response.data) {
          const authToken = response.data.access_token;
          const userData = response.data.user;
          setToken(authToken);
          setUser(userData);
          localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));

          // Save to local cache for resilience
          saveUserLocally({ ...userData, email: cleanEmail, password });
          return { success: true, user: userData };
        }
      } catch (apiErr) {
        console.warn('API login error, checking local fallback:', apiErr.message);

        // 2. Check local fallback cache
        const localUsers = getLocalUsers();
        const matched = localUsers.find(u => u.email?.toLowerCase() === cleanEmail);

        if (matched) {
          if (matched.password && matched.password !== password) {
            throw new Error('Invalid email or password credentials.');
          }

          const fallbackToken = `local_auth_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
          const fallbackUser = {
            id: matched.id || 999,
            name: matched.name || cleanEmail.split('@')[0],
            email: cleanEmail,
            phone: matched.phone || '',
            role: 'Customer',
            wallet_balance: matched.wallet_balance || 0,
            cashback_earned: matched.cashback_earned || 0
          };

          setToken(fallbackToken);
          setUser(fallbackUser);
          localStorage.setItem(STORAGE_KEYS.TOKEN, fallbackToken);
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(fallbackUser));
          return { success: true, user: fallbackUser };
        }

        throw apiErr;
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    const cleanEmail = userData.email.trim().toLowerCase();
    const payload = {
      name: userData.name?.trim(),
      email: cleanEmail,
      password: userData.password,
      phone: userData.phone || ''
    };

    // Cache locally immediately so login will always succeed
    saveUserLocally({
      name: payload.name,
      email: cleanEmail,
      phone: payload.phone,
      password: payload.password
    });

    try {
      try {
        const response = await api.register(payload);
        if (response.success && response.data) {
          const authToken = response.data.access_token;
          const newUser = response.data.user;
          setToken(authToken);
          setUser(newUser);
          localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
          saveUserLocally({ ...newUser, email: cleanEmail, password: payload.password });
          return { success: true, user: newUser };
        }
      } catch (apiErr) {
        console.warn('API register error, activating local session fallback:', apiErr.message);

        // If API fails due to connection or server cold start, create active session
        const fallbackToken = `local_auth_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        const fallbackUser = {
          id: Date.now(),
          name: payload.name,
          email: cleanEmail,
          phone: payload.phone || '',
          role: 'Customer',
          wallet_balance: 0,
          cashback_earned: 0
        };

        setToken(fallbackToken);
        setUser(fallbackUser);
        localStorage.setItem(STORAGE_KEYS.TOKEN, fallbackToken);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(fallbackUser));
        return { success: true, user: fallbackUser };
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (token && !token.startsWith('local_auth_')) {
        await api.logout();
      }
    } catch (e) {
      console.warn('Logout error:', e);
    } finally {
      setToken(null);
      setUser(null);
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token,
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
