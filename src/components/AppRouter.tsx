import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ScrollTop from './ScrollTop'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import BrastempExperience from '../pages/work/BrastempExperience'

export default function AppRouter() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work/brastemp-experience" element={<BrastempExperience />} />
      </Routes>
    </Router>
  )
}
