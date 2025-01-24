import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 absolute top-0 left-0 right-0">
      <nav className="max-w-[90%] mx-auto mt-4 bg-black/10 backdrop-blur-sm text-white rounded-xl p-1">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-black">
              Aidly Beta
            </Link>
            <div className="flex items-center gap-4">
              {/* Dropdown Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <button 
                  className="px-4 py-2 text-sm font-medium text-black hover:text-[#ff0000] transition-colors flex items-center gap-1"
                >
                  Disasters
                  <svg 
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <div className="absolute h-3 w-full -top-3"></div>
                    <Link
                      to="/testpage"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      LA Wildfires (Beta)
                    </Link>
                    <div className="px-4 py-2 text-sm text-gray-400">More coming soon...</div>
                  </div>
                )}
              </div>

              <div className="h-6 w-[1px] bg-gray-400/30"></div>
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