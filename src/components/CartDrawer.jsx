import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, Sparkles, ShieldCheck, ShoppingBag, Coins, CheckCircle2, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ALL_PRODUCTS } from '../data/productsData';

export const CartDrawer = ({ onOpenAuth }) => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, clearCart, subtotal, platformFee, grandTotal, estimatedCashback, totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setIsCartOpen(false);
      onOpenAuth();
      return;
    }

    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 1200);
  };

  // Smart image lookup for fallback
  const getItemImage = (item) => {
    if (item.image && !item.image.includes('default-product.svg')) {
      return item.image;
    }
    const matched = ALL_PRODUCTS.find(p => p.id === item.productId || p.name.toLowerCase().includes((item.name || '').toLowerCase().slice(0, 8)));
    if (matched && matched.image) {
      return matched.image;
    }
    return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
  };

  return (
    <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer-container" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <div className="cart-header-icon-box">
              <ShoppingBag size={20} className="text-orange" />
              {totalItems > 0 && <span className="cart-count-bubble">{totalItems}</span>}
            </div>
            <div>
              <h3>Shopping Cart</h3>
              <span className="cart-items-subtext">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your bag</span>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={() => setIsCartOpen(false)} aria-label="Close Cart">
            <X size={18} />
          </button>
        </div>

        {/* Cashback Summary Callout */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="cart-cashback-notice">
            <div className="cb-sparkle-icon-box">
              <Coins size={16} />
            </div>
            <div className="cb-notice-text">
              <span>You will earn <strong>₹{estimatedCashback} Direct Cashback</strong> on this order!</span>
              <span className="cb-sub-guarantee">✨ Up to 100% Cashback Opportunity ("तेरा तुझको अर्पण")</span>
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="cart-drawer-body">
          {checkoutSuccess ? (
            <div className="checkout-success-state">
              <div className="success-icon-badge">
                <CheckCircle2 size={42} />
              </div>
              <h3>Order Placed Successfully!</h3>
              <p>Your order has been recorded into the BachatGanga priority fulfillment queue. ₹{estimatedCashback} cashback is being credited to your wallet.</p>
              <div className="success-perks-box">
                <span>✓ Free doorstep express delivery</span>
                <span>✓ Direct Swadeshi producer guarantee</span>
                <span>✓ 20-level community compensation points credited</span>
              </div>
              <button className="btn-continue-shopping" onClick={() => { setCheckoutSuccess(false); setIsCartOpen(false); }}>
                Continue Shopping
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-cart-icon-wrap">
                <ShoppingBag size={44} />
              </div>
              <h4>Your Cart is Empty</h4>
              <p>Explore our daily grocery essentials & earn guaranteed instant cashback on every single purchase.</p>
              <button className="btn-explore-catalog" onClick={() => setIsCartOpen(false)}>
                Explore FMCG Essentials
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => {
                const itemImg = getItemImage(item);
                return (
                  <div key={item.cartKey} className="cart-item-row">
                    <div className="cart-item-thumb-box">
                      <img
                        src={itemImg}
                        alt={item.name}
                        className="cart-item-thumb"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
                        }}
                      />
                    </div>
                    <div className="cart-item-details">
                      <h4 className="cart-item-name" title={item.name}>
                        {item.name}
                      </h4>
                      
                      <div className="cart-item-price-row">
                        <span className="item-price">₹{item.price.toLocaleString('en-IN')}</span>
                        {item.quantity > 1 && (
                          <span className="item-total-price">Total: ₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        )}
                      </div>
                      
                      <div className="cart-item-controls">
                        <div className="cart-qty-pill">
                          <button 
                            className="qty-btn"
                            onClick={() => updateQuantity(item.cartKey, -1)} 
                            aria-label="Decrease Quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button 
                            className="qty-btn"
                            onClick={() => updateQuantity(item.cartKey, 1)} 
                            aria-label="Increase Quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          className="btn-remove-item"
                          onClick={() => removeItem(item.cartKey)}
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && !checkoutSuccess && (
          <div className="cart-drawer-footer">
            <div className="cart-breakdown">
              <div className="breakdown-row">
                <span className="row-label">Items Total ({totalItems})</span>
                <span className="row-val">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="breakdown-row text-success">
                <span className="row-label">Estimated Cashback</span>
                <span className="row-val">+ ₹{estimatedCashback.toLocaleString('en-IN')}</span>
              </div>
              <div className="breakdown-row">
                <span className="row-label">Delivery Fee</span>
                <div className="delivery-fee-badge-wrap">
                  <span className="strikethrough-fee">₹40</span>
                  <span className="text-free">FREE</span>
                </div>
              </div>
              <div className="breakdown-row platform-fee-row">
                <div className="platform-fee-label-group">
                  <span className="row-label">Platform & Convenience Fee</span>
                  <span className="platform-fee-pill" title="Nominal fee for 24x7 swadeshi supply chain & priority fulfillment">
                    <Info size={11} />
                    <span>₹{platformFee}</span>
                  </span>
                </div>
                <span className="row-val font-semibold">₹{platformFee.toLocaleString('en-IN')}</span>
              </div>
              <div className="breakdown-divider" />
              <div className="breakdown-row total-row">
                <span className="row-label">Grand Total (To Pay)</span>
                <span className="total-val">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              className="btn-checkout"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              <span>{isCheckingOut ? 'Securing Your Order...' : `Proceed to Pay • ₹${grandTotal.toLocaleString('en-IN')}`}</span>
              <ArrowRight size={17} />
            </button>

            <div className="checkout-security-note">
              <ShieldCheck size={14} className="text-emerald" />
              <span>256-Bit SSL Encrypted & 100% Genuine FMCG Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
