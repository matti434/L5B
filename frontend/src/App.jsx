import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthModals from './components/AuthModals'
import Home from './pages/Home'
import Store from './pages/Store'
import ProductDetail from './pages/ProductDetail'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <AuthModals />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/producto/:slug" element={<ProductDetail />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}
