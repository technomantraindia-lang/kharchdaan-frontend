import React from 'react';
import { ShoppingCart, Eye, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const getProductImageUrl = (product) => {
  const name = (product.name || '').toLowerCase();
  const cat = (product.category?.name || product.category?.slug || '').toLowerCase();
  
  if (name.includes('rice') || cat.includes('rice')) {
    return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('tea') || cat.includes('beverage') || name.includes('chai')) {
    return 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('ghee') || cat.includes('ghee') || name.includes('oil')) {
    return 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('hing') || name.includes('spice') || name.includes('cumin') || name.includes('jeera') || name.includes('masala')) {
    return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('khakhra') || name.includes('snack') || name.includes('farsan')) {
    return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('puja') || name.includes('havan') || name.includes('kashi') || name.includes('spiritual')) {
    return 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('honey') || name.includes('gir')) {
    return 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('khadi') || name.includes('kurta') || name.includes('khes') || name.includes('cloth')) {
    return 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('kadha') || name.includes('immunity') || name.includes('ayurved')) {
    return 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80';
  }
  if (name.includes('watch') || name.includes('gadget') || cat.includes('electronics') || name.includes('tech')) {
    return 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80';
  }
  
  if (product.image_url && !product.image_url.includes('default-product.svg')) {
    return product.image_url;
  }
  
  return 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=600&auto=format&fit=crop&q=80';
};

export const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  const price = Number(product.display_price ?? product.price ?? 0);
  const regularPrice = product.price ? Number(product.price) : price;
  const salePrice = product.sale_price ? Number(product.sale_price) : null;
  const hasDiscount = salePrice && salePrice < regularPrice;
  const discountPercent = hasDiscount ? Math.round(((regularPrice - salePrice) / regularPrice) * 100) : 15;
  
  // Calculate cashback reward estimate (approx 8-15%)
  const cashbackAmount = Math.max(25, Math.round(price * 0.10));
  const pvPoints = Math.max(10, Math.round(price * 0.25));

  const imageUrl = getProductImageUrl(product);
  // Sourced directly on-demand from verified FMCG partner vendors as per order requirement
  const isInStock = true;

  return (
    <div className="product-card">
      <div className="product-badge-group">
        <span className="badge-discount">-{discountPercent}% OFF</span>
        <span className="badge-featured">🌟 100% Pure Desi</span>
      </div>

      <div className="product-img-wrapper" onClick={() => onQuickView(product)}>
        <img
          src={imageUrl}
          alt={product.name}
          className="product-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=600&auto=format&fit=crop&q=80';
          }}
          loading="lazy"
        />
        <div className="product-hover-overlay">
          <button
            className="btn-quick-view"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <Eye size={15} /> Quick View
          </button>
        </div>
      </div>

      <div className="product-details">
        <div className="product-category-row">
          <span className="product-category-tag">
            {product.category?.name || 'Swadeshi Essentials'}
          </span>
          <span className="product-pv-badge">
            {pvPoints} PV Points
          </span>
        </div>

        <h3 className="product-name" title={product.name} onClick={() => onQuickView(product)}>
          {product.name}
        </h3>

        <div className="product-cashback-badge">
          <Sparkles size={13} className="cb-sparkle text-kesari" />
          <span>Earn <strong>₹{cashbackAmount} Cashback</strong></span>
        </div>

        <div className="product-pricing">
          <div className="price-group">
            <span className="price-current">₹{price.toLocaleString('en-IN')}</span>
            {hasDiscount && (
              <span className="price-original">₹{regularPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <div className="stock-indicator">
            <span className="stock-tag in-stock"><CheckCircle size={13} /> In Stock</span>
          </div>
        </div>

        <div className="product-actions">
          <button
            className="btn-add-cart"
            onClick={() => addToCart({ ...product, image_url: imageUrl }, 1)}
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
