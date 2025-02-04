import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

// Components
import Navbar from './components/Navbar'
import ProtectedRoute from './routes/ProtectedRoutes'

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5174/api';

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/testpage" element={<Testpage />} />
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
      </Router>
    </AuthProvider>
  );
}

export default App
