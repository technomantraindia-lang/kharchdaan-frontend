import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ShopByCategorySection } from './components/ShopByCategorySection';
import { FeaturedProductsCarousel } from './components/FeaturedProductsCarousel';
import { HowItWorksSteps } from './components/HowItWorksSteps';
import { NetworkStructureSection } from './components/NetworkStructureSection';
import { WhyChooseAndAppSection } from './components/WhyChooseAndAppSection';
import { OurPartnersStrip } from './components/OurPartnersStrip';
import { ProductsServicesSection } from './components/ProductsServicesSection';
import { ProductsAndServicesPage } from './components/ProductsAndServicesPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutUsPage } from './components/AboutUsPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { ContactUsPage } from './components/ContactUsPage';
import { DirectSellingTopicPage } from './components/DirectSellingTopicPage';
import { PowerMatrixPage } from './components/topics/PowerMatrixPage';
import { EarningDepthPage } from './components/topics/EarningDepthPage';
import { RoyaltyPoolPage } from './components/topics/RoyaltyPoolPage';
import { InstantPayoutsPage } from './components/topics/InstantPayoutsPage';
import { FoundationSevaPage } from './components/topics/FoundationSevaPage';
import { WomenEmpowermentPage } from './components/topics/WomenEmpowermentPage';
import { KiranaModernizationPage } from './components/topics/KiranaModernizationPage';
import { GovtEthicsPage } from './components/topics/GovtEthicsPage';
import { CategoryProductListPage } from './components/CategoryProductListPage';
import { KiranaNetworkPage } from './components/topics/KiranaNetworkPage';
import { InstantCashbackWalletPage } from './components/topics/InstantCashbackWalletPage';
import { GenuineBrandStockPage } from './components/topics/GenuineBrandStockPage';
import { MonthlyRationPage } from './components/topics/MonthlyRationPage';
import { FamilyGroceryHamperPage } from './components/topics/FamilyGroceryHamperPage';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { AccountModal } from './components/AccountModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { IndianCornerFiligree } from './components/StepIllustrations';
import { Preloader } from './components/Preloader';
import { ProductsProvider, useProducts } from './context/ProductsContext';
import { ALL_PRODUCTS } from './data/productsData';
import './App.css';

