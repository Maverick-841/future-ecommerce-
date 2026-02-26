import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { cartCount } = useCart();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            // Search logic would go here
            console.log('Searching for:', search);
        }
    };

    return (
        <header className="header glass">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <span className="logo-icon">🚀</span>
                    <span className="logo-text">Antigravity<span>Store</span></span>
                </Link>

                <form onSubmit={handleSearch} className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for premium products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
