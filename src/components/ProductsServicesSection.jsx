import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../context/ProductsContext';
import { RefreshCw, ShoppingBag, Sparkles, Flame, SlidersHorizontal } from 'lucide-react';

const DEFAULT_CATALOG = [
  {
    id: 1,
    name: "Pure A2 Gir Cow Vedic Bilona Ghee (1 Litre Glass Jar)",
    slug: "pure-a2-gir-cow-bilona-ghee",
    sku: "KD-GHEE-01",
    price: 1999,
    sale_price: 1499,
    display_price: 1499,
    available_stock: 65,
    stock_status: "in_stock",
    featured: true,
    category: { id: 1, name: "Ghee & Oils", slug: "ghee-oils" },
    image_url: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=600&auto=format&fit=crop&q=80",
    description: "100% authentic Vedic Bilona Ghee made from curd of grass-fed A2 Gir cows. Hand-churned using traditional wooden churners."
  },
  {
    id: 2,
    name: "Rajkot Special Strong Hing & Unjha Cumin Combo (600g)",
    slug: "rajkot-hing-unjha-jeera-combo",
    sku: "KD-SPICE-02",
    price: 899,
    sale_price: 649,
    display_price: 649,
    available_stock: 140,
    stock_status: "in_stock",
    featured: true,
    category: { id: 2, name: "Spices & Masala", slug: "spices-masala" },
    image_url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    description: "Rajkot's renowned compounded Asafoetida (100g) paired with Grade-1 hand-cleaned aromatic Unjha Cumin seeds (500g)."
  },
  {
    id: 3,
    name: "Surti Crispy Roasted Methi & Jeera Khakhra Box (12 Pack)",
    slug: "surti-crispy-methi-khakhra-box",
    sku: "KD-SNACK-03",
    price: 999,
    sale_price: 749,
    display_price: 749,
    available_stock: 90,
    stock_status: "in_stock",
    featured: true,
    category: { id: 3, name: "Snacks & Khakhra", slug: "khakhra-farsan" },
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80",
    description: "Slow-roasted whole wheat crispy Khakhras vacuum-sealed for maximum freshness. Perfect healthy anytime snack."
  },
  {
    id: 4,
    name: "Complete Kashi Vishwanath Daily Puja & Havan Kit",
    slug: "kashi-vishwanath-puja-kit",
    sku: "KD-PUJA-04",
    price: 1499,
    sale_price: 999,
    display_price: 999,
    available_stock: 80,
    stock_status: "in_stock",
    featured: true,
    category: { id: 4, name: "Puja Essentials", slug: "puja-spiritual" },
    image_url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop&q=80",
    description: "Sacred Gangajal, natural sandalwood paste, pure dhoop, cow dung dhooni cups, kumkum, akshat, and havan samagri."
  },
  {
    id: 5,
    name: "100% Pure Gir Forest Wild Raw Forest Honey (500g)",
    slug: "gir-forest-raw-forest-honey",
    sku: "KD-HONEY-05",
    price: 699,
    sale_price: 499,
    display_price: 499,
    available_stock: 110,
    stock_status: "in_stock",
    featured: false,
    category: { id: 5, name: "Ayurveda & Health", slug: "ayurveda-health" },
    image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80",
    description: "Ethically harvested raw wild bee honey from the dense Gir forest flora. Unpasteurized and free from added sugars."
  },
  {
    id: 6,
    name: "Premium Royal Basmati Rice Long Grain (5kg Bag)",
    slug: "premium-royal-basmati-rice-5kg",
    sku: "KD-RICE-06",
    price: 650,
    sale_price: 520,
    display_price: 520,
    available_stock: 100,
    stock_status: "in_stock",
    featured: true,
    category: { id: 6, name: "Organic Grains", slug: "grains" },
    image_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80",
    description: "Aged long-grain aromatic Basmati rice, perfectly sorted and cleaned for delicious daily meals and feasts."
  },
  {
    id: 7,
    name: "Assam Orthodox First Flush Black Tea Blend (500g)",
    slug: "assam-orthodox-black-tea-500g",
    sku: "KD-TEA-07",
    price: 450,
    sale_price: 360,
    display_price: 360,
    available_stock: 75,
    stock_status: "in_stock",
    featured: false,
    category: { id: 7, name: "Beverages", slug: "beverages" },
    image_url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
    description: "Rich malty aroma and golden cup color. Selected whole leaves from heritage Assam tea estates."
  },
  {
    id: 8,
    name: "KharchDaan Ultra AMOLED Smartwatch Pro with Calling",
    slug: "kharchdaan-smartwatch-pro-amoled",
    sku: "KD-TECH-08",
    price: 3499,
    sale_price: 2499,
    display_price: 2499,
    available_stock: 50,
    stock_status: "in_stock",
    featured: true,
    category: { id: 8, name: "Smart Gadgets", slug: "smart-gadgets" },
    image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    description: "1.43\" AMOLED display, Bluetooth calling, 7-day battery backup, and 24/7 health tracking analytics."
  }
];

