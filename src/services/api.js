const rawBase = import.meta.env.VITE_API_URL || '/api';
const API_BASE = rawBase.endsWith('/v1') ? rawBase : `${rawBase.replace(/\/$/, '')}/v1`;

export const getAuthHeaders = () => {
  const token = localStorage.getItem('kharchdaan_auth_token');
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export const api = {
  // Products API
  async getProducts(params = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, value);
      }
    });
    const url = `${API_BASE}/products${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    try {
      const res = await fetch(url, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getProducts fallback:', err.message);
      return { success: false, data: [], pagination: null, error: err.message };
    }
  },

  async getProduct(slug) {
    try {
      const res = await fetch(`${API_BASE}/products/${slug}`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getProduct fallback:', err.message);
      return { success: false, data: null, error: err.message };
    }
  },

  // Categories API
  async getCategories() {
    try {
      const res = await fetch(`${API_BASE}/categories`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getCategories fallback:', err.message);
      return { success: false, data: [], error: err.message };
    }
  },

  // Brands API
  async getBrands() {
    try {
      const res = await fetch(`${API_BASE}/brands`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getBrands fallback:', err.message);
      return { success: false, data: [], error: err.message };
    }
  },

  // Customer Auth API
  async login(credentials) {
    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
    return data;
  },

  async register(userData) {
    const res = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await res.json();
    if (!res.ok) {
      const errorMsg = data.errors ? Object.values(data.errors).flat().join(', ') : (data.message || 'Registration failed');
      throw new Error(errorMsg);
    }
    return data;
  },

  async logout() {
    try {
      const res = await fetch(`${API_BASE}/logout`, {
        method: 'POST',
        headers: getAuthHeaders()
      });
      return await res.json();
    } catch (err) {
      console.warn('Logout API error:', err);
    }
  },

  async getMe() {
    const res = await fetch(`${API_BASE}/me`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to fetch profile');
    return await res.json();
  },

  async getOrders() {
    try {
      const res = await fetch(`${API_BASE}/orders`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error('Failed to fetch orders');
      return await res.json();
    } catch (err) {
      console.warn('Orders API error:', err);
      return { success: false, data: [] };
    }
  }
};
