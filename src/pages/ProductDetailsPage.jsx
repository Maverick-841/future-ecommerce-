import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container error-page">
                <h2>Product not found</h2>
                <Link to="/" className="back-link">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container product-details-page animate-fade-in">
            <div className="product-details-grid">
                <div className="product-gallery glass">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="product-main-info">
                    <span className="details-category">{product.category}</span>
                    <h1 className="details-title">{product.title}</h1>

                    <div className="details-rating">
                        <span className="stars">⭐⭐⭐⭐⭐</span>
                        <span className="rating-num">({product.rating})</span>
                        <span className="reviews">120 Reviews</span>
                    </div>

                    <div className="details-pricing">
                        <span className="details-current-price">${product.price}</span>
                        {product.oldPrice && <span className="details-old-price">${product.oldPrice}</span>}
                        {product.discount && <span className="details-discount">Save {product.discount}%</span>}
                    </div>

                    <p className="details-description">{product.description}</p>

                    <div className="details-actions">
                        <button className="add-btn" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                        <button className="buy-btn" onClick={handleBuyNow}>Buy It Now</button>
                    </div>

                    <div className="details-features">
                        <div className="feature">
                            <span>🚚</span>
                            <div>
                                <strong>Free Delivery</strong>
                                <p>On orders over $500</p>
                            </div>
                        </div>
                        <div className="feature">
                            <span>🛡️</span>
                            <div>
                                <strong>2 Year Warranty</strong>
                                <p>Full protection guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
