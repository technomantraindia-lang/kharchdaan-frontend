import React, { useState } from 'react';
import { X, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw, Sparkles, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(null);

  if (!product) return null;

  const images = product.images?.length > 0 ? product.images : [product.image_url || '/images/default-product.svg'];
  const price = Number(selectedVariation?.price ?? product.display_price ?? product.price ?? 0);
  const cashbackAmount = Math.max(10, Math.round(price * 0.08));
  // Sourced directly on-demand from verified FMCG vendors as per requirement
  const isInStock = true;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariation);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          {/* Product Gallery */}
          <div className="product-gallery">
            <div className="gallery-main-image">
              <img
                src={images[selectedImage]}
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80';
                }}
              />
            </div>
            {images.length > 1 && (
              <div className="gallery-thumbs">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-modal-info">
            {product.category?.name && (
              <span className="product-category-tag">{product.category.name}</span>
            )}
            <h2 className="modal-product-title">{product.name}</h2>

            <div className="modal-rating-row">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
              <span className="rating-text">(4.9 • 120+ verified member reviews)</span>
            </div>

            <div className="modal-cashback-callout">
              <Sparkles size={18} className="cb-sparkle" />
              <div>
                <strong>₹{cashbackAmount} Direct Cashback</strong>
                <span className="cb-sub">Credited to your BachatGanga wallet instantly upon delivery</span>
              </div>
            </div>

            <div className="modal-pricing-box">
              <span className="modal-price">₹{price.toLocaleString('en-IN')}</span>
              {selectedVariation ? (
                selectedVariation.sale_price && selectedVariation.price && (
                  <span className="modal-price-old">₹{Number(selectedVariation.price).toLocaleString('en-IN')}</span>
                )
              ) : (
                product.price && product.sale_price && (
                  <span className="modal-price-old">₹{Number(product.price).toLocaleString('en-IN')}</span>
                )
              )}
              <span className="modal-tax-tag">Inclusive of all GST taxes</span>
            </div>

            {/* Variations / Attributes if available */}
            {product.variations?.length > 0 && (
              <div className="variations-selector">
                <label className="variant-label">Select Option / Weight / Pack Size:</label>
                <div className="variant-options">
                  {product.variations.map((v) => {
                    const optionLabel = v.attribute_value || (v.attributes ? Object.values(v.attributes).join(', ') : (v.attr_val || v.sku || `Option #${v.id}`));
                    const optionAttr = v.attribute_name || (v.attributes ? Object.keys(v.attributes).join(', ') : (v.attribute?.name || ''));
                    const displayLabel = optionAttr ? `${optionAttr}: ${optionLabel}` : optionLabel;
                    const vPrice = v.sale_price || v.price;

                    return (
                      <button
                        key={v.id}
                        type="button"
                        className={`variant-pill ${selectedVariation?.id === v.id ? 'active' : ''}`}
                        onClick={() => setSelectedVariation(v)}
                      >
                        <span className="font-semibold">{displayLabel}</span>
                        {vPrice ? <span className="opacity-90 ml-1">(₹{Number(vPrice).toLocaleString('en-IN')})</span> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="product-desc-box">
              <p>{product.description || product.short_description || 'High quality certified genuine product backed by BachatGanga guarantee and fast door-step delivery.'}</p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="modal-purchase-controls">
              <div className="qty-control">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="qty-val">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= 50}
                >
                  +
                </button>
              </div>

              <button
                className="btn-primary btn-modal-cart"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                <span>Add {quantity} to Cart • ₹{(price * quantity).toLocaleString('en-IN')}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="modal-trust-list">
              <div className="trust-item">
                <Truck size={16} /> <span>Fast & Trackable Dispatch</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={16} /> <span>100% Genuine Certified</span>
              </div>
              <div className="trust-item">
                <RefreshCw size={16} /> <span>7-Day Easy Replacement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
