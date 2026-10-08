import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('kharchdaan_cart');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      // Clean out any legacy mock products (e.g. prod-atta-1, prod-oil-2)
      return parsed.filter(item => {
        const idStr = String(item.productId || item.id || '');
        return !idStr.startsWith('prod-');
      });
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  useEffect(() => {
    localStorage.setItem('kharchdaan_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1, selectedVariation = null) => {
    setItems((prev) => {
      const itemKey = selectedVariation ? `${product.id}-${selectedVariation.id}` : `${product.id}`;
      const existing = prev.find((item) => item.cartKey === itemKey);
      
      const price = Number(selectedVariation ? (selectedVariation.sale_price || selectedVariation.price) : (product.display_price ?? product.price ?? 0));
      const varLabel = selectedVariation ? (selectedVariation.attribute_value || selectedVariation.attr_val || selectedVariation.sku || 'Variant') : null;
      const title = varLabel ? `${product.name} (${varLabel})` : product.name;
      const image = selectedVariation?.image || product.image || product.image_url || (product.images && product.images[0]) || '';
      const cashbackPerItem = Number(product.cashbackAmount ?? Math.max(15, Math.round(price * 0.10)));

      if (existing) {
        return prev.map((item) =>
          item.cartKey === itemKey
            ? { ...item, quantity: item.quantity + quantity, image: image || item.image, cashbackAmount: cashbackPerItem }
            : item
        );
      } else {
        return [
          ...prev,
          {
            cartKey: itemKey,
            productId: product.id,
            variationId: selectedVariation?.id || null,
            name: title,
            price: Number(price),
            image: image,
            quantity: quantity,
            cashbackAmount: cashbackPerItem,
            slug: product.slug || '',
            stock: product.available_stock || 99
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartKey, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartKey === cartKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (cartKey) => {
    setItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
    setCouponError('');
  };

  // Calculations
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const platformFee = items.length > 0 ? 5 : 0; // Nominal platform / convenience fee (₹5)

  const applyCoupon = (codeRaw) => {
    setCouponError('');
    const code = String(codeRaw || '').trim().toUpperCase();
    if (!code) {
      setCouponError('Please enter a coupon code.');
      return { success: false, error: 'Please enter a coupon code.' };
    }

    if (code === 'SWADESHI50' || code === 'BACHATGROW' || code === 'WELCOME10') {
      const discount = code === 'SWADESHI50' ? Math.min(50, Math.round(subtotal * 0.1)) : 25;
      const couponObj = { code, discount: Math.round(discount) };
      setAppliedCoupon(couponObj);
      return { success: true, coupon: couponObj };
    } else {
      const err = 'Invalid coupon code. Try SWADESHI50 or WELCOME10';
      setCouponError(err);
      return { success: false, error: err };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + platformFee);

  // Accurate item-based cashback calculation
  const estimatedCashback = items.reduce((sum, item) => {
    const cb = Number(item.cashbackAmount ?? Math.max(15, Math.round(item.price * 0.10)));
    return sum + (cb * item.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        subtotal,
        platformFee,
        discountAmount,
        appliedCoupon,
        couponError,
        applyCoupon,
        removeCoupon,
        grandTotal,
        estimatedCashback,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
