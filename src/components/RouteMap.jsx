import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cities } from '../data/cities.js'

const VIEW_W = 400
const VIEW_H = 900

// Gera um caminho suave (curva) passando por todos os pontos da rota.
function buildPath(points) {
  if (points.length < 2) return ''
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i]
    const p1 = points[i + 1]
    const midX = (p0.x + p1.x) / 2
    const midY = (p0.y + p1.y) / 2
    d += ` Q ${p0.x} ${midY}, ${midX} ${midY}`
    d += ` Q ${p1.x} ${midY}, ${p1.x} ${p1.y}`
  }
  return d
}

export default function RouteMap() {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()
  const pathD = buildPath(cities)

  return (
    <div className="route-map">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label="Mapa ilustrado da rota entre Catarina e Aquiraz"
      >
        <path
          d={pathD}
          fill="none"
          stroke="var(--road-dust)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d={pathD}
          fill="none"
          stroke="var(--road)"
          strokeWidth="6"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />

        {cities.map((city, i) => {
          const isHovered = hovered === city.slug
          const isEndpoint = i === 0 || i === cities.length - 1

          return (
            <g
              key={city.slug}
              className="city-node"
              onMouseEnter={() => setHovered(city.slug)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/cidade/${city.slug}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/cidade/${city.slug}`)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Ver informações de ${city.name}`}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={city.x}
                cy={city.y}
                r={isEndpoint ? 13 : isHovered ? 11 : 8}
                fill={isHovered || isEndpoint ? 'var(--node-active)' : 'var(--node)'}
                stroke="var(--bg)"
                strokeWidth="3"
                style={{ transition: 'r 120ms ease, fill 120ms ease' }}
              />
              <text
                x={city.x}
                y={city.y - 20}
                textAnchor="middle"
                fill="var(--text)"
                stroke="rgba(0, 0, 0, 0.85)"
                strokeWidth="3"
                paintOrder="stroke"
                fontFamily="var(--font-body)"
                fontSize={isHovered ? 15 : 13}
                fontWeight={isHovered || isEndpoint ? 600 : 500}
                style={{ transition: 'font-size 120ms ease' }}
              >
                {city.name}
              </text>
              <text
                x={city.x}
                y={city.y + 26}
                textAnchor="middle"
                fill="var(--text-muted)"
                fontFamily="var(--font-body)"
                fontSize="10"
              >
                {i + 1}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
