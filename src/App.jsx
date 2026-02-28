import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main style={{ minHeight: 'calc(100vh - var(--header-height) - 200px)', padding: '24px 0' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
