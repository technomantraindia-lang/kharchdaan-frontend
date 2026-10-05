import React, { useState } from 'react';
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, 
  Coins, Tag, CheckCircle2, Truck, ArrowLeft, RefreshCw, Sparkles, 
  Info, Lock, MapPin, HeartHandshake, Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
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
  
  const { isAuthenticated } = useAuth();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [pincode, setPincode] = useState('380001');
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState('Express 24-Hour Delivery Available');

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

  // Smart image fallback
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

  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const finalPayable = Math.max(0, grandTotal - discountAmount);

  return (
    <div className="cart-page-wrapper">
      <div className="container py-8">
        
        {/* Breadcrumbs */}
        <div className="page-breadcrumbs mb-6">
          <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-separator">/</span>
          <button onClick={onShopClick} className="breadcrumb-link">Products</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Shopping Cart</span>
        </div>

        {/* Page Header */}
        <div className="cart-page-header mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShoppingBag size={24} />
                </div>
                <span>Your Shopping Cart</span>
              </h1>
              <p className="text-slate-500 text-sm mt-1.5">
                Review your essentials, apply community discount vouchers, and enjoy direct doorstep delivery.
              </p>
            </div>
            {items.length > 0 && (
              <div className="flex items-center gap-3">
                <button 
                  onClick={clearCart}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition"
                >
                  <Trash2 size={14} />
                  <span>Clear All Items</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="cart-page-empty bg-white rounded-3xl border border-slate-200/80 p-12 text-center shadow-xs max-w-2xl mx-auto my-8">
            <div className="w-24 h-24 rounded-full bg-orange-50 border-2 border-dashed border-orange-200 text-orange-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Your Cart is Currently Empty</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Explore our direct-from-producer grocery staples, desi spices, dairy fats & personal care essentials with up to 100% cashback rewards!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={onShopClick} 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/25 transition-all"
              >
                <span>Browse Products & Services</span>
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={onNavigateHome} 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-full transition"
              >
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Cart Grid (8 Cols Items + 4 Cols Order Summary) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Items Table & Delivery (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Cashback Highlight Banner */}
              <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-1.5 border-orange-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-600/30">
                  <Coins size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-xs sm:text-sm font-bold text-orange-950 flex flex-wrap items-center gap-2">
                    <span>You are earning estimated <strong>₹{estimatedCashback} Direct Cashback</strong> on this order!</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-200/70 text-amber-900 border border-amber-300">
                      "तेरा तुझको अर्पण"
                    </span>
                  </div>
                  <p className="text-xs text-orange-800/80 mt-0.5 font-medium">
                    100% Guaranteed Swadeshi Member Rewards credited upon order delivery.
                  </p>
                </div>
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Cart Items ({totalItems})
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Price & Quantities
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {items.map((item) => {
                    const itemImg = getItemImage(item);
                    return (
                      <div key={item.cartKey} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/40 transition">
                        
                        {/* Item Details Left */}
                        <div className="flex items-center gap-4 min-w-0 flex-1">
                          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img 
                              src={itemImg} 
                              alt={item.name} 
                              className="max-h-full max-w-full object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
                              }}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug truncate" title={item.name}>
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-bold text-orange-600 font-mono">₹{item.price.toLocaleString('en-IN')}</span>
                              <span className="text-[11px] text-slate-400">per unit</span>
                            </div>
                            <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                              <CheckCircle2 size={12} />
                              <span>In Stock • Ready for Doorstep Dispatch</span>
                            </div>
                          </div>
                        </div>

                        {/* Controls & Price Right */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                          
                          {/* Quantity Pill */}
                          <div className="inline-flex items-center bg-slate-50 border border-slate-200 rounded-full p-1 gap-2">
                            <button 
                              onClick={() => updateQuantity(item.cartKey, -1)}
                              className="w-7 h-7 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600 flex items-center justify-center transition"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-bold text-slate-900 text-sm px-1 min-w-[20px] text-center font-mono">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.cartKey, 1)}
                              className="w-7 h-7 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600 flex items-center justify-center transition"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right min-w-[80px]">
                            <div className="font-black text-slate-900 text-base font-mono">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </div>
                            <span className="text-[10px] text-slate-400">item total</span>
                          </div>

                          {/* Delete Item */}
                          <button 
                            onClick={() => removeItem(item.cartKey)}
                            className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 flex items-center justify-center transition"
                            title="Remove from cart"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Bottom Actions inside List */}
                <div className="p-4 sm:p-5 bg-slate-50/60 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button 
                    onClick={onShopClick} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    <ArrowLeft size={14} />
                    <span>Continue Shopping FMCG Essentials</span>
                  </button>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>100% Genuine Direct Supply Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Delivery Pincode & Delivery Slot Strip */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Doorstep Delivery Check
                    </h4>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      {pincodeStatus}
                    </p>
                  </div>
                </div>

                <form onSubmit={handlePincodeCheck} className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-36">
                    <MapPin size={13} className="absolute left-2.5 top-2.5 text-slate-400" />
                    <input 
                      type="text" 
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                      placeholder="Pincode"
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-800 outline-none focus:bg-white focus:border-orange-500"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition"
                    disabled={isCheckingPincode}
                  >
                    {isCheckingPincode ? 'Checking...' : 'Check'}
                  </button>
                </form>
              </div>

            </div>

            {/* Right Column: Order Summary & Checkout (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              
              {/* Promo Coupon Box */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={16} className="text-orange-600" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Coupons & Vouchers
                  </h3>
                </div>

                {appliedCoupon ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                        <Check size={14} className="text-emerald-600" />
                        <span>Coupon '{appliedCoupon.code}' Applied!</span>
                      </div>
                      <div className="text-[11px] text-emerald-600 mt-0.5">
                        You saved ₹{appliedCoupon.discount} on this order
                      </div>
                    </div>
                    <button 
                      onClick={handleRemoveCoupon}
                      className="text-xs font-bold text-rose-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="space-y-2">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        placeholder="e.g. SWADESHI50"
                        className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 uppercase outline-none focus:bg-white focus:border-orange-500"
                      />
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-[11px] text-rose-600 font-semibold">{couponError}</p>
                    )}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                      <span>Try code:</span>
                      <button type="button" onClick={() => setCouponCode('SWADESHI50')} className="font-mono font-bold text-orange-600 hover:underline">SWADESHI50</button>
                    </div>
                  </form>
                )}
              </div>

              {/* Order Breakdown Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                  Bill Summary
                </h3>

                <div className="space-y-2.5 text-xs">
                  {/* Items Subtotal */}
                  <div className="flex justify-between text-slate-600">
                    <span>Items Total ({totalItems})</span>
                    <span className="font-bold text-slate-900 font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Estimated Cashback */}
                  <div className="flex justify-between text-emerald-700 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                    <span className="flex items-center gap-1">
                      <Coins size={13} />
                      <span>Estimated Cashback</span>
                    </span>
                    <span className="font-bold font-mono">+ ₹{estimatedCashback.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Delivery Fee */}
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery Partner Fee</span>
                    <div className="flex items-center gap-1.5">
                      <span className="line-through text-slate-400 font-normal">₹40</span>
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">FREE</span>
                    </div>
                  </div>

                  {/* Platform & Convenience Fee */}
                  <div className="flex justify-between text-slate-600 items-center">
                    <div className="flex items-center gap-1.5">
                      <span>Platform & Convenience Fee</span>
                      <span className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded font-semibold" title="Nominal fee for 24x7 direct swadeshi supply chain & priority fulfillment">
                        ₹{platformFee}
                      </span>
                    </div>
                    <span className="font-bold text-slate-900 font-mono">₹{platformFee.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Coupon Discount if applied */}
                  {appliedCoupon && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Voucher Discount</span>
                      <span className="font-mono">- ₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                    <div>
                      <span className="text-sm font-black text-slate-900">Grand Total (To Pay)</span>
                      <div className="text-[10px] text-slate-400">Inclusive of all taxes & delivery</div>
                    </div>
                    <span className="text-2xl font-black text-orange-600 font-mono">
                      ₹{finalPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <div className="pt-2">
                  <button 
                    onClick={onNavigateCheckout}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <Lock size={16} />
                    <span>Proceed to Checkout • ₹{finalPayable.toLocaleString('en-IN')}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    <span>256-Bit SSL Encrypted Safe Checkout</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HeartHandshake size={13} className="text-orange-500" />
                    <span>Swadeshi Direct Producer Network Guarantee</span>
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
