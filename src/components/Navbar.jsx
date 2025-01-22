import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full px-4 absolute top-0 left-0 right-0">
      <nav className="max-w-[90%] mx-auto mt-4 bg-black/10 backdrop-blur-sm text-white rounded-xl p-1">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-black">
              Aidly Beta
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-10 w-[1px] bg-gray-400/80"></div>
              <Link 
                to="/login" 
                className="px-4 py-2 text-sm font-medium bg-white rounded-md text-black border border-gray-400 hover:text-[#ff0000] transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-4 py-2 text-sm font-medium text-white bg-[#222222] rounded-md hover:bg-black/80 transition-colors"
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