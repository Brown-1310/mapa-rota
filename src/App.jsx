import { Routes, Route } from 'react-router-dom'
import MapPage from './pages/MapPage.jsx'
import CityPage from './pages/CityPage.jsx'
import GlossaryPage from './pages/GlossaryPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/cidade/:slug" element={<CityPage />} />
      <Route path="/glossario" element={<GlossaryPage />} />
    </Routes>
  )
}
