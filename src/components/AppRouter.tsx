import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import BrastempExperience from '../pages/BrastempExperience'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="brastemp-experience" element={<BrastempExperience />} />
      </Routes>
    </Router>
  )
}
