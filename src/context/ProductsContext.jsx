import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { api } from '../services/api';
import { ALL_PRODUCTS, SERVICES_PACKAGES } from '../data/productsData';

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
  if (name.includes('hamper') || name.includes('starter') || name.includes('wellness') || name.includes('kit') || name.includes('package')) return '/images/family-grocery-hamper.jpg';
  
  if (cat.includes('food') || cat.includes('beverage')) return '/images/tata-tea.jpg';
  if (cat.includes('home') || cat.includes('personal') || cat.includes('cleaning')) return '/images/surf-excel.jpg';
  if (cat.includes('health') || cat.includes('wellness')) return '/images/health-wellness-ayurveda.jpg';

  return '/images/aashirvaad-atta.jpg';
};

// Normalize a single product item from backend or local data
export const normalizeProduct = (item, fallbackCatalog = ALL_PRODUCTS) => {
  if (!item) return null;

  // Find counterpart in fallback catalog for rich descriptions/specifications if needed
  const fallback = fallbackCatalog.find(
    f => (f.id && String(f.id).toLowerCase() === String(item.id || '').toLowerCase()) ||
         (f.sku && String(f.sku).toLowerCase() === String(item.sku || '').toLowerCase()) ||
         (f.slug && String(f.slug).toLowerCase() === String(item.slug || '').toLowerCase()) ||
         (f.name && f.name.toLowerCase() === (item.name || '').toLowerCase())
  );

  const rawBrand = item.brand_name || (typeof item.brand === 'object' ? item.brand?.name : item.brand) || fallback?.brand || 'KharchDaan';
  const rawCat = item.category_name || (typeof item.category === 'object' ? item.category?.name : item.category) || fallback?.category || 'Daily Needs';
  const rawSubCat = item.subCategory || item.sub_category || (typeof item.sub_category === 'object' ? item.sub_category?.name : null) || fallback?.subCategory || null;

  const price = Number(item.price ?? fallback?.price ?? 0);
  const mrp = Number(item.mrp ?? fallback?.mrp ?? (price > 0 ? Math.round(price * 1.20) : 0));
  const displayPrice = Number(item.display_price ?? price);

  const discount = item.discount || (mrp > price ? `${Math.round(((mrp - price) / mrp) * 100)}% OFF` : (fallback?.discount || '15% OFF'));

  let rawImage = item.image || item.image_url || fallback?.image;
  if (!rawImage || rawImage === '/images/default-product.svg' || rawImage === 'null') {
    rawImage = getSmartProductImage(item);
  }
  if (typeof rawImage === 'string' && rawImage.startsWith('http://127.0.0.1:8000/media/images/')) {
    rawImage = rawImage.replace('http://127.0.0.1:8000/media', '');
  }
  const image = rawImage;

  const images = Array.isArray(item.images) && item.images.length > 0 
    ? item.images.map(img => typeof img === 'string' && img.startsWith('http://127.0.0.1:8000/media/images/') ? img.replace('http://127.0.0.1:8000/media', '') : img)
    : [image];

  const variants = Array.isArray(item.variants) && item.variants.length > 0
    ? item.variants
    : (fallback?.variants || [
        { id: 'v1', size: item.weight || 'Standard Pack', price: price, mrp: mrp, isDefault: true }
      ]);

  return {
    id: String(item.id || fallback?.id || toSlug(item.name)),
    name: item.name || fallback?.name || 'FMCG Product',
    slug: item.slug || toSlug(item.name || fallback?.name),
    sku: item.sku || fallback?.sku || `KD-${toSlug(item.name).slice(0, 8).toUpperCase()}`,
    brand: rawBrand,
    brand_details: item.brand_details || null,
    category: rawCat,
    category_details: item.category_details || null,
    category_slug: item.category_slug || toSlug(rawCat),
    subCategory: rawSubCat,
    weight: item.weight || fallback?.weight || '1 Unit',
    price: price,
    mrp: mrp,
    sale_price: item.sale_price !== undefined ? Number(item.sale_price) : (fallback?.price || price),
    display_price: displayPrice,
    discount: discount,
    image: image,
    image_url: item.image_url || image,
    images: images,
    cashbackPercent: Number(item.cashbackPercent ?? fallback?.cashbackPercent ?? 100),
    cashbackAmount: Number(item.cashbackAmount ?? fallback?.cashbackAmount ?? Math.max(15, Math.round(price * 0.10))),
    pvPoints: Number(item.pvPoints ?? fallback?.pvPoints ?? Math.max(25, Math.round(price * 0.20))),
    rating: Number(item.rating ?? fallback?.rating ?? 4.9),
    reviews: Number(item.reviews ?? fallback?.reviews ?? 240),
    inStock: item.inStock !== undefined ? Boolean(item.inStock) : (item.available_stock !== undefined ? item.available_stock > 0 : true),
    stock_status: item.stock_status || (item.available_stock > 0 ? 'in_stock' : 'out_of_stock'),
    available_stock: item.available_stock !== undefined ? Number(item.available_stock) : 100,
    featured: Boolean(item.featured ?? fallback?.featured ?? false),
    shortDescription: item.shortDescription || item.short_desc || item.short_description || fallback?.shortDescription || '',
    description: item.description || fallback?.description || '',
    variants: variants,
    specifications: fallback?.specifications || item.specifications || {
      'Brand': rawBrand,
      'Category': rawCat,
      'Quality Check': '100% Genuine Certified',
      'Country of Origin': 'India'
    },
    ingredients: item.ingredients || fallback?.ingredients || 'Standard genuine FMCG formulation compliant with FSSAI regulations.'
  };
};

