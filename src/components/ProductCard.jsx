import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card glass animate-fade-in">
            <div className="product-image-container">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} className="product-image" />
                </Link>
                {product.discount && <span className="discount-badge">-{product.discount}%</span>}
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <Link to={`/product/${product.id}`}>
                    <h3 className="product-title">{product.title}</h3>
                </Link>
                <div className="product-price-row">
                    <div className="prices">
                        <span className="current-price">${product.price}</span>
                        {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                    </div>
                    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                        <span>+</span> Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
