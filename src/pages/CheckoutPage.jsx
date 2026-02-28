import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        paymentMethod: 'card'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd process the payment here.
        console.log('Processing order for:', formData);
        clearCart();
        navigate('/success');
    };

    return (
        <div className="container checkout-page animate-fade-in">
            <h1>Checkout</h1>
            <div className="checkout-grid">
                <form className="checkout-form glass" onSubmit={handleSubmit}>
                    <section className="form-section">
                        <h2>Shipping Details</h2>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" required value={formData.address} onChange={handleChange} placeholder="123 Future St" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="New York" />
                            </div>
                            <div className="form-group">
                                <label>ZIP Code</label>
                                <input type="text" name="zip" required value={formData.zip} onChange={handleChange} placeholder="10001" />
                            </div>
                        </div>
                    </section>

                    <section className="form-section">
                        <h2>Payment Method</h2>
                        <div className="payment-options">
                            <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                                <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} />
                                <span className="option-label">💳 Credit/Debit Card</span>
                            </label>
                            <label className={`payment-option ${formData.paymentMethod === 'phonepe' ? 'active' : ''}`}>
                                <input type="radio" name="paymentMethod" value="phonepe" checked={formData.paymentMethod === 'phonepe'} onChange={handleChange} />
                                <span className="option-label">📱 PhonePe / UPI</span>
                            </label>
                            <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'active' : ''}`}>
                                <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
                                <span className="option-label">💵 Cash on Delivery</span>
                            </label>
                        </div>

                        {formData.paymentMethod === 'card' && (
                            <div className="card-details animate-fade-in">
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" name="cardNumber" required value={formData.cardNumber} onChange={handleChange} placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="text" name="expiry" required value={formData.expiry} onChange={handleChange} placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input type="password" name="cvv" required value={formData.cvv} onChange={handleChange} placeholder="***" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {formData.paymentMethod === 'phonepe' && (
                            <div className="upi-details animate-fade-in">
                                <div className="form-group">
                                    <label>UPI ID</label>
                                    <input type="text" name="upiId" required placeholder="user@ybl" />
                                    <p className="helper-text">Scan QR on the next screen or enter UPI ID</p>
                                </div>
                            </div>
                        )}

                        {formData.paymentMethod === 'cod' && (
                            <div className="cod-details animate-fade-in">
                                <p>Pay with cash upon delivery. No advance payment required.</p>
                            </div>
                        )}
                    </section>

                    <button type="submit" className="place-order-btn">Place Order</button>
                </form>

                <div className="order-summary glass">
                    <h2>Order Summary</h2>
                    {cart.map(item => (
                        <div key={item.id} className="summary-item">
                            <span>{item.title} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
