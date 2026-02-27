import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './SuccessPage.css';

const SuccessPage = () => {
    useEffect(() => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#2563eb', '#7c3aed', '#f59e0b']
        });
    }, []);

    return (
        <div className="container success-page animate-fade-in">
            <div className="success-card glass">
                <div className="success-icon">🎉</div>
                <h1>Order Placed Successfully!</h1>
                <p>Your premium products are on their way. We've sent a confirmation email to your inbox.</p>
                <div className="order-details">
                    <p>Order Number: <strong>#AG-{Math.floor(Math.random() * 900000) + 100000}</strong></p>
                    <p>Estimated Delivery: <strong>2-3 Business Days</strong></p>
                </div>
                <Link to="/" className="home-btn">Continue Shopping</Link>
            </div>
        </div>
    );
};

export default SuccessPage;