// Helper to generate clean URL slug
const toSlug = (text) => {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper to find a product by ID, slug, or name
const findProduct = (identifier) => {
  if (!identifier) return null;
  const target = String(identifier).trim().toLowerCase();
  
  // 1. Direct ID match
  let found = ALL_PRODUCTS.find(p => p.id && String(p.id).toLowerCase() === target);
  if (found) return found;

  // 2. Exact slug match
  found = ALL_PRODUCTS.find(p => p.slug === target || toSlug(p.name) === target || toSlug(p.id) === target);
  if (found) return found;

  // 3. SKU match
  found = ALL_PRODUCTS.find(p => p.sku && p.sku.toLowerCase() === target);
  if (found) return found;

  // 4. Partial slug match
  found = ALL_PRODUCTS.find(p => target.includes(toSlug(p.name)) || toSlug(p.name).includes(target));
  if (found) return found;

  // 5. Name contains target
  found = ALL_PRODUCTS.find(p => (p.name || '').toLowerCase().includes(target));
  return found || null;
};

// Mapping of route slugs to valid page identifiers
const PAGE_SLUG_MAP = {
  'about': 'about',
  'about-us': 'about',
  'how-it-works': 'how-it-works',
  'contact': 'contact',
  'contact-us': 'contact',
  'products': 'products',
  'store': 'products',
  'shop': 'products',
  'power-matrix': 'power-matrix',
  'earning-depth': 'earning-depth',
  'royalty-pool': 'royalty-pool',
  'instant-payouts': 'instant-payouts',
  'foundation-seva': 'foundation-seva',
  'women-empowerment': 'women-empowerment',
  'kirana-merchant': 'kirana-merchant',
  'govt-ethics': 'govt-ethics',
  'direct-selling-topic': 'direct-selling-topic',
  'grocery-staples': 'grocery-staples',
  'food-beverages': 'food-beverages',
  'personal-household-care': 'personal-household-care',
  'personal-care': 'personal-care',
  'health-wellness': 'health-wellness',
  'neighbourhood-kirana-network': 'neighbourhood-kirana-network',
  'kirana-network': 'kirana-network',
  'instant-cashback-wallet': 'instant-cashback-wallet',
  'genuine-brand-stock': 'genuine-brand-stock',
  'monthly-ration-delivery': 'monthly-ration-delivery',
  'monthly-ration': 'monthly-ration',
  'family-grocery-hamper': 'family-grocery-hamper',
  'cart': 'cart',
  'shopping-cart': 'cart',
  'bag': 'cart',
  'checkout': 'checkout',
  'order-checkout': 'checkout',
  'order-success': 'checkout'
};

const parseRouteFromLocation = () => {
  try {
    const rawPath = (window.location.pathname || '').replace(/^\/|\/$/g, '');
    const searchParams = new URLSearchParams(window.location.search || '');
    const hash = (window.location.hash || '').replace(/^#\/?/, '');
    const hashParams = hash.includes('?') ? new URLSearchParams(hash.split('?')[1]) : new URLSearchParams();
    const cleanHash = hash.split('?')[0].replace(/^\/|\/$/g, '');

    // 1. Check for product in query params (e.g. ?product=prod-oil-mustard)
    const productParam = searchParams.get('product') || 
                         searchParams.get('productId') || 
                         searchParams.get('id') ||
                         hashParams.get('product') ||
                         hashParams.get('id');

    if (productParam) {
      const prod = findProduct(productParam);
      if (prod) {
        return { page: 'product-detail', product: prod, category: prod.category || 'All', topic: 'matrix-system' };
      }
    }

    // Check path /product/:id or /p/:id
    const productPathMatch = rawPath.match(/^(?:product|p)\/(.+)$/i) || cleanHash.match(/^(?:product|p)\/(.+)$/i);
    if (productPathMatch) {
      const prod = findProduct(productPathMatch[1]);
      if (prod) {
        return { page: 'product-detail', product: prod, category: prod.category || 'All', topic: 'matrix-system' };
      }
    }

    // 2. Check for category param
    const categoryParam = searchParams.get('category') || searchParams.get('cat') || hashParams.get('category');
    if (categoryParam) {
      return { page: 'products', product: ALL_PRODUCTS[0], category: decodeURIComponent(categoryParam), topic: 'matrix-system' };
    }

    // 3. Check for topic param
    const topicParam = searchParams.get('topic') || hashParams.get('topic');
    if (topicParam) {
      return { page: 'direct-selling-topic', product: ALL_PRODUCTS[0], category: 'All', topic: topicParam };
    }

    // 4. Check known page slug in path or hash
    const targetSlug = rawPath || cleanHash;
    if (targetSlug && PAGE_SLUG_MAP[targetSlug.toLowerCase()]) {
      return { page: PAGE_SLUG_MAP[targetSlug.toLowerCase()], product: ALL_PRODUCTS[0], category: 'All', topic: 'matrix-system' };
    }

    // 5. Fallback to localStorage / sessionStorage persistence
    const savedPage = sessionStorage.getItem('kharchdaan_current_page') || localStorage.getItem('kharchdaan_current_page');
    const savedProductId = sessionStorage.getItem('kharchdaan_product_id') || localStorage.getItem('kharchdaan_product_id');
    const savedCategory = sessionStorage.getItem('kharchdaan_category') || localStorage.getItem('kharchdaan_category');
    const savedTopic = sessionStorage.getItem('kharchdaan_topic') || localStorage.getItem('kharchdaan_topic');

    if (savedPage && (savedPage === 'product-detail' || PAGE_SLUG_MAP[savedPage])) {
      if (savedPage === 'product-detail' && savedProductId) {
        const prod = findProduct(savedProductId) || ALL_PRODUCTS[0];
        return { page: 'product-detail', product: prod, category: savedCategory || prod.category || 'All', topic: savedTopic || 'matrix-system' };
      }
      return { 
        page: savedPage, 
        product: (savedProductId ? findProduct(savedProductId) : null) || ALL_PRODUCTS[0], 
        category: savedCategory || 'All', 
        topic: savedTopic || 'matrix-system' 
      };
    }
  } catch (e) {
    console.error('Error parsing route:', e);
  }

  return { page: 'home', product: ALL_PRODUCTS[0], category: 'All', topic: 'matrix-system' };
};

const getRouteUrl = (page, extra = null, product = null) => {
  if (page === 'home') return '/';
  if (page === 'product-detail') {
    const prod = product || (typeof extra === 'object' ? extra : findProduct(extra));
    if (prod) {
      return `/product/${prod.id || toSlug(prod.name)}`;
    }
    return '/products';
  }
  if (page === 'products') {
    const cat = typeof extra === 'string' && extra !== 'All' ? extra : null;
    return cat ? `/products?category=${encodeURIComponent(cat)}` : '/products';
  }
  if (page === 'direct-selling-topic') {
    return `/direct-selling?topic=${encodeURIComponent(extra || 'matrix-system')}`;
  }
  return `/${page}`;
};

function MainStore() {
  const { products, findProduct: findProductFromContext, isBackendConnected } = useProducts();
  const initialRoute = parseRouteFromLocation();
  const [currentPage, setCurrentPage] = useState(initialRoute.page); 
  const [searchTerm, setSearchTerm] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(initialRoute.product);
  const [selectedCategory, setSelectedCategory] = useState(initialRoute.category);
  const [selectedTopic, setSelectedTopic] = useState(initialRoute.topic);

  // Sync selectedProduct with live backend data once loaded
  useEffect(() => {
    if (selectedProduct?.id) {
      const live = findProductFromContext(selectedProduct.id);
      if (live) setSelectedProduct(live);
    }
  }, [products]);

  // Sync state to URL and localStorage
  const syncRouteAndStorage = (page, extra = null, product = null, push = true) => {
    const url = getRouteUrl(page, extra, product);
    try {
      if (push) {
        window.history.pushState({ page, extra, productId: product?.id }, '', url);
      } else {
        window.history.replaceState({ page, extra, productId: product?.id }, '', url);
      }
    } catch {
      // Graceful fallback if window.history has restricted origin
    }

    try {
      localStorage.setItem('kharchdaan_current_page', page);
      sessionStorage.setItem('kharchdaan_current_page', page);
      if (product?.id) {
        localStorage.setItem('kharchdaan_product_id', product.id);
        sessionStorage.setItem('kharchdaan_product_id', product.id);
      }
      if (page === 'products' && extra) {
        localStorage.setItem('kharchdaan_category', extra);
        sessionStorage.setItem('kharchdaan_category', extra);
      }
      if (page === 'direct-selling-topic' && extra) {
        localStorage.setItem('kharchdaan_topic', extra);
        sessionStorage.setItem('kharchdaan_topic', extra);
      }
    } catch {}
  };

  // Listen to browser Back / Forward buttons and URL changes
  useEffect(() => {
    // Initial sync on mount to guarantee URL matches restored page
    syncRouteAndStorage(initialRoute.page, initialRoute.category, initialRoute.product, false);

    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setCurrentPage(route.page);
      setSelectedProduct(route.product);
      setSelectedCategory(route.category);
      setSelectedTopic(route.topic);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleCategorySelect = (categoryId) => {
    const cat = categoryId || 'All';
    setSelectedCategory(cat);
    setCurrentPage('products');
    syncRouteAndStorage('products', cat, null, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    syncRouteAndStorage('product-detail', null, product, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (page, extra = null) => {
    if (page === 'products') {
      const cat = extra || 'All';
      setSelectedCategory(cat);
      setCurrentPage('products');
      syncRouteAndStorage('products', cat, null, true);
    } else if (page === 'direct-selling-topic') {
      const topic = extra || 'matrix-system';
      setSelectedTopic(topic);
      setCurrentPage('direct-selling-topic');
      syncRouteAndStorage('direct-selling-topic', topic, null, true);
    } else {
      setCurrentPage(page);
      syncRouteAndStorage(page, extra, null, true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    setCurrentPage('products');
    syncRouteAndStorage('products', selectedCategory, null, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="kharchdaan-page-wrapper">
      {/* Ultra-Premium Clean KharchDaan Preloader */}
      <Preloader />

      {/* Decorative Traditional Corner Filigrees */}
      <IndianCornerFiligree position="top-right" />
      <IndianCornerFiligree position="mid-right" />
      <IndianCornerFiligree position="bottom-right" />

      {/* 1. Header & Top Bar (Same across all pages) */}
      <Navbar
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenAccount={() => setAccountModalOpen(true)}
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
        currentPage={currentPage}
        onNavigate={handleNavigation}
        onSelectCategory={handleCategorySelect}
        onSelectProduct={handleProductSelect}
      />

      {/* 2. Main Page Content */}
      {currentPage === 'about' ? (
        <AboutUsPage
          onNavigateHome={() => handleNavigation('home')}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'how-it-works' ? (
        <HowItWorksPage
          onNavigateHome={() => handleNavigation('home')}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'contact' ? (
        <ContactUsPage
          onNavigateHome={() => handleNavigation('home')}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'products' ? (
        <ProductsAndServicesPage
          onNavigateHome={() => handleNavigation('home')}
          onProductClick={handleProductSelect}
          initialCategory={selectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'product-detail' ? (
        <ProductDetailPage
          product={selectedProduct}
          onNavigateHome={() => handleNavigation('home')}
          onNavigateProducts={() => handleNavigation('products')}
          onProductClick={handleProductSelect}
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'power-matrix' ? (
        <PowerMatrixPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'earning-depth' ? (
        <EarningDepthPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'royalty-pool' ? (
        <RoyaltyPoolPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'instant-payouts' ? (
        <InstantPayoutsPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'foundation-seva' ? (
        <FoundationSevaPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'women-empowerment' ? (
        <WomenEmpowermentPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'kirana-merchant' ? (
        <KiranaModernizationPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'govt-ethics' ? (
        <GovtEthicsPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'direct-selling-topic' ? (
        <DirectSellingTopicPage
          initialTopicId={selectedTopic}
          onNavigateHome={() => handleNavigation('home')}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
          onSelectTopic={(topicId) => setSelectedTopic(topicId)}
        />
      ) : currentPage === 'grocery-staples' ? (
        <ProductsAndServicesPage
          onNavigateHome={() => handleNavigation('home')}
          onProductClick={handleProductSelect}
          initialCategory="Daily Needs"
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'food-beverages' ? (
        <ProductsAndServicesPage
          onNavigateHome={() => handleNavigation('home')}
          onProductClick={handleProductSelect}
          initialCategory="Food"
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'personal-household-care' || currentPage === 'personal-care' ? (
        <ProductsAndServicesPage
          onNavigateHome={() => handleNavigation('home')}
          onProductClick={handleProductSelect}
          initialCategory="Home"
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'health-wellness' ? (
        <ProductsAndServicesPage
          onNavigateHome={() => handleNavigation('home')}
          onProductClick={handleProductSelect}
          initialCategory="Health"
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'neighbourhood-kirana-network' || currentPage === 'kirana-network' ? (
        <KiranaNetworkPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'instant-cashback-wallet' ? (
        <InstantCashbackWalletPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'genuine-brand-stock' ? (
        <GenuineBrandStockPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products')}
        />
      ) : currentPage === 'monthly-ration-delivery' || currentPage === 'monthly-ration' ? (
        <MonthlyRationPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products', 'Grocery')}
        />
      ) : currentPage === 'family-grocery-hamper' ? (
        <FamilyGroceryHamperPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products', 'Grocery')}
        />
      ) : currentPage === 'cart' ? (
        <CartPage
          onNavigateHome={() => handleNavigation('home')}
          onNavigateCheckout={() => handleNavigation('checkout')}
          onShopClick={() => handleNavigation('products')}
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : currentPage === 'checkout' ? (
        <CheckoutPage
          onNavigateHome={() => handleNavigation('home')}
          onNavigateCart={() => handleNavigation('cart')}
          onShopClick={() => handleNavigation('products')}
          onOpenAuth={() => setAuthModalOpen(true)}
        />
      ) : (
        <>
          {/* Hero Section */}
          <HeroBanner
            onJoinClick={() => setAuthModalOpen(true)}
            onShopClick={() => handleNavigation('products')}
          />

          {/* Shop by Category Section */}
          <ShopByCategorySection
            onSelectCategory={handleCategorySelect}
            activeCategoryId={selectedCategory}
          />

          {/* Featured Products Carousel */}
          <FeaturedProductsCarousel
            onQuickView={handleProductSelect}
            activeCategoryFilter={selectedCategory}
            onCategoryFilterChange={handleCategorySelect}
          />

          {/* How It Works (5 Connected Steps) */}
          <HowItWorksSteps onGetStarted={() => setAuthModalOpen(true)} />

          {/* Direct Selling Network (3 Columns) */}
          <NetworkStructureSection
            onOpenDetailsModal={() => setAuthModalOpen(true)}
          />

          {/* Why Choose KharchDaan.Com & 100% Direct Cashback Hub */}
          <WhyChooseAndAppSection 
            onShopClick={() => handleNavigation('products')}
            onOpenAuth={() => setAuthModalOpen(true)}
          />

          {/* Our Partners Strip */}
          <OurPartnersStrip />
        </>
      )}

      {/* 3. Footer (Same across all pages) */}
      <Footer 
        onNavigate={handleNavigation}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      {/* Popups, Modals & Cart Drawer */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
      />

      <CartDrawer 
        onOpenAuth={() => setAuthModalOpen(true)} 
        onNavigate={handleNavigation}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <MainStore />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
