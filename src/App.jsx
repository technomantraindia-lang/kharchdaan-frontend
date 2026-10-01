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
import { GroceryStaplesPage } from './components/topics/GroceryStaplesPage';
import { FoodBeveragesPage } from './components/topics/FoodBeveragesPage';
import { PersonalCarePage } from './components/topics/PersonalCarePage';
import { HealthWellnessPage } from './components/topics/HealthWellnessPage';
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
import { IndianCornerFiligree } from './components/StepIllustrations';
import { ALL_PRODUCTS } from './data/productsData';
import './App.css';

function MainStore() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(ALL_PRODUCTS[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('matrix-system');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId || 'All');
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (page, extra = null) => {
    if (page === 'products' && extra) setSelectedCategory(extra);
    if (page === 'direct-selling-topic') setSelectedTopic(extra || 'matrix-system');
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="kharchdaan-page-wrapper">
      {/* Decorative Traditional Corner Filigrees */}
      <IndianCornerFiligree position="top-right" />
      <IndianCornerFiligree position="mid-right" />
      <IndianCornerFiligree position="bottom-right" />

      {/* 1. Header & Top Bar (Same across all pages) */}
      <Navbar
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenAccount={() => setAccountModalOpen(true)}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
        currentPage={currentPage}
        onNavigate={handleNavigation}
        onSelectCategory={handleCategorySelect}
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
        <GroceryStaplesPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products', 'Grocery')}
        />
      ) : currentPage === 'food-beverages' ? (
        <FoodBeveragesPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products', 'Food')}
        />
      ) : currentPage === 'personal-household-care' || currentPage === 'personal-care' ? (
        <PersonalCarePage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products', 'Beauty')}
        />
      ) : currentPage === 'health-wellness' ? (
        <HealthWellnessPage
          onNavigate={handleNavigation}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShopClick={() => handleNavigation('products', 'Health')}
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

          {/* Why Choose KharchDaan.Com & Download App Section */}
          <WhyChooseAndAppSection />

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

      <CartDrawer onOpenAuth={() => setAuthModalOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <MainStore />
      </CartProvider>
    </AuthProvider>
  );
}
