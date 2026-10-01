import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('kharchdaan_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('kharchdaan_auth_token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && !user) {
      api.getMe()
        .then((res) => {
          if (res?.data) {
            setUser(res.data);
            localStorage.setItem('kharchdaan_user', JSON.stringify(res.data));
          }
        })
        .catch(() => {
          logout();
        });
    }
  }, [token]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await api.login({ email, password });
      if (response.success && response.data) {
        const authToken = response.data.access_token;
        const userData = response.data.user;
        setToken(authToken);
        setUser(userData);
        localStorage.setItem('kharchdaan_auth_token', authToken);
        localStorage.setItem('kharchdaan_user', JSON.stringify(userData));
        return { success: true, user: userData };
      }
      throw new Error(response.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await api.register(userData);
      if (response.success && response.data) {
        const authToken = response.data.access_token;
        const newUser = response.data.user;
        setToken(authToken);
        setUser(newUser);
        localStorage.setItem('kharchdaan_auth_token', authToken);
        localStorage.setItem('kharchdaan_user', JSON.stringify(newUser));
        return { success: true, user: newUser };
      }
      throw new Error(response.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.logout();
    } catch (e) {
      console.error(e);
    } finally {
      setToken(null);
      setUser(null);
      localStorage.removeItem('kharchdaan_auth_token');
      localStorage.removeItem('kharchdaan_user');
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, isAuthenticated: !!token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
