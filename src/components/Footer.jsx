import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Antigravity<span>Store</span></h3>
                    <p>The future of premium e-commerce. Fast, secure, and futuristic.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Home & Living</a></li>
                        <li><a href="#">Gadgets</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Antigravity Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
