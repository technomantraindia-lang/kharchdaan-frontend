import React, { useState } from 'react';
import { 
  Home, ChevronRight, ShoppingBag, ShoppingCart, Check, Star, 
  ShieldCheck, Truck, RefreshCw, Sparkles, Coins, Layers, 
  CheckCircle2, ArrowRight, Heart, Share2, MapPin, Award, 
  HelpCircle, Info, HeartHandshake, Eye
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts, getSmartProductImage } from '../context/ProductsContext';

export const ProductDetailPage = ({ 
  product, 
  onNavigateHome, 
  onNavigateProducts, 
  onProductClick,
  onOpenAuth 
}) => {
  const { addToCart, setIsCartOpen } = useCart();
  const { products } = useProducts();
  const sourceList = products || [];
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.find(v => v.isDefault) || product?.variants?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // 'description' | 'matrix' | 'seva' | 'reviews'
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="product-not-found-container container">
        <h2>Product not found</h2>
        <button className="btn-return-products" onClick={onNavigateProducts}>
          Browse All Products
        </button>
      </div>
    );
  }

  const currentPrice = Number(selectedVariant ? selectedVariant.price : (product.price || 0));
  const currentMrp = Number(selectedVariant ? selectedVariant.mrp : (product.mrp || currentPrice));
  const savings = Math.max(0, currentMrp - currentPrice);
  const discountPercent = currentMrp > currentPrice ? Math.round((savings / currentMrp) * 100) : 0;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: `${product.name} (${selectedVariant?.size || product.weight || '1 Unit'})`,
      price: currentPrice,
      image: product.image,
      cashbackAmount: product.cashbackAmount,
      cashbackPercent: product.cashbackPercent || 100,
      category: product.category
    }, quantity);

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: `${product.name} (${selectedVariant?.size || product.weight || '1 Unit'})`,
      price: currentPrice,
      image: product.image,
      cashbackAmount: product.cashbackAmount,
      cashbackPercent: product.cashbackPercent || 100,
      category: product.category
    }, quantity);

    setIsCartOpen(true);
  };

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setPincodeChecked(true);
    }
  };

  const relatedProducts = sourceList.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="product-detail-page-wrapper">
      <div className="container">
        {/* 1. Breadcrumbs Navigation */}
        <nav className="pdp-breadcrumbs-row" aria-label="Breadcrumb">
          <button className="breadcrumb-link" onClick={onNavigateHome}>
            <Home size={13} />
            <span>Home</span>
          </button>
          <ChevronRight size={13} className="breadcrumb-sep" />
          <button className="breadcrumb-link" onClick={onNavigateProducts}>
            <span>Products & Services</span>
          </button>
          <ChevronRight size={13} className="breadcrumb-sep" />
          <span className="breadcrumb-category">{product.category}</span>
          <ChevronRight size={13} className="breadcrumb-sep" />
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* 2. Main 2-Column Product Stage */}
        <div className="pdp-main-grid">
          
          {/* LEFT: Product Packshot Gallery */}
          <div className="pdp-gallery-column">
            <div className="pdp-main-image-card">
              {/* Top Badges Row */}
              <div className="pdp-image-badges-row">
                <div className="pdp-cashback-badge">
                  <Coins size={13} className="coin-icon" />
                  <span>Up to 100% Direct Cashback</span>
                </div>

                <div className="pdp-verified-seal">
                  <ShieldCheck size={14} />
                  <span>100% Genuine FMCG</span>
                </div>
              </div>

              <div className="pdp-hero-image-wrap">
                <img 
                  src={product.image || getSmartProductImage(product)} 
                  alt={product.name} 
                  className="pdp-hero-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getSmartProductImage(product);
                  }}
                />
              </div>
            </div>

            {/* Pincode Delivery Estimator Box */}
            <div className="pdp-delivery-checker-box">
              <div className="delivery-box-header">
                <Truck size={18} className="text-orange" />
                <div>
                  <strong>Fast Delivery & Doorstep Dispatch</strong>
                  <span>Free shipping on grocery orders above ₹499</span>
                </div>
              </div>

              <form className="pincode-input-row" onSubmit={handleCheckPincode}>
                <div className="pincode-field-wrap">
                  <MapPin size={14} className="pincode-icon" />
                  <input 
                    type="text" 
                    placeholder="Enter 6-digit Pincode..." 
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => { setPincode(e.target.value); setPincodeChecked(false); }}
                  />
                </div>
                <button type="submit" className="btn-check-pincode">
                  Check
                </button>
              </form>

              {pincodeChecked && (
                <div className="pincode-status-alert success">
                  <CheckCircle2 size={15} />
                  <span>Delivery available for <strong>{pincode}</strong>! Guaranteed dispatch within 24 hours.</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Product Details & Purchase Engine */}
          <div className="pdp-details-column">
            
            {/* Top Brand & Category Tag */}
            <div className="pdp-top-brand-row">
              <span className="pdp-brand-badge">{product.brand}</span>
              <span className="pdp-subcat-tag">{product.subCategory || product.category}</span>
              <span className="pdp-stock-tag in-stock">In Stock</span>
            </div>

            {/* Product Title */}
            <h1 className="pdp-product-title">{product.name}</h1>

            {/* Rating Stars & Reviews */}
            <div className="pdp-rating-strip">
              <div className="rating-stars-badge">
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <span className="rating-val">{product.rating}</span>
              </div>
              <span className="rating-sep">•</span>
              <span className="rating-reviews-count">{product.reviews} Verified Member Reviews</span>
              <span className="rating-sep">•</span>
              <span className="rating-badge-genuine">100% Brand Certified</span>
            </div>

            {/* Special Pricing Card with Cashback & PV Breakdown */}
            <div className="pdp-pricing-card">
              <div className="price-top-row">
                <div className="main-price-block">
                  <span className="curr">₹</span>
                  <span className="val">{currentPrice}</span>
                </div>
                <div className="mrp-strike-block">
                  <span className="mrp-label">MRP</span>
                  <span className="mrp-val">₹{currentMrp}</span>
                </div>
                <div className="discount-pill-badge">
                  <span>{discountPercent}% OFF (Save ₹{savings})</span>
                </div>
              </div>

              {/* Direct Cashback & PV Matrix Points Callout */}
              <div className="pdp-rewards-breakdown-box">
                <div className="reward-item cashback">
                  <Coins size={18} className="text-green" />
                  <div>
                    <strong>₹{product.cashbackAmount} Direct Cashback</strong>
                    <span>Credited instantly to your KharchDaan wallet</span>
                  </div>
                </div>
                <div className="reward-item-sep" />
                <div className="reward-item pv">
                  <Layers size={18} className="text-purple" />
                  <div>
                    <strong>+{product.pvPoints} Team PV Points</strong>
                    <span>Generates 20 levels of recurring royalty</span>
                  </div>
                </div>
              </div>

              <div className="pdp-tax-note">
                <span>Inclusive of all GST & taxes. Delivered fresh from verified FMCG partner depot.</span>
              </div>
            </div>

            {/* Variant / Pack Size Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="pdp-variant-selector-section">
                <label className="variant-section-label">Select Pack Size:</label>
                <div className="variant-options-grid">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      className={`variant-option-card ${selectedVariant?.id === v.id ? 'is-selected' : ''}`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      <span className="variant-size">{v.size}</span>
                      <span className="variant-price">₹{v.price}</span>
                      <span className="variant-mrp">MRP ₹{v.mrp}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="pdp-actions-row">
              <div className="pdp-quantity-selector">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button 
                className={`btn-pdp-add-cart ${isAdded ? 'is-added' : ''}`}
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <>
                    <Check size={18} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    <span>Add to Cart • ₹{(currentPrice * quantity).toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <button 
                className="btn-pdp-buy-now"
                onClick={handleBuyNow}
              >
                <span>Buy Now</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* 4 Core Trust Highlights */}
            <div className="pdp-trust-highlights-grid">
              <div className="pdp-trust-item">
                <ShieldCheck size={18} className="text-orange" />
                <div>
                  <strong>100% Genuine FMCG</strong>
                  <span>Direct brand manufacturer sourcing</span>
                </div>
              </div>
              <div className="pdp-trust-item">
                <Coins size={18} className="text-green" />
                <div>
                  <strong>Instant Cashback</strong>
                  <span>Direct daily wallet transfer via UPI</span>
                </div>
              </div>
              <div className="pdp-trust-item">
                <Truck size={18} className="text-blue" />
                <div>
                  <strong>Fast Local Dispatch</strong>
                  <span>Doorstep delivery across Bharat</span>
                </div>
              </div>
              <div className="pdp-trust-item">
                <RefreshCw size={18} className="text-purple" />
                <div>
                  <strong>7-Day Easy Replacement</strong>
                  <span>Zero-hassle member satisfaction</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Detailed Tabbed Specifications Section */}
        <section className="pdp-tabs-section">
          <div className="pdp-tabs-nav-bar">
            <button 
              className={`pdp-tab-nav-btn ${activeTab === 'description' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              <Info size={16} />
              <span>Description & Specifications</span>
            </button>
            <button 
              className={`pdp-tab-nav-btn ${activeTab === 'matrix' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('matrix')}
            >
              <Layers size={16} />
              <span>20-Level Matrix & Cashback Rules</span>
            </button>
            <button 
              className={`pdp-tab-nav-btn ${activeTab === 'seva' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('seva')}
            >
              <HeartHandshake size={16} />
              <span>Social Seva Contribution</span>
            </button>
            <button 
              className={`pdp-tab-nav-btn ${activeTab === 'reviews' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              <Star size={16} />
              <span>Member Reviews ({product.reviews})</span>
            </button>
          </div>

          <div className="pdp-tab-content-panel">
            {/* Tab 1: Description & Specifications */}
            {activeTab === 'description' && (
              <div className="pdp-tab-pane">
                <h3 className="tab-pane-heading">Product Overview</h3>
                <p className="tab-paragraph">{product.description}</p>

                {product.ingredients && (
                  <div className="pdp-ingredients-box">
                    <strong>Ingredients / Formulation:</strong>
                    <p>{product.ingredients}</p>
                  </div>
                )}

                {product.specifications && (
                  <div className="pdp-specs-table-wrapper">
                    <h4 className="specs-table-title">Product Specifications</h4>
                    <table className="pdp-specs-table">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, val]) => (
                          <tr key={key}>
                            <td className="spec-key">{key}</td>
                            <td className="spec-val">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: 20-Level Matrix & Cashback Rules */}
            {activeTab === 'matrix' && (
              <div className="pdp-tab-pane">
                <h3 className="tab-pane-heading">How You & Your Team Earn from This Purchase</h3>
                <p className="tab-paragraph">
                  KharchDaan operates on a 100% transparent Direct Selling compensation model. When you purchase <strong>{product.name}</strong>, wealth is generated and shared throughout the community:
                </p>

                <div className="pdp-matrix-perks-grid">
                  <div className="matrix-perk-card">
                    <div className="perk-icon-circle green"><Coins size={20} /></div>
                    <h4>Direct Member Cashback</h4>
                    <p>Earn <strong>₹{product.cashbackAmount}</strong> instantly credited to your KharchDaan wallet with 1-click Bank & UPI withdrawal.</p>
                  </div>

                  <div className="matrix-perk-card">
                    <div className="perk-icon-circle purple"><Layers size={20} /></div>
                    <h4>20-Level Royalty Distribution</h4>
                    <p>Generates <strong>+{product.pvPoints} PV</strong> distributed up to 20 levels in the 1:3 automated power matrix.</p>
                  </div>

                  <div className="matrix-perk-card">
                    <div className="perk-icon-circle orange"><Award size={20} /></div>
                    <h4>Leadership Pool Royalty</h4>
                    <p>Contributes directly to monthly company turnover profit sharing for active community leaders.</p>
                  </div>
                </div>

                <div className="pdp-ethical-note">
                  <ShieldCheck size={18} className="text-orange" />
                  <span>100% Compliant with Government of India Direct Selling Consumer Protection Guidelines.</span>
                </div>
              </div>
            )}

            {/* Tab 3: Social Seva Contribution */}
            {activeTab === 'seva' && (
              <div className="pdp-tab-pane">
                <div className="pdp-seva-callout-card">
                  <div className="seva-top-badge">
                    <span>ॐ GEETA SEVASHRAM PRATISHTHAN FOUNDATION</span>
                  </div>
                  <h3>“Tera Tujhko Arpan” (तेरा तुझको अर्पण क्या लागे मेरा)</h3>
                  <p>
                    A portion of the margin from every pack of <strong>{product.name}</strong> is allocated directly towards community food drives, rural women empowerment workshops, and health awareness camps organized by the <strong>Geeta Sevashram Pratishthan Foundation</strong>.
                  </p>
                  <div className="seva-metrics-strip">
                    <div className="seva-metric">
                      <strong>50,000+</strong>
                      <span>Meals Sponsored</span>
                    </div>
                    <div className="seva-metric">
                      <strong>18+ States</strong>
                      <span>Community Reach</span>
                    </div>
                    <div className="seva-metric">
                      <strong>100%</strong>
                      <span>Ethical & Social Seva</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Member Reviews */}
            {activeTab === 'reviews' && (
              <div className="pdp-tab-pane">
                <div className="pdp-reviews-header">
                  <div>
                    <h3 className="tab-pane-heading">Customer Reviews & Ratings</h3>
                    <div className="reviews-score-block">
                      <span className="big-rating">{product.rating}</span>
                      <div className="stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                        ))}
                      </div>
                      <span className="reviews-total">Based on {product.reviews} verified purchases</span>
                    </div>
                  </div>
                </div>

                <div className="pdp-reviews-list">
                  <div className="review-item-card">
                    <div className="review-top-row">
                      <strong>Sunita Sharma (Homemaker, Jaipur)</strong>
                      <div className="review-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                        ))}
                      </div>
                    </div>
                    <p>“100% original product and got ₹25 cashback credited to my wallet instantly! The flour is super soft and fresh. Highly recommended.”</p>
                  </div>

                  <div className="review-item-card">
                    <div className="review-top-row">
                      <strong>Rajesh Patel (Ahmedabad)</strong>
                      <div className="review-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                        ))}
                      </div>
                    </div>
                    <p>“Fast delivery within 24 hours. The 20-level matrix points were also credited immediately to my network tree dashboard.”</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. Related Everyday Essentials */}
        <section className="pdp-related-products-section">
          <div className="related-section-header">
            <h2 className="related-title">You May Also Need Daily</h2>
            <button className="btn-view-all-related" onClick={onNavigateProducts}>
              <span>View Full Catalog</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="related-products-grid">
            {relatedProducts.map((relProd) => (
              <div 
                key={relProd.id} 
                className="related-product-card"
                onClick={() => onProductClick && onProductClick(relProd)}
                role="button"
                tabIndex={0}
              >
                <div className="related-img-box">
                  <img src={relProd.image} alt={relProd.name} />
                  <div className="related-quick-hover">
                    <Eye size={12} />
                    <span>View</span>
                  </div>
                </div>
                <div className="related-info-box">
                  <span className="related-brand">{relProd.brand}</span>
                  <h4 className="related-name">{relProd.name}</h4>
                  <div className="related-price-row">
                    <span className="rel-price">₹{relProd.price}</span>
                    <span className="rel-mrp">₹{relProd.mrp}</span>
                    <span className="rel-discount">{relProd.discount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
