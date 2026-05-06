import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { exploreCategories } from '../data/categories'
import { promoSlides, spotlightSlides } from '../data/promos'
import { games, gamesInSection } from '../data/games'
import GameCard from '../components/GameCard'
import ScrollReveal from '../components/ScrollReveal'
import ScrollRevealStagger from '../components/ScrollRevealStagger'
import { staggerItem } from '../motion/revealConfig'

export default function Home() {
  const navigate = useNavigate()
  const reduce = useReducedMotion()

  const featured = games.slice(0, 8)
  const tendencia = gamesInSection('tendencia')
  const accion = gamesInSection('accion')
  const simulacion = gamesInSection('simulacion')

  return (
    <main className="pt-5 mt-5">
      <ScrollReveal className="d-block" variant="fadeUpSoft" transitionPreset="soft">
        <p className="display-3 text-center mt-4 pt-3 hero-welcome">
          Bienvenidos a Los <span className="color-nombre">5 Bits</span>
          <br />
          preparate para las mejores ofertas
        </p>
      </ScrollReveal>

      <section className="container mt-5 pt-4">
        <ScrollReveal className="d-block" variant="slideInLeft">
          <h1 className="display-4 mb-4 text-center font-weight-bold section-title-readable">
            Explora por Categorías
          </h1>
        </ScrollReveal>
        {reduce ? (
          <div className="row mt-4 justify-content-center">
            {exploreCategories.map((c) => (
              <div key={c.id} className="col-6 col-md-4 col-lg-2 mb-4">
                <CategoryTile c={c} onGoCatalog={() => navigate('/tienda')} />
              </div>
            ))}
          </div>
        ) : (
          <ScrollRevealStagger className="row mt-4 justify-content-center">
            {exploreCategories.map((c) => (
              <motion.div
                key={c.id}
                className="col-6 col-md-4 col-lg-2 mb-4"
                variants={staggerItem}
              >
                <CategoryTile c={c} onGoCatalog={() => navigate('/tienda')} />
              </motion.div>
            ))}
          </ScrollRevealStagger>
        )}
      </section>

      <section className="container-fluid mt-5 py-5">
        <ScrollReveal className="row g-4 justify-content-center align-items-center ms-auto me-auto" variant="fadeUp">
          <div className="col-12 col-md-8 px-0">
            <div
              id="carousel-promos"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {promoSlides.map((slide, i) => (
                  <div
                    key={slide.id}
                    className={`carousel-item bg-slide${i === 0 ? ' active' : ''}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                  />
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel-promos"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel-promos"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="text-center text-sm-start">
        <ScrollReveal variant="slideInLeft" className="d-block">
          <h1
            className="display-1 text-center align-items-center text-danger section-heading-danger-readable"
            id="todos"
          >
            Destacados
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fadeUpSoft" delay={0.06} className="d-block">
          <p className="text-center mb-4 text-readable">
            Una muestra de nuestro catálogo.{' '}
            <button
              type="button"
              className="btn btn-link text-warning p-0 align-baseline"
              onClick={() => navigate('/tienda')}
            >
              Ver catálogo completo
            </button>
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={0.1} className="d-block">
          <nav aria-label="Paginación destacados">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <button type="button" className="page-link border-0 bg-transparent">
                  2
                </button>
              </li>
              <li className="page-item">
                <button type="button" className="page-link border-0 bg-transparent">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </ScrollReveal>
        <section className="container-fluid px-0">
          <ScrollRevealStagger className="row justify-content-center g-3 px-2">
            {featured.map((game) => (
              <GameCard key={`feat-${game.id}`} game={game} stagger />
            ))}
          </ScrollRevealStagger>
        </section>
      </section>

      <section className="container-fluid px-0 mt-5">
        <ScrollReveal variant="slideInLeft" className="d-block">
          <h1
            className="text-center text-white display-1 mt-3 section-heading-readable"
            id="tendencia"
          >
            Tendencia
          </h1>
        </ScrollReveal>
        <ScrollRevealStagger className="row justify-content-center g-3 px-2">
          {tendencia.map((game) => (
            <GameCard key={`ten-${game.id}`} game={game} stagger />
          ))}
        </ScrollRevealStagger>

        <ScrollReveal className="mt-5 d-block" variant="scaleIn">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {spotlightSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                  aria-current={idx === 0 ? 'true' : undefined}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {spotlightSlides.map((s, idx) => (
                <div
                  key={s.id}
                  className={`carousel-item contenedor-carousel${idx === 0 ? ' active' : ''}`}
                >
                  <img
                    src={s.image}
                    className="d-block w-100 img-fluid"
                    alt={s.alt}
                    style={
                      s.objectPosition
                        ? { objectPosition: s.objectPosition }
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal className="row justify-content-center mt-5 publicidad-coca" variant="fadeUp">
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2"
            style={{ objectFit: 'contain', width: '50%' }}
          >
            <img
              src="/Assets/Paginas/Principal/publicidad-auriculares.jpg"
              className="img-fluid"
              style={{ width: '100%' }}
              alt="Publicidad"
            />
          </div>
        </ScrollReveal>

        <div className="row justify-content-center g-3 px-2 mt-5">
          <ScrollReveal variant="slideInRight" className="col-12">
            <h1
              className="text-center text-white display-1 mt-3 section-heading-readable"
              id="accion"
            >
              Acción
            </h1>
          </ScrollReveal>
          <div className="col-12 px-2">
            <ScrollRevealStagger className="row justify-content-center g-3">
              {accion.map((game) => (
                <GameCard key={`acc-${game.id}`} game={game} stagger />
              ))}
            </ScrollRevealStagger>
          </div>
        </div>

        <div className="row justify-content-center ms-auto me-auto mt-5">
          <ScrollReveal variant="slideInLeft" className="col-12">
            <h1
              className="text-center text-white display-1 mt-3 section-heading-readable"
              id="simulacion"
            >
              Simulación
            </h1>
          </ScrollReveal>
          <div className="col-12 px-2">
            <ScrollRevealStagger className="row justify-content-center g-3">
              {simulacion.map((game) => (
                <GameCard key={`sim-${game.id}`} game={game} stagger />
              ))}
            </ScrollRevealStagger>
          </div>
        </div>

        <ScrollReveal className="row justify-content-center mt-5 mb-5" variant="fadeUp">
          <div className="col-12 col-sm-4 col-md-3 col-lg-7">
            <img
              src="/Assets/Paginas/Principal/TWITCH.jpeg"
              className="img-fluid"
              alt="Twitch"
            />
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal className="d-block" variant="fadeUpSoft">
        <nav aria-label="Paginación inferior">
          <ul className="pagination justify-content-center mt-5">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item">
              <button type="button" className="page-link border-0 bg-transparent">
                1
              </button>
            </li>
            <li className="page-item active">
              <span className="page-link" aria-current="page">
                2
              </span>
            </li>
            <li className="page-item">
              <button type="button" className="page-link border-0 bg-transparent">
                3
              </button>
            </li>
            <li className="page-item">
              <button type="button" className="page-link border-0 bg-transparent">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </ScrollReveal>
    </main>
  )
}

function CategoryTile({ c, onGoCatalog }) {
  return (
    <button
      type="button"
      className="category-card border-0 bg-transparent p-0 w-100"
      onClick={() => {
        if (c.anchor) {
          document.getElementById(c.anchor)?.scrollIntoView({ behavior: 'smooth' })
        } else {
          onGoCatalog()
        }
      }}
    >
      <div
        className={`card bg-dark text-center p-4 h-100 border-0 rounded-lg shadow-hover ${c.cardClass}`}
      >
        <div className="icon-container mb-3">
          <i className={c.iconClass} aria-hidden />
        </div>
        <h5 className="text-light mb-0">{c.title}</h5>
        <div className="hover-indicator mt-2" />
      </div>
    </button>
  )
}
