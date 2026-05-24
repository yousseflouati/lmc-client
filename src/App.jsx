import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import Navbar from './components/Navbar'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/catalogue"                  element={<CatalogPage />} />
        <Route path="/catalogue/103-mbk"          element={<CatalogPage />} />
        <Route path="/catalogue/vespa-scooter"    element={<CatalogPage />} />
        <Route path="/catalogue/velo"             element={<CatalogPage />} />
        <Route path="/catalogue/pieces-generales" element={<CatalogPage />} />
        <Route path="/catalogue/echappements"     element={<CatalogPage />} />
        <Route path="/catalogue/freins-roues"     element={<CatalogPage />} />
        <Route path="/catalogue/eclairage"        element={<CatalogPage />} />
        <Route path="/catalogue/accessoires"      element={<CatalogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App