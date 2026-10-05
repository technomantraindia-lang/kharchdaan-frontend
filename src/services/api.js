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

/**
 * Robust fetch wrapper with timeout and error handling
 */
export async function fetchWithTimeout(url, options = {}, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Connection timed out. The server might be waking up, please try again.');
    }
    if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.message.includes('Network request failed'))) {
      throw new Error('Network error: Unable to connect to server. Please check your internet connection.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

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
      const res = await fetchWithTimeout(url, { headers: getAuthHeaders() }, 10000);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getProducts fallback:', err.message);
      return { success: false, data: [], pagination: null, error: err.message };
    }
  },

  async getProduct(slug) {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/products/${slug}`, { headers: getAuthHeaders() }, 10000);
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
      const res = await fetchWithTimeout(`${API_BASE}/categories`, { headers: getAuthHeaders() }, 10000);
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
      const res = await fetchWithTimeout(`${API_BASE}/brands`, { headers: getAuthHeaders() }, 10000);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getBrands fallback:', err.message);
      return { success: false, data: [], error: err.message };
    }
  },

  // Customer Auth API
  async login(credentials) {
    const res = await fetchWithTimeout(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(credentials)
    }, 15000);

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'Invalid email or password credentials.');
    }
    return data;
  },

  async register(userData) {
    const res = await fetchWithTimeout(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(userData)
    }, 15000);

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const errorMsg = data.errors ? Object.values(data.errors).flat().join(', ') : (data.message || 'Registration failed');
      throw new Error(errorMsg);
    }
    return data;
  },

  async logout() {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/logout`, {
        method: 'POST',
        headers: getAuthHeaders()
      }, 5000);
      return await res.json().catch(() => ({ success: true }));
    } catch (err) {
      console.warn('Logout API warning:', err.message);
      return { success: true };
    }
  },

  async getMe() {
    const res = await fetchWithTimeout(`${API_BASE}/me`, { headers: getAuthHeaders() }, 8000);
    if (!res.ok) throw new Error('Failed to fetch profile');
    return await res.json();
  },

  async getOrders() {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/orders`, { headers: getAuthHeaders() }, 10000);
      if (!res.ok) throw new Error('Failed to fetch orders');
      return await res.json();
    } catch (err) {
      console.warn('Orders API error:', err);
      return { success: false, data: [] };
    }
  }
};
