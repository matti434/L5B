import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const social = [
  { icon: 'fab fa-facebook-f', label: 'Facebook' },
  { icon: 'fab fa-x-twitter', label: 'Twitter' },
  { icon: 'fab fa-youtube', label: 'YouTube' },
  { icon: 'fab fa-instagram', label: 'Instagram' },
  { icon: 'fab fa-discord', label: 'Discord' },
]

const infoLinks = [
  { label: 'Política de privacidad', to: null },
  { label: 'Términos de uso', to: null },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Soporte', to: null },
]

export default function Footer() {
  return (
    <footer className="navbar-dark bg-dark mt-5">
      <ScrollReveal className="container" variant="fadeUpSoft" transitionPreset="soft">
        <div className="row d-flex justify-content-center align-items-center g-4">
          <div className="col-12 col-md-5 col-lg-6 mb-4 mb-lg-0 text-center text-md-start">
            <div className="footer-logo">
              <Link to="/" className="d-inline-block">
                <img
                  src="/Assets/LOGOS/Logo completo png.png"
                  alt="Logo L5B"
                  className="img-fluid"
                  style={{ maxHeight: '80px' }}
                />
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-white text-center text-md-start">Redes Sociales</h4>
            <div className="footer-socials d-flex justify-content-center justify-content-md-start gap-3">
              {social.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-danger fs-5"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <h4 className="text-white text-center text-lg-start">Información</h4>
            <ul className="list-unstyled text-center text-lg-start">
              {infoLinks.map(({ label, to }) => (
                <li key={label} className="mb-2">
                  {to ? (
                    <Link
                      to={to}
                      className="text-danger text-decoration-none"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="text-danger text-decoration-none"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center text-white mt-4 pt-3 border-top border-secondary">
          © 2026 5BITS. Todos los derechos reservados.
        </div>
      </ScrollReveal>
    </footer>
  )
}
