import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Scholarships from './pages/Scholarships'
import ScholarshipViewMore from './pages/ScholarshipViewMore'
import Bookmarks from './pages/Bookmarks'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route
            path="/scholarships/viewmore"
            element={<ScholarshipViewMore />}
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
