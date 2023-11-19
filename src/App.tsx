import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Scholarships from './pages/Scholarships'
import ScholarshipViewMore from './pages/ScholarshipViewMore'
import Bookmarks from './pages/Bookmarks'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ReviewDocument from './pages/ReviewDocument'

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
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<ReviewDocument />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
