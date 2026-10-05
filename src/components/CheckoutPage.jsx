import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, CheckCircle2, ArrowRight, ArrowLeft, Truck, 
  CreditCard, Smartphone, Building, Banknote, Coins, MapPin, 
  User, Phone, Mail, Clock, ShoppingBag, HeartHandshake, Check, AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ALL_PRODUCTS } from '../data/productsData';

export const CheckoutPage = ({ onNavigateHome, onNavigateCart, onShopClick, onOpenAuth }) => {
  const { 
    items, 
    clearCart, 
    subtotal, 
    platformFee, 
    grandTotal, 
    estimatedCashback, 
    totalItems 
  } = useCart();
  
  const { user, isAuthenticated } = useAuth();

  // Form States
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380001',
    addressType: 'home'
  });

  const [deliverySlot, setDeliverySlot] = useState('morning');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.fullName.trim()) {
      setFormError('Please enter your full delivery name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please provide a valid 10-digit phone number for delivery updates.');
      return;
    }
    if (!formData.addressLine1.trim()) {
      setFormError('Please enter your complete doorstep street / house address.');
      return;
    }
    if (!formData.pincode.trim() || formData.pincode.length < 6) {
      setFormError('Please enter a valid 6-digit delivery pincode.');
      return;
    }

    setIsSubmitting(true);

    const generatedOrder = {
      orderNumber: `BG-${Date.now().toString().slice(-6)}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      itemsCount: totalItems,
      totalAmount: grandTotal,
      cashbackEarned: estimatedCashback,
      deliverySlotText: deliverySlot === 'morning' ? 'Tomorrow Morning (7 AM - 11 AM)' : deliverySlot === 'afternoon' ? 'Tomorrow Afternoon (12 PM - 4 PM)' : 'Tomorrow Evening (5 PM - 9 PM)',
      paymentMode: paymentMethod.toUpperCase(),
      shippingAddress: `${formData.addressLine1}, ${formData.addressLine2 ? formData.addressLine2 + ', ' : ''}${formData.landmark ? 'Near ' + formData.landmark + ', ' : ''}${formData.city}, ${formData.state} - ${formData.pincode}`,
      customerName: formData.fullName,
      customerPhone: formData.phone
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setCreatedOrder(generatedOrder);
      setOrderSuccess(true);
      clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  // If cart is empty and order not placed yet, redirect or show message
  if (items.length === 0 && !orderSuccess) {
    return (
      <div className="cart-page-wrapper">
        <div className="container py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag size={36} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">No Items to Checkout</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
            Your shopping bag is empty. Add your daily grocery and household essentials to proceed.
          </p>
          <button 
            onClick={onShopClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/25 transition"
          >
            <span>Explore FMCG Catalog</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Order Success View
  if (orderSuccess && createdOrder) {
    return (
      <div className="checkout-success-wrapper py-12">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl text-center space-y-8">
            
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={46} />
            </div>

            {/* Header */}
            <div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Check size={12} /> Payment & Order Confirmed
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Order Placed Successfully!
              </h1>
              <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
                Thank you for your order, <strong>{createdOrder.customerName}</strong>! Your order has been registered into the direct Swadeshi fulfillment hub.
              </p>
            </div>

            {/* Order Card Summary */}
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 text-left space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Order Reference ID:</span>
                <span className="font-mono font-black text-slate-900 text-base">{createdOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Total Paid:</span>
                <span className="font-mono font-extrabold text-orange-600 text-base">₹{createdOrder.totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Cashback Earned:</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  + ₹{createdOrder.cashbackEarned} to Swadeshi Wallet
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-slate-500 font-medium">Delivery Slot:</span>
                <span className="font-semibold text-slate-800 text-right">{createdOrder.deliverySlotText}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-slate-500 font-medium">Delivery Address:</span>
                <span className="font-medium text-slate-800 text-right max-w-xs">{createdOrder.shippingAddress}</span>
              </div>
            </div>

            {/* Trust Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 bg-orange-50/60 border border-orange-200/80 rounded-xl flex items-center gap-2.5">
                <Truck size={18} className="text-orange-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-orange-950">Express Doorstep Delivery</span>
              </div>
              <div className="p-3 bg-emerald-50/60 border border-emerald-200/80 rounded-xl flex items-center gap-2.5">
                <Coins size={18} className="text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-emerald-950">Direct Cashback Guaranteed</span>
              </div>
              <div className="p-3 bg-blue-50/60 border border-blue-200/80 rounded-xl flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-blue-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-blue-950">100% Genuine Direct Supply</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button 
                onClick={onShopClick}
                className="px-6 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/25 transition"
              >
                Continue Shopping
              </button>
              <button 
                onClick={onNavigateHome}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-full transition"
              >
                Return to Home
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page-wrapper">
      <div className="container py-8">
        
        {/* Breadcrumbs */}
        <div className="page-breadcrumbs mb-6">
          <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-separator">/</span>
          <button onClick={onNavigateCart} className="breadcrumb-link">Shopping Cart</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Secure Checkout</span>
        </div>

        {/* Page Header */}
        <div className="checkout-page-header mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Lock size={22} />
            </div>
            <span>Secure Order Checkout</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1.5">
            Complete your delivery details, select your preferred time slot & complete payment.
          </p>
        </div>

        {formError && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs font-semibold flex items-center gap-2.5 shadow-xs">
            <AlertCircle size={18} className="text-rose-600 flex-shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Steps (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Step 1: Customer Contact & Delivery Address */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center">
                      1
                    </div>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Delivery Address & Contact
                    </h2>
                  </div>
                  {!isAuthenticated && (
                    <button 
                      type="button" 
                      onClick={onOpenAuth}
                      className="text-xs font-bold text-orange-600 hover:underline"
                    >
                      Already have an account? Login
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-3 text-slate-400" />
                      <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Ramesh Patel" 
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Phone Number (10 Digits) *</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-3 text-slate-400" />
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="e.g. 9876543210" 
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium font-mono"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1.5">Email Address (For Invoices & Cashback Notifications)</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3 text-slate-400" />
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="e.g. ramesh@example.com" 
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1.5">Flat / House No. / Building / Floor *</label>
                    <input 
                      type="text" 
                      name="addressLine1" 
                      value={formData.addressLine1} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Flat 402, Gokul Heights, SG Highway" 
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Area / Street / Colony</label>
                    <input 
                      type="text" 
                      name="addressLine2" 
                      value={formData.addressLine2} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Bodakdev / Satellite" 
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Landmark (Optional)</label>
                    <input 
                      type="text" 
                      name="landmark" 
                      value={formData.landmark} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Near ISKCON Temple" 
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">City *</label>
                    <input 
                      type="text" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">State *</label>
                    <select 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-medium"
                    >
                      <option value="Gujarat">Gujarat</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Other">Other States (All India)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Pincode *</label>
                    <input 
                      type="text" 
                      name="pincode" 
                      value={formData.pincode} 
                      onChange={handleInputChange} 
                      placeholder="380001" 
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-orange-500 font-mono font-bold"
                      required
                      maxLength={6}
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Address Type</label>
                    <div className="flex gap-2">
                      {['home', 'work', 'other'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, addressType: type }))}
                          className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition ${
                            formData.addressType === type 
                              ? 'bg-orange-50 border-orange-500 text-orange-700 font-bold' 
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Step 2: Delivery Slot Selection */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Select Preferred Delivery Slot
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'morning', title: 'Morning Slot', time: '7:00 AM - 11:00 AM', badge: 'Popular' },
                    { id: 'afternoon', title: 'Afternoon Slot', time: '12:00 PM - 4:00 PM', badge: 'Standard' },
                    { id: 'evening', title: 'Evening Slot', time: '5:00 PM - 9:00 PM', badge: 'Convenient' }
                  ].map(slot => (
                    <label 
                      key={slot.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                        deliverySlot === slot.id 
                          ? 'bg-orange-50/70 border-orange-500 shadow-sm' 
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <input 
                          type="radio" 
                          name="deliverySlot" 
                          value={slot.id} 
                          checked={deliverySlot === slot.id} 
                          onChange={(e) => setDeliverySlot(e.target.value)}
                          className="accent-orange-600"
                        />
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                          {slot.badge}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{slot.title}</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">{slot.time}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Payment Method Selection */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center">
                    3
                  </div>
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Select Payment Method
                  </h2>
                </div>

                <div className="space-y-3">
                  
                  {/* UPI Option */}
                  <label className={`p-4 rounded-2xl border-2 cursor-pointer transition block ${paymentMethod === 'upi' ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="upi" 
                          checked={paymentMethod === 'upi'} 
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="accent-orange-600"
                        />
                        <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                          <Smartphone size={18} />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">UPI (GPay / PhonePe / Paytm / BHIM)</div>
                          <div className="text-[11px] text-slate-500">Fast 1-click payment with instant cashback credit</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </div>

                    {paymentMethod === 'upi' && (
                      <div className="mt-3 pt-3 border-t border-orange-200/80">
                        <input 
                          type="text" 
                          placeholder="Enter your UPI ID (e.g. yourname@okhdfcbank or 9876543210@paytm)" 
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono outline-none focus:border-orange-500"
                        />
                      </div>
                    )}
                  </label>

                  {/* Cards Option */}
                  <label className={`p-4 rounded-2xl border-2 cursor-pointer transition block ${paymentMethod === 'cards' ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="cards" 
                        checked={paymentMethod === 'cards'} 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-orange-600"
                      />
                      <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0">
                        <CreditCard size={18} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Credit / Debit Card</div>
                        <div className="text-[11px] text-slate-500">Visa, MasterCard, RuPay & Maestro</div>
                      </div>
                    </div>
                  </label>

                  {/* Net Banking */}
                  <label className={`p-4 rounded-2xl border-2 cursor-pointer transition block ${paymentMethod === 'netbanking' ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="netbanking" 
                        checked={paymentMethod === 'netbanking'} 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-orange-600"
                      />
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                        <Building size={18} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Net Banking</div>
                        <div className="text-[11px] text-slate-500">SBI, HDFC, ICICI, Axis, Kotak, PNB & 50+ Banks</div>
                      </div>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className={`p-4 rounded-2xl border-2 cursor-pointer transition block ${paymentMethod === 'cod' ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="cod" 
                        checked={paymentMethod === 'cod'} 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-orange-600"
                      />
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                        <Banknote size={18} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Cash on Delivery (Pay at Doorstep)</div>
                        <div className="text-[11px] text-slate-500">Pay via cash or UPI scan when your parcel arrives</div>
                      </div>
                    </div>
                  </label>

                </div>
              </div>

            </div>

            {/* Right Column: Order Review & Submit (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              
              {/* Mini Items Preview Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Order Items ({totalItems})
                  </h3>
                  <button 
                    type="button" 
                    onClick={onNavigateCart}
                    className="text-xs font-bold text-orange-600 hover:underline"
                  >
                    Edit Cart
                  </button>
                </div>

                <div className="max-h-56 overflow-y-auto space-y-2.5 pr-1 divide-y divide-slate-100">
                  {items.map(item => (
                    <div key={item.cartKey} className="pt-2.5 first:pt-0 flex items-center gap-3">
                      <img 
                        src={getItemImage(item)} 
                        alt={item.name} 
                        className="w-11 h-11 rounded-lg border border-slate-200 object-contain p-1 bg-slate-50 flex-shrink-0"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
                        }}
                      />
                      <div className="min-w-0 flex-1 text-xs">
                        <div className="font-semibold text-slate-900 truncate" title={item.name}>{item.name}</div>
                        <div className="text-[11px] text-slate-400">Qty: {item.quantity} × ₹{item.price}</div>
                      </div>
                      <div className="font-bold text-slate-900 text-xs font-mono">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                  Final Payable Amount
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-slate-900 font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-emerald-700 font-semibold bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                    <span className="flex items-center gap-1">
                      <Coins size={13} />
                      <span>Wallet Cashback Credit</span>
                    </span>
                    <span className="font-bold font-mono">+ ₹{estimatedCashback.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Delivery Partner Fee</span>
                    <div className="flex items-center gap-1.5">
                      <span className="line-through text-slate-400 font-normal">₹40</span>
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">FREE</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-slate-600 items-center">
                    <div className="flex items-center gap-1.5">
                      <span>Platform & Convenience Fee</span>
                      <span className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded font-semibold">₹{platformFee}</span>
                    </div>
                    <span className="font-bold text-slate-900 font-mono">₹{platformFee.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                    <div>
                      <span className="text-sm font-black text-slate-900">Grand Total</span>
                      <div className="text-[10px] text-slate-400">All Taxes & Delivery Included</div>
                    </div>
                    <span className="text-2xl font-black text-orange-600 font-mono">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Your Order...</span>
                      </>
                    ) : (
                      <>
                        <Lock size={16} />
                        <span>Place Order & Pay ₹{grandTotal.toLocaleString('en-IN')}</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    <span>256-Bit SSL Bank Grade Encryption</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HeartHandshake size={13} className="text-orange-500" />
                    <span>Swadeshi Direct Producer Network Guarantee</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
};
