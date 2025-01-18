import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full px-4 absolute top-0 left-0 right-0">
      <nav className="max-w-[90%] mx-auto mt-4 bg-[#1a1a1a] text-white rounded-xl">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold">
              Aidly
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
    </div>
  )
}

export default Navbar 