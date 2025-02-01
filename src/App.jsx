import axios from 'axios'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import 'maplibre-gl/dist/maplibre-gl.css'

// Pages  
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Testpage from './pages/testpage/Testpage'
//import PostForm from './pages/forms/PostForm'

// Components
import Navbar from './components/Navbar'

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5174/api';

// Root layout component
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/testpage" element={<Testpage />} />
      {/* <Route path="/create-post" element={<PostForm />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
