import { Link } from 'react-router-dom'
import { glossary } from '../data/glossary.js'
import './GlossaryPage.css'

export default function GlossaryPage() {
  return (
    <div className="glossary-page">
      <Link to="/" className="glossary-page__back">
        ← Voltar para o mapa
      </Link>

      <h1 className="glossary-page__title">Dicionário</h1>

      <dl className="glossary-page__list">
        {glossary.map((item) => (
          <div className="glossary-page__item" key={item.term}>
            <dt className="glossary-page__term">{item.term}</dt>
            <dd className="glossary-page__definition">{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}