import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed w-full bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            YourBrand
          </Link>
          <div className="flex gap-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 text-sm font-medium bg-white text-[#1a1a1a] rounded-md hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 