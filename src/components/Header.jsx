import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { cartCount, searchQuery, setSearchQuery } = useCart();
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (window.location.pathname !== '/') {
            navigate('/');
        }
    };

    // The form's onSubmit will now just prevent default to avoid page reload,
    // as search logic is handled by handleSearchChange on input.
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // If there's a need for a separate action on submit (e.g., filtering results),
        // it would go here. For now, the search is reactive to input changes.
        console.log('Search submitted for:', searchQuery);
    };

    return (
        <header className="header glass">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <span className="logo-icon">🚀</span>
                    <span className="logo-text">Antigravity<span>Store</span></span>
                </Link>

                <form onSubmit={handleSearchSubmit} className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for premium products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="search-btn">
                        🔍
                    </button>
                </form>

                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cart" className="cart-icon-wrapper">
                        <span className="cart-icon">🛒</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        <span className="cart-label">Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
