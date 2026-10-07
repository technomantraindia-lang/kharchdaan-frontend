import React, { useState } from 'react';
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, 
  Coins, Tag, CheckCircle2, Truck, ArrowLeft, RefreshCw, Sparkles, 
  Info, Lock, MapPin, HeartHandshake, Check, AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductsContext';
import { ALL_PRODUCTS } from '../data/productsData';

export const CartPage = ({ onNavigateHome, onNavigateCheckout, onShopClick, onOpenAuth }) => {
  const { 
    items, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    subtotal, 
    platformFee, 
    grandTotal, 
    estimatedCashback, 
    totalItems 
  } = useCart();
  const { products } = useProducts();
  const sourceList = (products && products.length > 0) ? products : ALL_PRODUCTS;
  
  const { isAuthenticated } = useAuth();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [pincode, setPincode] = useState('380001');
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState('Verified: Express 24-Hour Delivery to Pincode 380001');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'SWADESHI50' || code === 'BACHATGROW' || code === 'WELCOME10') {
      const discount = code === 'SWADESHI50' ? Math.min(50, subtotal * 0.1) : 25;
      setAppliedCoupon({ code, discount: Math.round(discount) });
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon code. Try SWADESHI50 or WELCOME10');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) return;
    setIsCheckingPincode(true);
    setTimeout(() => {
      setIsCheckingPincode(false);
      setPincodeStatus(`Verified: Free Doorstep Delivery to Pincode ${pincode}`);
    }, 400);
  };

  const getItemImage = (item) => {
    if (item.image && !item.image.includes('default-product.svg')) {
      return item.image;
    }
    const matched = sourceList.find(p => p.id === item.productId || (p.name && p.name.toLowerCase().includes((item.name || '').toLowerCase().slice(0, 8))));
    if (matched && matched.image) {
      return matched.image;
    }
    return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
  };

  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const finalPayable = Math.max(0, grandTotal - discountAmount);

  return (
    <div className="co-page-wrapper">
      <div className="co-container">
        
        {/* Breadcrumbs */}
        <div className="co-breadcrumbs">
          <button onClick={onNavigateHome} className="co-breadcrumb-link">Home</button>
          <span className="co-breadcrumb-sep">/</span>
          <button onClick={onShopClick} className="co-breadcrumb-link">Products</button>
          <span className="co-breadcrumb-sep">/</span>
          <span className="co-breadcrumb-active">Shopping Cart</span>
        </div>

        {/* Page Header */}
        <div className="cp-header-row">
          <div className="cp-title-group">
            <div className="cp-icon-box">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h1 className="co-main-title">Your Shopping Cart</h1>
              <p className="co-subtitle">
                Review your essentials, apply community discount vouchers, and enjoy direct doorstep delivery.
              </p>
            </div>
          </div>
          {items.length > 0 && (
            <button onClick={clearCart} className="cp-btn-clear-all" title="Clear all items">
              <Trash2 size={14} />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="co-empty-card">
            <div className="co-empty-icon-box">
              <ShoppingBag size={44} />
            </div>
            <h2 className="co-empty-title">Your Cart is Currently Empty</h2>
            <p className="co-empty-desc">
              Explore our direct-from-producer grocery staples, desi spices, dairy fats & personal care essentials with up to 100% cashback rewards!
            </p>
            <div className="co-empty-actions">
              <button onClick={onShopClick} className="co-btn-primary-pill">
                <span>Browse Products & Services</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={onNavigateHome} className="co-btn-secondary-pill">
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Cart Grid (8 Cols Items + 4 Cols Order Summary) */
          <div className="co-layout-grid">
            
            {/* Left Column: Items List & Delivery (8 Cols) */}
            <div className="co-main-column">
              
              {/* Cashback Highlight Banner */}
              <div className="cp-cashback-banner">
                <div className="cp-cb-icon-wrap">
                  <Coins size={22} />
                </div>
                <div className="cp-cb-text-wrap">
                  <div className="cp-cb-headline">
                    <span>You are earning estimated <strong>₹{estimatedCashback} Direct Cashback</strong> on this order!</span>
                    <span className="cp-cb-pill">"तेरा तुझको अर्पण"</span>
                  </div>
                  <p className="cp-cb-sub">
                    100% Guaranteed Swadeshi Member Rewards credited directly to your wallet upon order delivery.
                  </p>
                </div>
              </div>

              {/* Items Table Card */}
              <div className="co-card-block no-padding">
                <div className="cp-items-table-header">
                  <span className="cp-table-col-title">Cart Items ({totalItems})</span>
                  <span className="cp-table-col-meta">Price & Quantities</span>
                </div>

                <div className="cp-items-list-body">
                  {items.map((item) => {
                    const itemImg = getItemImage(item);
                    return (
                      <div key={item.cartKey} className="cp-item-row">
                        
                        {/* Item Details Left */}
                        <div className="cp-item-main-details">
                          <div className="cp-item-thumb-box">
                            <img 
                              src={itemImg} 
                              alt={item.name} 
                              className="cp-item-thumb-img"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
                              }}
                            />
                          </div>

                          <div className="cp-item-info-col">
                            <h3 className="cp-item-name" title={item.name}>
                              {item.name}
                            </h3>
                            <div className="cp-item-price-tag">
                              <span className="cp-item-unit-price">₹{item.price.toLocaleString('en-IN')}</span>
                              <span className="cp-item-unit-label">per unit</span>
                            </div>
                            <div className="cp-item-stock-badge">
                              <CheckCircle2 size={12} />
                              <span>In Stock • Ready for Doorstep Dispatch</span>
                            </div>
                          </div>
                        </div>

                        {/* Controls & Price Right */}
                        <div className="cp-item-controls-col">
                          
                          {/* Quantity Pill */}
                          <div className="cp-qty-pill">
                            <button 
                              onClick={() => updateQuantity(item.cartKey, -1)}
                              className="cp-qty-btn"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="cp-qty-number">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.cartKey, 1)}
                              className="cp-qty-btn"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="cp-line-total-box">
                            <div className="cp-line-total-val">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </div>
                            <span className="cp-line-total-sub">item total</span>
                          </div>

                          {/* Delete Item */}
                          <button 
                            onClick={() => removeItem(item.cartKey)}
                            className="cp-btn-delete-item"
                            title="Remove item"
                            aria-label="Remove item"
                          >
                            <Trash2 size={15} />
                          </button>

                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Table Footer */}
                <div className="cp-table-footer-bar">
                  <button onClick={onShopClick} className="cp-btn-continue-shopping">
                    <ArrowLeft size={15} />
                    <span>Continue Shopping FMCG Catalog</span>
                  </button>
                  <div className="cp-table-footer-meta">
                    <span>{totalItems} items selected</span>
                  </div>
                </div>

              </div>

              {/* Delivery Pincode Verification Card */}
              <div className="co-card-block">
                <div className="cp-pincode-card-header">
                  <div className="cp-pincode-icon-wrap">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="co-step-heading">Check Doorstep Express Delivery</h3>
                    <p className="cp-pincode-sub">Verify delivery timelines for your exact residential pincode.</p>
                  </div>
                </div>

                <form onSubmit={handlePincodeCheck} className="cp-pincode-form">
                  <input 
                    type="text" 
                    value={pincode} 
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="Enter 6-digit Pincode"
                    className="cp-pincode-input"
                    maxLength={6}
                  />
                  <button type="submit" disabled={isCheckingPincode} className="cp-btn-check-pincode">
                    {isCheckingPincode ? 'Checking...' : 'Check Availability'}
                  </button>
                </form>

                {pincodeStatus && (
                  <div className="cp-pincode-status-badge">
                    <CheckCircle2 size={14} className="text-green" />
                    <span>{pincodeStatus}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Order Summary (4 Cols) */}
            <div className="co-sidebar-column">
              <div className="co-sidebar-wrap">
                
                {/* Coupon Box Card */}
                <div className="co-card-block">
                  <div className="cp-coupon-header">
                    <Tag size={16} className="text-orange" />
                    <span className="cp-coupon-title">Apply Community Coupon</span>
                  </div>

                  {appliedCoupon ? (
                    <div className="cp-coupon-applied-box">
                      <div>
                        <span className="cp-coupon-applied-code">{appliedCoupon.code}</span>
                        <div className="cp-coupon-applied-msg">₹{appliedCoupon.discount} Discount Applied!</div>
                      </div>
                      <button onClick={handleRemoveCoupon} className="cp-coupon-remove-btn">
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="cp-coupon-form">
                      <input 
                        type="text" 
                        value={couponCode} 
                        onChange={(e) => setCouponCode(e.target.value)} 
                        placeholder="e.g. SWADESHI50" 
                        className="cp-coupon-input"
                      />
                      <button type="submit" className="cp-coupon-submit-btn">
                        Apply
                      </button>
                    </form>
                  )}

                  {couponError && (
                    <div className="cp-coupon-error-msg">
                      <AlertCircle size={13} />
                      <span>{couponError}</span>
                    </div>
                  )}

                  <div className="cp-coupon-hint-pills">
                    <span onClick={() => setCouponCode('SWADESHI50')} className="cp-hint-pill">
                      Use code <strong>SWADESHI50</strong> for extra savings
                    </span>
                  </div>
                </div>

                {/* Price Breakdown Card */}
                <div className="co-summary-card">
                  <h3 className="co-summary-header">
                    Order Price Breakdown
                  </h3>

                  <div className="co-summary-rows">
                    <div className="co-sum-row">
                      <span>Cart Subtotal ({totalItems} items)</span>
                      <span className="co-sum-val">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="co-cashback-highlight-row">
                      <span className="co-cashback-left">
                        <Coins size={14} />
                        <span>Estimated Cashback</span>
                      </span>
                      <span className="co-cashback-val">+ ₹{estimatedCashback.toLocaleString('en-IN')}</span>
                    </div>

                    {appliedCoupon && (
                      <div className="co-sum-row cp-coupon-discount-row">
                        <span>Coupon Voucher ({appliedCoupon.code})</span>
                        <span className="cp-discount-val">- ₹{appliedCoupon.discount}</span>
                      </div>
                    )}

                    <div className="co-sum-row">
                      <span>Doorstep Delivery Fee</span>
                      <div className="co-delivery-badge-group">
                        <span className="co-strikethrough-fee">₹40</span>
                        <span className="co-free-pill">FREE</span>
                      </div>
                    </div>

                    <div className="co-sum-row">
                      <div className="co-platform-label-group">
                        <span>Platform & Convenience Fee</span>
                        <span className="co-platform-pill">₹{platformFee}</span>
                      </div>
                      <span className="co-sum-val">₹{platformFee.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="co-sum-divider" />

                    <div className="co-total-row">
                      <div>
                        <span className="co-total-label">Grand Total</span>
                        <div className="co-total-sub">All Taxes Included</div>
                      </div>
                      <span className="co-total-amount">
                        ₹{finalPayable.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Proceed to Checkout CTA */}
                  <button 
                    onClick={onNavigateCheckout} 
                    className="co-btn-place-order"
                  >
                    <span>Proceed to Checkout • ₹{finalPayable.toLocaleString('en-IN')}</span>
                    <ArrowRight size={17} />
                  </button>

                  <div className="co-security-badges">
                    <div className="co-sec-item">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>256-Bit SSL Encrypted Checkout</span>
                    </div>
                    <div className="co-sec-item">
                      <HeartHandshake size={14} className="text-orange" />
                      <span>100% Genuine Swadeshi Sourcing Guarantee</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
