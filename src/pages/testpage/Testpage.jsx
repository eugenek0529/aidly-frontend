import { useState } from 'react';

function Testpage() {
  const [activeView, setActiveView] = useState('find'); // 'find' or 'give'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Map Section Placeholder */}
      <div className="w-full h-[40vh] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Map Coming Soon</p>
      </div>

      {/* List Section */}
      <div className="px-4 py-6">
        {/* Header Section with Toggle */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">LA Wildfires</h2>
            <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
              <button 
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeView === 'find' 
                    ? 'bg-black text-white font-bold' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => setActiveView('find')}
              >
                Find Help
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeView === 'give' 
                    ? 'bg-black text-white font-bold' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => setActiveView('give')}
              >
                Give Help
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">
              {activeView === 'find' 
                ? 'Browse and respond to help requests' 
                : 'Create and manage help offers'}
            </p>
            {activeView === 'find' ? (
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#1397e9] rounded-md hover:bg-[#1397e9]/90 transition-colors">
                Ask for Help
              </button>
            ) : (
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#1397e9] rounded-md hover:bg-[#1397e9]/90 transition-colors">
                Post Help
              </button>
            )}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Testpage
