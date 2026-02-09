import { Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { WhatsAppChat } from './components/WhatsAppChat'
import { AIBot } from './components/AIBot'
import { Footer } from './components/Footer'
import HomePage from './pages/HomePage'
import { ProductCatalogPage } from './pages/ProductCatalogPage'
import { CartProvider } from './context/CartContext'
import { CartPage } from './pages/CartPage'
import { ProductPage } from './pages/ProductPage'
import { AboutPage } from './pages/AboutPage'
import { PricingPage } from './pages/PricingPage'
import { ContactPage } from './pages/ContactPage'
const App = () => {
  return (
    // <Router>
      <CartProvider>
        <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductCatalogPage />} />
            <Route path="/products/:categorySlug" element={<ProductCatalogPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />

      {/* floating elements  */}
      <WhatsAppChat />
      <AIBot />
    </div>
      </CartProvider>
    // </Router>
    
  )
}

export default App
