import React, { useState } from 'react';

function ProductCard({ product, onAddToCart, onToggleFav, isFavorite }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [addedAnim, setAddedAnim] = useState(false);

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize });
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 700);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && (
          <span className={`product-badge ${product.badgeType || ''}`}>
            {product.badge}
          </span>
        )}
        <button
          className={`fav-toggle-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFav(product.id)}
          title={isFavorite ? 'Убрать из избранного' : 'В избранное'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>

        <div className="product-emoji-stage">
          <img src={product.image} alt={product.title} loading="lazy" />
        </div>
      </div>

      <div className="product-body">
        <div className="product-meta-top">
          <span className="product-category">{product.category}</span>
          <span className="product-rating">⭐ {product.rating} ({product.reviews})</span>
        </div>

        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>

        {product.sizes && (
          <div className="product-sizes">
            <span className="size-label">Размер:</span>
            <div className="size-pills">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-pill ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="product-footer">
          <div className="price-block">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice.toLocaleString()} сум</span>
            )}
            <span className="current-price">{product.price.toLocaleString()} сум</span>
          </div>

          <button
            className={`add-cart-btn ${addedAnim ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {addedAnim ? '✓ Добавлено' : '+ В корзину'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;