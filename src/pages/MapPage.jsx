import RouteMap from '../components/RouteMap.jsx'
import { glossary } from '../data/glossary.js'
import './MapPage.css'
import { Link } from 'react-router-dom'

export default function MapPage() {
  return (
    <div className="map-page">
      <header className="map-page__header">
        <span className="map-page__eyebrow">Sertão → Litoral · Ceará</span>
        <h1 className="map-page__title">Catarina a Aquiraz</h1>
        <p className="map-page__subtitle">
          14 cidades no caminho. Toque em cada marco da estrada para abrir a
          página com as informações daquela cidade.
        </p>
      </header>

      <RouteMap />

     <Link to="/glossario" className="map-page__glossary-link">
      Ver glossário →
      </Link>

      <footer className="map-page__footer">
        <span>Catarina</span>
        <div className="map-page__footer-line" />
        <span>Aquiraz</span>
      </footer>

     

    </div>
  )
}