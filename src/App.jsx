import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'maplibre-gl/dist/maplibre-gl.css'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'

// Pages  
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Testpage from './pages/testpage/Testpage'
import RequestHelpForm from './components/RequestHelpForm'
import PostHelpForm from './components/PostHelpForm'
import About from './pages/About'

// Components
import Navbar from './components/Navbar'
import ProtectedRoute from './routes/ProtectedRoutes'

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5174/api';

// Wrapper component to handle navbar visibility
function AppContent() {
  const location = useLocation();
  const hideNavbarPaths = ['/post-help', '/request-help'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/testpage" element={<Testpage />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/request-help" 
          element={
            <ProtectedRoute>
              <RequestHelpForm />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/post-help" 
          element={
            <ProtectedRoute>
              <PostHelpForm />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App
