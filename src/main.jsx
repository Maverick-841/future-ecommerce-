import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