const CATEGORY_TABS = [
  { id: 'all', name: 'All Products' },
  { id: 'ghee-oils', name: '🧈 Ghee & Oils' },
  { id: 'spices-masala', name: '🌶️ Spices & Masala' },
  { id: 'khakhra-farsan', name: '🥨 Snacks & Khakhra' },
  { id: 'puja-spiritual', name: '🪔 Puja Essentials' },
  { id: 'ayurveda-health', name: '🌿 Ayurveda & Health' },
  { id: 'grains', name: '🌾 Grains & Rice' },
  { id: 'smart-gadgets', name: '📱 Smart Gadgets' }
];

export const ProductsServicesSection = ({ onQuickView }) => {
  const { products: contextProducts, loading, refreshProducts } = useProducts();
  const products = (contextProducts && contextProducts.length > 0) ? contextProducts : DEFAULT_CATALOG;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // Filter products based on selected tab
  let filtered = [...products];
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => {
      const catSlug = (p.category_slug || p.category?.slug || (typeof p.category === 'string' ? p.category : '') || '').toLowerCase();
      const catName = (typeof p.category === 'string' ? p.category : (p.category?.name || '')).toLowerCase();
      const cleanFilter = selectedCategory.replace('-', ' ').toLowerCase();
      return (
        catSlug.includes(selectedCategory.toLowerCase()) ||
        catName.includes(cleanFilter) ||
        (p.name && p.name.toLowerCase().includes(selectedCategory.split('-')[0].toLowerCase()))
      );
    });
  }

  // Sort
  if (sortBy === 'price_asc') {
    filtered.sort((a, b) => (a.display_price || a.price) - (b.display_price || b.price));
  } else if (sortBy === 'price_desc') {
    filtered.sort((a, b) => (b.display_price || b.price) - (a.display_price || a.price));
  }

  return (
    <section id="products-services" className="products-services-section-clean">
      <div className="container">
        {/* Section Title with Floral Ornament */}
        <div className="section-ornament-header">
          <span className="ornament-leaf">❧</span>
          <h2 className="section-title-exact">Products & Services</h2>
          <span className="ornament-leaf">❧</span>
        </div>

        <p className="products-section-subtitle">
          Explore handpicked authentic Swadeshi essentials, pure Vedic ghee, regional spices, and lifestyle products with up to 100% cashback!
        </p>

        {/* Filter & Sort Controls Bar */}
        <div className="products-controls-bar">
          <div className="category-tabs-scroll">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`cat-pill-btn ${selectedCategory === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="sort-dropdown-wrap">
            <select
              className="sort-select-input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Sort: Newest Arrivals</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>

            <button 
              className="btn-refresh-catalog" 
              onClick={fetchProducts} 
              title="Refresh Catalog"
            >
              <RefreshCw size={15} />
            </button>
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        {loading ? (
          <div className="products-loading-state">
            <div className="spinner-orange" />
            <p>Loading products...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="products-empty-state">
            <ShoppingBag size={44} className="text-orange" />
            <h3>No products found in this category</h3>
            <p>Try selecting another category or view all products.</p>
            <button 
              className="btn-reset-category" 
              onClick={() => setSelectedCategory('all')}
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="products-cards-grid-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id || product.slug}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
