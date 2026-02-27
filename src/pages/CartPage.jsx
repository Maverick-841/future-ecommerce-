import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container empty-cart-wrapper animate-fade-in">
                <div className="glass empty-cart-content">
                    <span className="empty-icon">🛒</span>
                    <h2>Your cart is empty</h2>
                    <p>Treat yourself to some premium tech gadgets today!</p>
                    <Link to="/" className="shop-link">Back to Shop</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container cart-page animate-fade-in">
            <div className="cart-header">
                <h1>Shopping Cart ({cartCount})</h1>
            </div>

            <div className="cart-grid">
                <div className="cart-items-list">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item glass">
                            <img src={item.image} alt={item.title} className="cart-item-img" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{item.title}</h3>
                                <span className="cart-item-category">{item.category}</span>
                                <div className="cart-item-pricing">
                                    <span className="cart-item-price">${item.price}</span>
                                </div>
                            </div>
                            <div className="cart-item-controls">
                                <div className="quantity-toggle">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary glass">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                    <p className="secure-text">🔒 100% Secure Checkout</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
