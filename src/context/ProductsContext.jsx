import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { api } from '../services/api';
import { SERVICES_PACKAGES } from '../data/productsData';

const ProductsContext = createContext(null);

// Slug generator
const toSlug = (text) => {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Smart fallback image matcher based on product name and category
export const getSmartProductImage = (item) => {
  const name = String(item?.name || '').toLowerCase();
  const cat = String(typeof item?.category === 'object' ? (item?.category?.name || '') : (item?.category || '')).toLowerCase();

  if (name.includes('wellness') || (name.includes('health') && !name.includes('tea'))) return '/images/health-wellness-ayurveda.jpg';
  if (name.includes('starter') || name.includes('hamper') || name.includes('package') || name.includes('kit')) return '/images/family-grocery-hamper.jpg';
  if (name.includes('besan')) return '/images/besan.jpg';
  if (name.includes('atta') || name.includes('wheat') || name.includes('flour') || name.includes('suji') || name.includes('maida')) return '/images/aashirvaad-atta.jpg';
  if (name.includes('mustard') || (name.includes('oil') && !name.includes('sunflower'))) return '/images/fortune-oil.jpg';
  if (name.includes('sunflower') || name.includes('oil')) return '/images/fortune-oil.jpg';
  if (name.includes('rice') || name.includes('basmati') || name.includes('chawal')) return '/images/daawat-rice.jpg';
  if (name.includes('dal') || name.includes('toor') || name.includes('pulse') || name.includes('chana') || name.includes('moong')) return '/images/tata-dal.jpg';
  if (name.includes('ghee') || name.includes('butter') || name.includes('amul')) return '/images/amul-ghee.jpg';
  if (name.includes('tea') || name.includes('chai')) return '/images/tata-tea.jpg';
  if (name.includes('chocolate') || name.includes('dairy milk') || name.includes('cadbury') || name.includes('silk')) return '/images/cadbury-dairy-milk.jpg';
  if (name.includes('noodle') || name.includes('maggi')) return '/images/maggi-noodles.jpg';
  if (name.includes('detergent') || name.includes('surf') || name.includes('powder')) return '/images/surf-excel.jpg';
  if (name.includes('dishwash') || name.includes('vim') || name.includes('gel')) return '/images/vim-gel.jpg';
  if (name.includes('toothpaste') || name.includes('colgate') || name.includes('oral')) return '/images/colgate-maxfresh.jpg';
  if (name.includes('chyawanprash') || name.includes('awaleha')) return '/images/dabur-chyawanprash.jpg';
  if (name.includes('honey') || name.includes('tulsi') || name.includes('green tea') || name.includes('ayurved')) return '/images/health-wellness-ayurveda.jpg';
  if (name.includes('handwash') || name.includes('dettol') || name.includes('soap')) return '/images/dettol-handwash.jpg';
  
  if (cat.includes('beverage') || cat.includes('drink')) return '/images/tata-tea.jpg';
  if (cat.includes('food')) return '/images/tata-tea.jpg';
  if (cat.includes('home') || cat.includes('personal') || cat.includes('cleaning')) return '/images/surf-excel.jpg';
  if (cat.includes('health') || cat.includes('wellness')) return '/images/health-wellness-ayurveda.jpg';
  if (cat.includes('grocery') || cat.includes('staple')) return '/images/family-grocery-hamper.jpg';

  return '/images/family-grocery-hamper.jpg';
};

// Normalize a single product item from backend data
export const normalizeProduct = (item) => {
  if (!item) return null;

  const rawBrand = item.brand_name || (typeof item.brand === 'object' ? item.brand?.name : item.brand) || 'KharchDaan';
  const rawCat = item.category_name || (typeof item.category === 'object' ? item.category?.name : item.category) || 'Grocery';
  const rawSubCat = item.subCategory || item.sub_category || (typeof item.sub_category === 'object' ? item.sub_category?.name : null) || null;

  const price = Number(item.price ?? 0);
  const mrp = Number(item.mrp ?? (price > 0 ? Math.round(price * 1.20) : 0));
  const displayPrice = Number(item.display_price ?? price);

  const discount = item.discount || (mrp > price ? `${Math.round(((mrp - price) / mrp) * 100)}% OFF` : '15% OFF');

  let rawImage = item.image_url || item.image;

  if (typeof rawImage === 'string') {
    // If it's a relative path stored by Laravel disk (e.g. "products/xyz.png")
    if (rawImage.startsWith('products/') || rawImage.startsWith('banners/') || rawImage.startsWith('categories/')) {
      const apiBase = import.meta.env.VITE_API_URL || 'https://kharchdaan-backend.onrender.com/api';
      const host = apiBase.replace(/\/api.*$/, '');
      rawImage = `${host}/media/${rawImage}`;
    } else if (rawImage.startsWith('/media/')) {
      const apiBase = import.meta.env.VITE_API_URL || 'https://kharchdaan-backend.onrender.com/api';
      const host = apiBase.replace(/\/api.*$/, '');
      rawImage = `${host}${rawImage}`;
    }
  }

  if (!rawImage || typeof rawImage !== 'string' || rawImage.includes('default-product.svg') || rawImage === 'null') {
    rawImage = getSmartProductImage(item);
  }
  if (typeof rawImage === 'string' && /https?:\/\/[^/]+\/media\/images\//.test(rawImage)) {
    rawImage = rawImage.replace(/^https?:\/\/[^/]+\/media\/images\//, '/images/');
  }
  const image = rawImage;

  const images = Array.isArray(item.images) && item.images.length > 0 
    ? item.images.map(img => {
        if (!img || typeof img !== 'string' || img.includes('default-product.svg') || img === 'null') {
          return image;
        }
        if (img.startsWith('products/') || img.startsWith('banners/') || img.startsWith('categories/')) {
          const apiBase = import.meta.env.VITE_API_URL || 'https://kharchdaan-backend.onrender.com/api';
          const host = apiBase.replace(/\/api.*$/, '');
          return `${host}/media/${img}`;
        }
        if (/https?:\/\/[^/]+\/media\/images\//.test(img)) {
          return img.replace(/^https?:\/\/[^/]+\/media\/images\//, '/images/');
        }
        return img;
      })
    : [image];

  const variants = Array.isArray(item.variants) && item.variants.length > 0
    ? item.variants
    : [
        { id: 'v1', size: item.weight || 'Standard Pack', price: price, mrp: mrp, isDefault: true }
      ];

  const cashbackAmt = Number(item.cashbackAmount ?? item.cashback_amount ?? Math.max(15, Math.round(price * 0.10)));

  return {
    id: String(item.id || toSlug(item.name)),
    name: item.name || 'FMCG Product',
    slug: item.slug || toSlug(item.name),
    sku: item.sku || `KD-${toSlug(item.name).slice(0, 8).toUpperCase()}`,
    brand: rawBrand,
    brand_details: item.brand_details || null,
    category: rawCat,
    category_details: item.category_details || null,
    category_slug: item.category_slug || toSlug(rawCat),
    subCategory: rawSubCat,
    weight: item.weight || '1 Unit',
    price: price,
    mrp: mrp,
    sale_price: item.sale_price !== undefined ? Number(item.sale_price) : price,
    display_price: displayPrice,
    discount: discount,
    image: image,
    image_url: item.image_url || image,
    images: images,
    cashbackPercent: Number(item.cashbackPercent ?? item.cashback_percent ?? 100),
    cashbackAmount: cashbackAmt,
    pvPoints: Number(item.pvPoints ?? item.pv_points ?? Math.max(25, Math.round(price * 0.20))),
    rating: Number(item.rating ?? 4.9),
    reviews: Number(item.reviews ?? 240),
    inStock: item.inStock !== undefined ? Boolean(item.inStock) : (item.available_stock !== undefined ? item.available_stock > 0 : true),
    stock_status: item.stock_status || (item.available_stock > 0 ? 'in_stock' : 'out_of_stock'),
    available_stock: item.available_stock !== undefined ? Number(item.available_stock) : 100,
    featured: Boolean(item.featured ?? false),
    shortDescription: item.shortDescription || item.short_desc || item.short_description || '',
    description: item.description || '',
    variants: variants,
    specifications: item.specifications || {
      'Brand': rawBrand,
      'Category': rawCat,
      'Quality Check': '100% Genuine Certified',
      'Country of Origin': 'India'
    },
    ingredients: item.ingredients || 'Standard genuine FMCG formulation compliant with FSSAI regulations.'
  };
};

export const ProductsProvider = ({ children }) => {
  // Start with empty state and strictly load from backend API
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  const [backendError, setBackendError] = useState(null);
  const [lastFetchedAt, setLastFetchedAt] = useState(null);

  const fetchProductsFromBackend = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getProducts({ per_page: 100 });
      if (res && res.success && Array.isArray(res.data)) {
        // Normalize backend items strictly from live database
        const backendNormalized = res.data.map(item => normalizeProduct(item));
        setProducts(backendNormalized);
        setIsBackendConnected(true);
        setBackendError(null);
        setLastFetchedAt(new Date());
        console.log(`[KharchDaan API] Successfully loaded ${backendNormalized.length} products live from backend.`);
      } else {
        setIsBackendConnected(false);
        setBackendError(res?.error || 'Backend returned empty or invalid response.');
        setProducts([]);
      }
    } catch (err) {
      console.warn('[KharchDaan API] Products fetch error:', err.message);
      setIsBackendConnected(false);
      setBackendError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductsFromBackend();
  }, [fetchProductsFromBackend]);

  // Robust product lookup by identifier (ID, slug, or name) strictly in active products
  const findProduct = useCallback((identifier) => {
    if (!identifier) return null;
    const target = String(identifier).trim().toLowerCase();

    // 1. Direct ID match
    let found = products.find(p => p.id && String(p.id).toLowerCase() === target);
    if (found) return found;

    // 2. Exact slug match
    found = products.find(p => p.slug === target || toSlug(p.name) === target || toSlug(p.id) === target);
    if (found) return found;

    // 3. SKU match
    found = products.find(p => p.sku && p.sku.toLowerCase() === target);
    if (found) return found;

    // 4. Partial slug match
    found = products.find(p => target.includes(p.slug) || (p.slug && p.slug.includes(target)));
    if (found) return found;

    // 5. Name contains target
    found = products.find(p => (p.name || '').toLowerCase().includes(target));
    return found || null;
  }, [products]);

  // Dynamic category list with accurate counts based strictly on active catalog
  const categoriesWithCounts = useMemo(() => {
    const CATEGORY_DISPLAY_MAP = {
      'Grocery': 'Grocery & Staples',
      'Daily Needs': 'Grocery & Staples',
      'Beverages': 'Beverages & Drinks',
      'Food': 'Food & Beverages',
      'Home': 'Personal & Household Care',
      'Health': 'Health & Wellness',
      'Snacks': 'Snacks & Packaged Food'
    };

    const countMap = {};
    products.forEach(p => {
      const cat = p.category || 'Other';
      countMap[cat] = (countMap[cat] || 0) + 1;
    });

    const list = [
      { id: 'All', name: 'All Products', count: products.length }
    ];

    Object.entries(countMap).forEach(([catKey, count]) => {
      list.push({
        id: catKey,
        name: CATEGORY_DISPLAY_MAP[catKey] || catKey,
        count
      });
    });

    return list;
  }, [products]);

  const value = {
    products,
    servicesPackages: SERVICES_PACKAGES,
    findProduct,
    loading,
    isBackendConnected,
    backendError,
    lastFetchedAt,
    refreshProducts: fetchProductsFromBackend,
    categoriesWithCounts
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
