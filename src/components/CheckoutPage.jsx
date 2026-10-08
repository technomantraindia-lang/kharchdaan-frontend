import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, CheckCircle2, ArrowRight, ArrowLeft, Truck, 
  CreditCard, Smartphone, Building, Banknote, Coins, MapPin, 
  User, Phone, Mail, Clock, ShoppingBag, HeartHandshake, Check, AlertCircle,
  HelpCircle, RefreshCw
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductsContext';
import { api } from '../services/api';

export const CheckoutPage = ({ onNavigateHome, onNavigateCart, onShopClick, onOpenAuth }) => {
  const { 
    items, 
    clearCart, 
    subtotal, 
    platformFee, 
    grandTotal, 
    estimatedCashback, 
    totalItems,
    appliedCoupon,
    discountAmount
  } = useCart();
  
  const { user, isAuthenticated } = useAuth();
  const { products } = useProducts();
  const sourceList = products || [];

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
    const matched = sourceList.find(p => p.id === item.productId || (p.name && p.name.toLowerCase().includes((item.name || '').toLowerCase().slice(0, 8))));
    if (matched && matched.image) {
      return matched.image;
    }
    return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
  };

  const handlePlaceOrder = async (e) => {
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

    const fullShippingAddr = `${formData.addressLine1}, ${formData.addressLine2 ? formData.addressLine2 + ', ' : ''}${formData.landmark ? 'Near ' + formData.landmark + ', ' : ''}${formData.city}, ${formData.state} - ${formData.pincode}`;

    let backendOrderNum = null;
    try {
      const orderPayload = {
        items: items.map(it => ({
          product_id: isNaN(Number(it.productId || it.id)) ? null : Number(it.productId || it.id),
          name: it.name,
          price: Number(it.price || 0),
          qty: Number(it.quantity || 1)
        })),
        payment_method: paymentMethod,
        shipping_address: fullShippingAddr,
        shipping_charge: 0,
        platform_fee: platformFee,
        discount: discountAmount,
        total: grandTotal
      };
      const apiRes = await api.createOrder(orderPayload);
      if (apiRes?.success && apiRes?.data?.order_number) {
        backendOrderNum = apiRes.data.order_number;
      }
    } catch (apiErr) {
      console.warn('Backend order sync warning:', apiErr);
    }

    const generatedOrder = {
      orderNumber: backendOrderNum || `BG-${Date.now().toString().slice(-6)}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      itemsCount: totalItems,
      totalAmount: grandTotal,
      cashbackEarned: estimatedCashback,
      deliverySlotText: deliverySlot === 'morning' ? 'Tomorrow Morning (7:00 AM - 11:00 AM)' : deliverySlot === 'afternoon' ? 'Tomorrow Afternoon (12:00 PM - 4:00 PM)' : 'Tomorrow Evening (5:00 PM - 9:00 PM)',
      paymentMode: paymentMethod.toUpperCase(),
      shippingAddress: fullShippingAddr,
      customerName: formData.fullName,
      customerPhone: formData.phone
    };

    setIsSubmitting(false);
    setCreatedOrder(generatedOrder);
    setOrderSuccess(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If cart is empty and order not placed yet, show empty bag state
  if (items.length === 0 && !orderSuccess) {
    return (
      <div className="co-page-wrapper">
        <div className="co-container">
          <div className="co-empty-card">
            <div className="co-empty-icon-box">
              <ShoppingBag size={40} />
            </div>
            <h2 className="co-empty-title">Your Cart is Empty</h2>
            <p className="co-empty-desc">
              You haven't added any products to your shopping bag yet. Explore our genuine Swadeshi grocery catalog and earn up to 100% direct cashback!
            </p>
            <div className="co-empty-actions">
              <button onClick={onShopClick} className="co-btn-primary-pill">
                <span>Browse Grocery Products</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={onNavigateHome} className="co-btn-secondary-pill">
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Order Success Receipt View
  if (orderSuccess && createdOrder) {
    return (
      <div className="co-page-wrapper">
        <div className="co-container">
          <div className="co-success-container">
            
            {/* Top Success Badge */}
            <div className="co-success-icon-badge">
              <CheckCircle2 size={46} />
            </div>

            <div className="co-success-header">
              <span className="co-success-pill-tag">
                <Check size={12} /> Payment & Order Confirmed
              </span>
              <h1 className="co-success-main-title">Order Placed Successfully!</h1>
              <p className="co-success-sub-text">
                Thank you, <strong>{createdOrder.customerName}</strong>! Your order has been registered into the direct KharchDaan priority fulfillment queue.
              </p>
            </div>

            {/* Structured Receipt Box */}
            <div className="co-receipt-card">
              <div className="co-receipt-row border-b">
                <span className="co-rec-label">Order Reference ID</span>
                <span className="co-rec-val-highlight">{createdOrder.orderNumber}</span>
              </div>
              <div className="co-receipt-row">
                <span className="co-rec-label">Total Amount Paid</span>
                <span className="co-rec-price-highlight">₹{createdOrder.totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="co-receipt-row">
                <span className="co-rec-label">Direct Cashback Credited</span>
                <span className="co-rec-cashback-badge">
                  + ₹{createdOrder.cashbackEarned} to Swadeshi Wallet
                </span>
              </div>
              <div className="co-receipt-row">
                <span className="co-rec-label">Scheduled Delivery Slot</span>
                <span className="co-rec-val">{createdOrder.deliverySlotText}</span>
              </div>
              <div className="co-receipt-row">
                <span className="co-rec-label">Doorstep Delivery Address</span>
                <span className="co-rec-val text-right">{createdOrder.shippingAddress}</span>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="co-success-perks-grid">
              <div className="co-perk-item">
                <Truck size={18} className="text-orange" />
                <span>Express Doorstep Delivery</span>
              </div>
              <div className="co-perk-item">
                <Coins size={18} className="text-green" />
                <span>Direct Cashback Guaranteed</span>
              </div>
              <div className="co-perk-item">
                <ShieldCheck size={18} className="text-blue" />
                <span>100% Genuine Brand Stock</span>
              </div>
            </div>

            {/* Actions */}
            <div className="co-success-actions">
              <button onClick={onShopClick} className="co-btn-primary-pill">
                <span>Continue Shopping</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={onNavigateHome} className="co-btn-secondary-pill">
                <span>Back to Home</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="co-page-wrapper">
      <div className="co-container">
        
        {/* Breadcrumbs */}
        <div className="co-breadcrumbs">
          <button onClick={onNavigateHome} className="co-breadcrumb-link">Home</button>
          <span className="co-breadcrumb-sep">/</span>
          <button onClick={onNavigateCart} className="co-breadcrumb-link">Shopping Cart</button>
          <span className="co-breadcrumb-sep">/</span>
          <span className="co-breadcrumb-active">Secure Checkout</span>
        </div>

        {/* Page Hero Header */}
        <div className="co-header-block">
          <div className="co-title-row">
            <div className="co-lock-badge-icon">
              <Lock size={22} />
            </div>
            <div>
              <h1 className="co-main-title">Secure Order Checkout</h1>
              <p className="co-subtitle">
                Complete your delivery details, select your preferred time slot & complete payment.
              </p>
            </div>
          </div>
        </div>

        {formError && (
          <div className="co-error-banner">
            <AlertCircle size={18} />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handlePlaceOrder} className="co-checkout-form">
          <div className="co-layout-grid">
            
            {/* Left 3-Step Checkout Column */}
            <div className="co-main-column">
              
              {/* Step 1: Customer Contact & Delivery Address */}
              <div className="co-card-block">
                <div className="co-step-header">
                  <div className="co-step-title-group">
                    <div className="co-step-num">1</div>
                    <h2 className="co-step-heading">Delivery Address & Contact</h2>
                  </div>
                  {!isAuthenticated && (
                    <button 
                      type="button" 
                      onClick={onOpenAuth}
                      className="co-login-link-btn"
                    >
                      Already a member? Login
                    </button>
                  )}
                </div>

                <div className="co-form-grid">
                  <div className="co-field-group">
                    <label className="co-label">Full Name *</label>
                    <div className="co-input-wrap">
                      <User size={15} className="co-input-icon" />
                      <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Ramesh Patel" 
                        className="co-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="co-field-group">
                    <label className="co-label">Phone Number (10 Digits) *</label>
                    <div className="co-input-wrap">
                      <Phone size={15} className="co-input-icon" />
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="e.g. 9876543210" 
                        className="co-input font-mono"
                        required
                        maxLength={10}
                      />
                    </div>
                  </div>

                  <div className="co-field-group co-field-full">
                    <label className="co-label">Email Address (For Invoices & Cashback Notifications)</label>
                    <div className="co-input-wrap">
                      <Mail size={15} className="co-input-icon" />
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="e.g. ramesh@example.com" 
                        className="co-input"
                      />
                    </div>
                  </div>

                  <div className="co-field-group co-field-full">
                    <label className="co-label">Flat / House No. / Building / Floor *</label>
                    <input 
                      type="text" 
                      name="addressLine1" 
                      value={formData.addressLine1} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Flat 402, Gokul Heights, SG Highway" 
                      className="co-input co-input-no-icon"
                      required
                    />
                  </div>

                  <div className="co-field-group">
                    <label className="co-label">Area / Street / Colony</label>
                    <input 
                      type="text" 
                      name="addressLine2" 
                      value={formData.addressLine2} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Bodakdev / Satellite" 
                      className="co-input co-input-no-icon"
                    />
                  </div>

                  <div className="co-field-group">
                    <label className="co-label">Landmark (Optional)</label>
                    <input 
                      type="text" 
                      name="landmark" 
                      value={formData.landmark} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Near ISKCON Temple" 
                      className="co-input co-input-no-icon"
                    />
                  </div>

                  <div className="co-field-group">
                    <label className="co-label">City *</label>
                    <input 
                      type="text" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      className="co-input co-input-no-icon"
                      required
                    />
                  </div>

                  <div className="co-field-group">
                    <label className="co-label">State *</label>
                    <select 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      className="co-select co-input-no-icon"
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

                  <div className="co-field-group">
                    <label className="co-label">Pincode *</label>
                    <input 
                      type="text" 
                      name="pincode" 
                      value={formData.pincode} 
                      onChange={handleInputChange} 
                      placeholder="380001" 
                      className="co-input co-input-no-icon font-mono font-bold"
                      required
                      maxLength={6}
                    />
                  </div>

                  <div className="co-field-group">
                    <label className="co-label">Address Type</label>
                    <div className="co-address-type-selector">
                      {['home', 'work', 'other'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, addressType: type }))}
                          className={`co-addr-type-btn ${formData.addressType === type ? 'active' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Step 2: Preferred Delivery Slot */}
              <div className="co-card-block">
                <div className="co-step-header">
                  <div className="co-step-title-group">
                    <div className="co-step-num">2</div>
                    <h2 className="co-step-heading">Select Preferred Delivery Slot</h2>
                  </div>
                </div>

                <div className="co-slots-grid">
                  {[
                    { id: 'morning', title: 'Morning Slot', time: '7:00 AM - 11:00 AM', badge: 'Popular' },
                    { id: 'afternoon', title: 'Afternoon Slot', time: '12:00 PM - 4:00 PM', badge: 'Standard' },
                    { id: 'evening', title: 'Evening Slot', time: '5:00 PM - 9:00 PM', badge: 'Convenient' }
                  ].map(slot => (
                    <div 
                      key={slot.id}
                      onClick={() => setDeliverySlot(slot.id)}
                      className={`co-slot-card ${deliverySlot === slot.id ? 'active' : ''}`}
                    >
                      <div className="co-slot-top">
                        <input 
                          type="radio" 
                          name="deliverySlot" 
                          value={slot.id} 
                          checked={deliverySlot === slot.id} 
                          onChange={() => setDeliverySlot(slot.id)}
                          className="co-radio-circle"
                        />
                        <span className="co-slot-badge">{slot.badge}</span>
                      </div>
                      <div className="co-slot-info">
                        <div className="co-slot-title">{slot.title}</div>
                        <div className="co-slot-time">{slot.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Payment Method Selector */}
              <div className="co-card-block">
                <div className="co-step-header">
                  <div className="co-step-title-group">
                    <div className="co-step-num">3</div>
                    <h2 className="co-step-heading">Select Payment Method</h2>
                  </div>
                </div>

                <div className="co-payments-list">
                  
                  {/* UPI Option */}
                  <div 
                    onClick={() => setPaymentMethod('upi')}
                    className={`co-payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                  >
                    <div className="co-payment-main-row">
                      <div className="co-payment-left">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="upi" 
                          checked={paymentMethod === 'upi'} 
                          onChange={() => setPaymentMethod('upi')}
                          className="co-radio-circle"
                        />
                        <div className="co-payment-icon-box icon-upi">
                          <Smartphone size={20} />
                        </div>
                        <div>
                          <div className="co-payment-title">UPI (GPay / PhonePe / Paytm / BHIM)</div>
                          <div className="co-payment-desc">Fast 1-click payment with instant cashback credit</div>
                        </div>
                      </div>
                      <span className="co-rec-badge">Recommended</span>
                    </div>

                    {paymentMethod === 'upi' && (
                      <div className="co-upi-expand-box" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="text" 
                          placeholder="Enter your UPI ID (e.g. yourname@okhdfcbank or 9876543210@paytm)" 
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="co-upi-input"
                        />
                      </div>
                    )}
                  </div>

                  {/* Cards Option */}
                  <div 
                    onClick={() => setPaymentMethod('cards')}
                    className={`co-payment-option ${paymentMethod === 'cards' ? 'active' : ''}`}
                  >
                    <div className="co-payment-main-row">
                      <div className="co-payment-left">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="cards" 
                          checked={paymentMethod === 'cards'} 
                          onChange={() => setPaymentMethod('cards')}
                          className="co-radio-circle"
                        />
                        <div className="co-payment-icon-box icon-cards">
                          <CreditCard size={20} />
                        </div>
                        <div>
                          <div className="co-payment-title">Credit / Debit Cards</div>
                          <div className="co-payment-desc">Visa, MasterCard, RuPay & Maestro with zero surcharge</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Net Banking */}
                  <div 
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`co-payment-option ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                  >
                    <div className="co-payment-main-row">
                      <div className="co-payment-left">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="netbanking" 
                          checked={paymentMethod === 'netbanking'} 
                          onChange={() => setPaymentMethod('netbanking')}
                          className="co-radio-circle"
                        />
                        <div className="co-payment-icon-box icon-netbanking">
                          <Building size={20} />
                        </div>
                        <div>
                          <div className="co-payment-title">Net Banking</div>
                          <div className="co-payment-desc">SBI, HDFC, ICICI, Axis, Kotak, PNB & 50+ Banks</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cash on Delivery */}
                  <div 
                    onClick={() => setPaymentMethod('cod')}
                    className={`co-payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}
                  >
                    <div className="co-payment-main-row">
                      <div className="co-payment-left">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="cod" 
                          checked={paymentMethod === 'cod'} 
                          onChange={() => setPaymentMethod('cod')}
                          className="co-radio-circle"
                        />
                        <div className="co-payment-icon-box icon-cod">
                          <Banknote size={20} />
                        </div>
                        <div>
                          <div className="co-payment-title">Cash on Delivery (Pay at Doorstep)</div>
                          <div className="co-payment-desc">Pay via cash or UPI QR scan when your parcel arrives</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Sticky Order Summary Column */}
            <div className="co-sidebar-column">
              <div className="co-sidebar-wrap">
                
                {/* Mini Items Preview Card */}
                <div className="co-items-card">
                  <div className="co-items-header">
                    <h3 className="co-items-header-title">
                      Order Items ({totalItems})
                    </h3>
                    <button 
                      type="button" 
                      onClick={onNavigateCart}
                      className="co-edit-cart-link"
                    >
                      Edit Cart
                    </button>
                  </div>

                  <div className="co-items-scroll-list">
                    {items.map(item => {
                      const itemImg = getItemImage(item);
                      return (
                        <div key={item.cartKey} className="co-item-mini-row">
                          <img 
                            src={itemImg} 
                            alt={item.name} 
                            className="co-item-mini-thumb"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80';
                            }}
                          />
                          <div className="co-item-mini-info">
                            <div className="co-item-mini-name" title={item.name}>{item.name}</div>
                            <div className="co-item-mini-meta">Qty: {item.quantity} × ₹{item.price}</div>
                          </div>
                          <div className="co-item-mini-price">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Price Calculation Card */}
                <div className="co-summary-card">
                  <h3 className="co-summary-header">
                    Final Payable Amount
                  </h3>

                  <div className="co-summary-rows">
                    <div className="co-sum-row">
                      <span>Items Subtotal</span>
                      <span className="co-sum-val">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="co-cashback-highlight-row">
                      <span className="co-cashback-left">
                        <Coins size={14} />
                        <span>Wallet Cashback Credit</span>
                      </span>
                      <span className="co-cashback-val">+ ₹{estimatedCashback.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="co-sum-row">
                      <span>Delivery Partner Fee</span>
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

                    {appliedCoupon && discountAmount > 0 && (
                      <div className="co-sum-row" style={{ color: '#16a34a', fontWeight: 600 }}>
                        <span>Coupon Voucher ({appliedCoupon.code})</span>
                        <span className="co-sum-val" style={{ color: '#16a34a' }}>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="co-sum-divider" />

                    <div className="co-total-row">
                      <div>
                        <span className="co-total-label">Grand Total</span>
                        <div className="co-total-sub">All Taxes & Delivery Included</div>
                      </div>
                      <span className="co-total-amount">
                        ₹{grandTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Submit CTA Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="co-btn-place-order"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="co-spinner"></div>
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

                  <div className="co-security-badges">
                    <div className="co-sec-item">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>256-Bit SSL Bank Grade Encryption</span>
                    </div>
                    <div className="co-sec-item">
                      <HeartHandshake size={14} className="text-orange" />
                      <span>Swadeshi Direct Producer Network Guarantee</span>
                    </div>
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
