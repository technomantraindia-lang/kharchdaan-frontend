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
  async getProducts(params = {}, retry = true) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, value);
      }
    });
    const url = `${API_BASE}/products${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    try {
      const res = await fetchWithTimeout(url, { headers: getAuthHeaders() }, 30000);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      if (retry) {
        console.warn('API getProducts initial attempt failed, retrying for server wake-up:', err.message);
        await new Promise(r => setTimeout(r, 1500));
        return this.getProducts(params, false);
      }
      console.warn('API getProducts error:', err.message);
      return { success: false, data: [], pagination: null, error: err.message };
    }
  },

  async getProduct(slug) {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/products/${slug}`, { headers: getAuthHeaders() }, 20000);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API getProduct error:', err.message);
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

  async acceptTerms(retry = true) {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/me/accept-terms`, {
        method: 'POST',
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ accept_terms: true }),
      }, 30000);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || 'Unable to accept Terms & Conditions.');
      }
      return data;
    } catch (err) {
      if (retry && String(err.message || '').toLowerCase().includes('timed out')) {
        await new Promise((r) => setTimeout(r, 1500));
        return this.acceptTerms(false);
      }
      throw err;
    }
  },

  async getTransactions(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetchWithTimeout(`${API_BASE}/me/transactions${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders(),
    }, 10000);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'Failed to load transactions');
    }
    return data;
  },

  async getMyReferrals() {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/me/referrals`, { headers: getAuthHeaders() }, 10000);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || 'Failed to load sponsored users');
      }
      return data;
    } catch (err) {
      console.warn('Referrals API error:', err.message);
      return { success: false, data: { direct_referral_count: 0, referrals: [] }, error: err.message };
    }
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
  },

  async createOrder(orderPayload) {
    const token = localStorage.getItem('kharchdaan_auth_token');
    const isFormData = typeof FormData !== 'undefined' && orderPayload instanceof FormData;
    const headers = {
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    };

    const res = await fetchWithTimeout(`${API_BASE}/orders`, {
      method: 'POST',
      headers,
      body: isFormData ? orderPayload : JSON.stringify(orderPayload),
    }, 20000);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || `Order creation failed with status ${res.status}`);
    }
    return data;
  },

  async verifyRazorpayPayment(payload) {
    const res = await fetchWithTimeout(`${API_BASE}/payments/razorpay/verify`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    }, 20000);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'Payment verification failed.');
    }
    return data;
  },

  async cancelOrder(orderId) {
    const res = await fetchWithTimeout(`${API_BASE}/orders/${orderId}/cancel`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({}),
    }, 15000);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'Unable to cancel order.');
    }
    return data;
  },

  async getKyc() {
    const res = await fetchWithTimeout(`${API_BASE}/me/kyc`, { headers: getAuthHeaders() }, 10000);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'Failed to load KYC.');
    }
    return data;
  },

  async submitKyc(formData) {
    const token = localStorage.getItem('kharchdaan_auth_token');
    const res = await fetchWithTimeout(`${API_BASE}/me/kyc`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: formData,
    }, 30000);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'KYC submit failed.');
    }
    return data;
  },
};

export function loadRazorpayCheckoutScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Razorpay is only available in the browser.'));
  }
  if (window.Razorpay) {
    return Promise.resolve(window.Razorpay);
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-razorpay-checkout]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Razorpay));
      existing.addEventListener('error', () => reject(new Error('Failed to load Razorpay Checkout.')));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.dataset.razorpayCheckout = '1';
    script.onload = () => resolve(window.Razorpay);
    script.onerror = () => reject(new Error('Failed to load Razorpay Checkout.'));
    document.body.appendChild(script);
  });
}
