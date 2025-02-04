import { useState } from 'react';
import MapDisplay from '../../components/MapDisplay';
import ListSection from '../../components/ListSection';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Testpage() {
  const [activeView, setActiveView] = useState('find');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePostClick = () => {
    if (activeView === 'find') {
      navigate('/request-help');  // Navigate to help request form
    } else {
      navigate('/post-help');     // Navigate to help offer form
    }
  };

  const eventLocations = [
    {
      id: 1,
      lat: 34.0522,
      lng: -118.2437,
      title: "Downtown LA Event"
    },
    {
      id: 2,
      lat: 34.0211,
      lng: -118.4937,
      title: "Santa Monica Event"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="md:flex md:flex-row-reverse">
        {/* Map Section */}
        <div className="w-full h-[40vh] md:h-[calc(100vh-64px)] md:w-1/2">
          <MapDisplay locations={eventLocations} />
        </div>

        {/* List Section */}
        <div className="px-4 py-6 md:w-1/2">
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
              {user ? (
                <button 
                  className="px-4 py-2 text-sm font-medium text-white bg-[#1397e9] rounded-md hover:bg-[#1397e9]/90 transition-colors"
                  onClick={handlePostClick}
                >
                  {activeView === 'find' ? 'Ask for Help' : 'Post Help'}
                </button>
              ) : (
                <button 
                  className="px-4 py-2 text-sm font-medium text-[#1397e9] hover:text-[#1397e9]/90 transition-colors"
                  onClick={() => navigate('/login')}
                >
                  Sign in to {activeView === 'find' ? 'ask for help' : 'post help'}
                </button>
              )}
            </div>
          </div>

          {/* List Content */}
         
            
            <ListSection activeView={activeView} />
          
        </div>
      </div>
    </div>
  );
}

export default Testpage;
