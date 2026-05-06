import { useMemo, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { games } from '../data/games'
import GameCard from '../components/GameCard'
import ScrollReveal from '../components/ScrollReveal'
import ScrollRevealStagger from '../components/ScrollRevealStagger'

const PAGE_SIZE = 8

function normalize(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function useCatalogFilter(searchParams) {
  const q = searchParams.get('q') ?? ''
  return useMemo(() => {
    const n = normalize(q.trim())
    if (!n) return games
    return games.filter((g) => {
      const inTitle = normalize(g.title).includes(n)
      const inTags = g.tags.some((t) => normalize(t).includes(n))
      return inTitle || inTags
    })
  }, [q])
}

function CatalogPagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="Paginación del catálogo">
      <ul className="pagination justify-content-center flex-wrap catalog-pagination mb-0">
        <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
          <button
            type="button"
            className="page-link"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <li key={p} className={`page-item ${p === page ? 'active' : ''}`}>
            {p === page ? (
              <span className="page-link" aria-current="page">
                {p}
              </span>
            ) : (
              <button
                type="button"
                className="page-link"
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
            )}
          </li>
        ))}
        <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
          <button
            type="button"
            className="page-link"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default function Store() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const pageParam = parseInt(searchParams.get('page') ?? '1', 10)
  const page = Number.isFinite(pageParam) && pageParam >= 1 ? pageParam : 1

  const filtered = useCatalogFilter(searchParams)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

  const safePage = Math.min(page, totalPages)
  const pageSliceStart = (safePage - 1) * PAGE_SIZE
  const paginated = filtered.slice(pageSliceStart, pageSliceStart + PAGE_SIZE)

  useEffect(() => {
    if (page !== safePage) {
      const next = new URLSearchParams(searchParams)
      next.set('page', String(safePage))
      setSearchParams(next, { replace: true })
    }
  }, [page, safePage, searchParams, setSearchParams])

  useEffect(() => {
    if (location.hash === '#todos') {
      requestAnimationFrame(() => {
        document.getElementById('todos')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.pathname, location.hash])

  const setQuery = (value) => {
    const next = new URLSearchParams(searchParams)
    const v = value.trim()
    if (v) next.set('q', v)
    else next.delete('q')
    next.set('page', '1')
    setSearchParams(next)
  }

  const goToPage = (p) => {
    const next = new URLSearchParams(searchParams)
    next.set('page', String(Math.max(1, Math.min(p, totalPages))))
    setSearchParams(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="pt-5 mt-5 px-2 store-page">
      <ScrollReveal variant="slideInLeft" className="d-block">
        <h1
          className="display-3 text-center text-danger mt-4 section-heading-danger-readable"
          id="todos"
        >
          Catálogo completo
        </h1>
      </ScrollReveal>
      <ScrollReveal variant="fadeUpSoft" delay={0.05} className="d-block">
        <p className="text-center lead text-readable">
          {filtered.length} juego{filtered.length === 1 ? '' : 's'} · Página{' '}
          {safePage} de {totalPages}
        </p>
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.08} className="container py-3">
        <label htmlFor="catalog-search" className="form-label text-readable">
          Buscar en catálogo
        </label>
        <input
          id="catalog-search"
          type="search"
          className="form-control form-control-lg bg-dark text-light border-secondary catalog-search-input"
          placeholder="Título o género…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.1} className="d-block">
        <CatalogPagination
          page={safePage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </ScrollReveal>

      <section className="container-fluid px-0">
        <ScrollRevealStagger className="row justify-content-center g-3 px-2 pb-4">
          {paginated.map((game) => (
            <GameCard key={game.id} game={game} stagger />
          ))}
        </ScrollRevealStagger>
        {filtered.length === 0 ? (
          <p className="text-center text-light pb-5">No hay resultados.</p>
        ) : null}
      </section>

      <ScrollReveal variant="fadeUpSoft" className="d-block pb-5">
        <CatalogPagination
          page={safePage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </ScrollReveal>
    </main>
  )
}
