import { useParams, Link, Navigate } from 'react-router-dom'
import { cities, getCityBySlug } from '../data/cities.js'
import './CityPage.css'

export default function CityPage() {
  const { slug } = useParams()
  const city = getCityBySlug(slug)

  if (!city) {
    return <Navigate to="/" replace />
  }

  const index = cities.findIndex((c) => c.slug === slug)
  const prev = cities[index - 1]
  const next = cities[index + 1]

  return (
    <div className="city-page">
      <Link to="/" className="city-page__back">
        ← Voltar para o mapa
      </Link>

      <span className="city-page__eyebrow">
        Parada {index + 1} de {cities.length}
      </span>
      <h1 className="city-page__title">{city.name}</h1>
      {city.description.map((paragraph, i) => {
        const isValue = paragraph.trim().startsWith('·')
        return (
          <p
            className={
              isValue
                ? 'city-page__description city-page__description--indent'
                : 'city-page__description'
           }
            key={i}
          >
            {paragraph}
          </p>
        )
      })}

      <nav className="city-page__nav">
        {prev ? (
          <Link to={`/cidade/${prev.slug}`} className="city-page__nav-link">
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/cidade/${next.slug}`} className="city-page__nav-link">
            {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
