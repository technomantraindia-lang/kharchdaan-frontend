import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('kharchdaan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('kharchdaan_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1, selectedVariation = null) => {
    setItems((prev) => {
      const itemKey = selectedVariation ? `${product.id}-${selectedVariation.id}` : `${product.id}`;
      const existing = prev.find((item) => item.cartKey === itemKey);
      
      const price = selectedVariation?.price ?? product.display_price ?? product.price ?? 0;
      const title = selectedVariation ? `${product.name} (${selectedVariation.sku || 'Variant'})` : product.name;
      const image = product.image || product.image_url || (product.images && product.images[0]) || '';

      if (existing) {
        return prev.map((item) =>
          item.cartKey === itemKey
            ? { ...item, quantity: item.quantity + quantity, image: image || item.image }
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
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const estimatedCashback = Math.round(subtotal * 0.05); // 5% cashback reward estimate

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