export const ProductsProvider = ({ children }) => {
  // Initialize with fallback catalog for instant paint
  const [products, setProducts] = useState(() => {
    return ALL_PRODUCTS.map(p => normalizeProduct(p));
  });
  const [loading, setLoading] = useState(true);
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  const [backendError, setBackendError] = useState(null);
  const [lastFetchedAt, setLastFetchedAt] = useState(null);

  const fetchProductsFromBackend = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getProducts({ per_page: 100 });
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        // Normalize backend items
        const backendNormalized = res.data.map(item => normalizeProduct(item, ALL_PRODUCTS));

        // Combine: Backend items first, then fallback items not present in backend
        const combined = [...backendNormalized];
        ALL_PRODUCTS.forEach(fallbackItem => {
          const exists = combined.some(
            b => b.name?.toLowerCase().trim() === fallbackItem.name?.toLowerCase().trim() ||
                 b.slug === fallbackItem.id ||
                 b.id === fallbackItem.id
          );
          if (!exists) {
            combined.push(normalizeProduct(fallbackItem));
          }
        });

        setProducts(combined);
        setIsBackendConnected(true);
        setBackendError(null);
        setLastFetchedAt(new Date());
        console.log(`[KharchDaan API] Successfully loaded ${backendNormalized.length} products live from backend.`);
      } else {
        setIsBackendConnected(false);
        setBackendError('Backend returned empty or invalid response.');
      }
    } catch (err) {
      console.warn('[KharchDaan API] Products fetch error, fallback active:', err.message);
      setIsBackendConnected(false);
      setBackendError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductsFromBackend();
  }, [fetchProductsFromBackend]);

  // Robust product lookup by identifier (ID, slug, or name)
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

  // Dynamic category list with accurate counts
  const categoriesWithCounts = useMemo(() => {
    const list = [
      { id: 'All', name: 'All Products', count: products.length },
      { id: 'Daily Needs', name: 'Grocery & Staples', count: products.filter(p => p.category === 'Daily Needs').length },
      { id: 'Food', name: 'Food & Beverages', count: products.filter(p => p.category === 'Food').length },
      { id: 'Home', name: 'Personal & Household Care', count: products.filter(p => p.category === 'Home').length },
      { id: 'Health', name: 'Health & Wellness', count: products.filter(p => p.category === 'Health').length }
    ];
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
