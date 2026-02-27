import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './HomePage.css';
import { useCart } from '../context/CartContext';

const HomePage = () => {
    const { searchQuery } = useCart();
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="home-page animate-fade-in">
            <section className="hero-section glass">
                <div className="container hero-content">
                    <h1>Future of <span>Shopping</span></h1>
                    <p>Explore our curated collection of premium gadgets and accessories designed for the modern era.</p>
                    <button className="cta-btn">Shop Now</button>
                </div>
            </section>

            <section className="container categories-section">
                <div className="category-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="container products-grid-section">
                <div className="section-header">
                    <h2>Featured Products</h2>
                    <div className="line"></div>
                </div>
                <div className="grid-auto">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
