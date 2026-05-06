import { useState } from 'react'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { exploreCategories } from '../data/categories'

function scrollToAnchor(id) {
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  })
}

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [homeDraft, setHomeDraft] = useState('')

  const onStore = location.pathname === '/tienda'
  const urlQuery = searchParams.get('q') ?? ''
  const navQuery = onStore ? urlQuery : homeDraft

  const isHome = location.pathname === '/'
  const isStore =
    location.pathname === '/tienda' || location.pathname.startsWith('/producto')

  const handleCategoryNav = (anchor) => {
    if (!anchor) {
      navigate('/tienda')
      return
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToAnchor(anchor), 120)
    } else {
      scrollToAnchor(anchor)
    }
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if (onStore) return
    const q = homeDraft.trim()
    const path = q
      ? `/tienda?q=${encodeURIComponent(q)}&page=1`
      : '/tienda?page=1'
    navigate(path)
  }

  const handleSearchChange = (e) => {
    const v = e.target.value
    if (onStore) {
      const next = new URLSearchParams(searchParams)
      if (v) next.set('q', v)
      else next.delete('q')
      next.set('page', '1')
      setSearchParams(next, { replace: true })
    } else {
      setHomeDraft(v)
    }
  }

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5"
        data-bs-theme="dark"
      >
        <div className="container">
          <button
            type="button"
            className="navbar-brand btn btn-link text-decoration-none text-white p-0 border-0 d-flex align-items-center gap-2"
            onClick={() => navigate('/')}
          >
            <img
              src="/Assets/LOGOS/Cruz del logo png.png"
              alt=""
              height={40}
            />
            <span>L5B</span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-start border-0 w-100 ${
                    isHome ? 'active' : ''
                  }`}
                  onClick={() => navigate('/')}
                >
                  Inicio
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-start border-0 w-100 ${
                    isStore ? 'active' : ''
                  }`}
                  onClick={() => navigate('/tienda')}
                >
                  Catálogo
                </button>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) =>
                    `nav-link btn btn-link text-start border-0 w-100 rounded-0 ${
                      isActive ? 'active' : ''
                    }`
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    `nav-link btn btn-link text-start border-0 w-100 rounded-0 ${
                      isActive ? 'active' : ''
                    }`
                  }
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item dropdown nav-categories-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  {exploreCategories.map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => handleCategoryNav(c.anchor)}
                      >
                        {c.title}
                      </button>
                    </li>
                  ))}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => navigate('/tienda#todos')}
                    >
                      Ver todas
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center flex-wrap flex-lg-nowrap gap-2 ms-lg-auto navbar-toolbar">
              <form
                className="search-form search-form--navbar flex-shrink-0"
                onSubmit={submitSearch}
              >
                <input
                  className="form-control search-form__input"
                  type="search"
                  placeholder="Buscar juegos..."
                  aria-label="Buscar juegos"
                  value={navQuery}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn search-form__submit"
                  type="submit"
                  aria-label="Buscar"
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>

              <div className="dropdown account-dropdown flex-shrink-0">
                <a
                  className="btn btn-account dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-circle-user me-1" /> Mi cuenta
                </a>
                <ul className="dropdown-menu dropdown-menu-end account-dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                      Perfil
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#mi-modal"
                    >
                      Inicio de sesión
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#mi-modal-registro"
                    >
                      Registrarse
                    </button>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                      Lista de deseos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                      Carrito
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href="#"
                className="btn btn-cart ms-lg-3"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa-solid fa-cart-shopping text-warning" />
                <span className="cart-badge text-warning">3</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
