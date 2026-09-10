import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToHash } from './components/ScrollToHash'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
