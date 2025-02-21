import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function RequestHelpForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: {
      latitude: '',
      longitude: ''
    },
    locationName: '',
    address: '',
    urgency: 'medium',
    contactInfo: '',
    status: 'open',
    createdBy: user?.id
  });

  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define LA coordinates and bounding box
  const LA_COORDINATES = [-118.2437, 34.0522];
  const BOUNDING_BOX = {
    minLon: -119.2437,
    minLat: 33.5522,
    maxLon: -117.2437,
    maxLat: 34.5522
  };

  // Initialize map
  useEffect(() => {
    const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;
    
    if (!MAPTILER_KEY || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
      center: LA_COORDINATES,
      zoom: 10,
      maxBounds: [
        [BOUNDING_BOX.minLon, BOUNDING_BOX.minLat],
        [BOUNDING_BOX.maxLon, BOUNDING_BOX.maxLat]
      ]
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    marker.current = new maplibregl.Marker({
      draggable: true
    });

    marker.current.on('dragend', () => {
      const lngLat = marker.current.getLngLat();
      updateLocation(lngLat.lat, lngLat.lng);
      fetchAddress(lngLat.lat, lngLat.lng);
    });

    return () => {
      
    };
  }, []);

  // Add categories fetch effect
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/categories');
        if (response.data.success) {
          const formattedCategories = response.data.categories.map(cat => ({
            value: cat._id,
            label: cat.name.charAt(0).toUpperCase() + cat.name.slice(1)
          }));
          setCategories(formattedCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const searchAddress = async () => {
    try {
      if (!formData.address) {
        setError('Please enter an address before searching');
        return;
      }

      setHasSearched(true);
      const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;
      const boundingBoxString = `${BOUNDING_BOX.minLon},${BOUNDING_BOX.minLat},${BOUNDING_BOX.maxLon},${BOUNDING_BOX.maxLat}`;
      
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(formData.address)}.json?` + 
        `bbox=${boundingBoxString}&` +
        `proximity=${LA_COORDINATES[0]},${LA_COORDINATES[1]}&` +
        `key=${MAPTILER_KEY}`
      );
      
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const filteredResults = data.features.filter(feature => {
          const [lon, lat] = feature.center;
          return (
            lon >= BOUNDING_BOX.minLon &&
            lon <= BOUNDING_BOX.maxLon &&
            lat >= BOUNDING_BOX.minLat &&
            lat <= BOUNDING_BOX.maxLat
          );
        });

        if (filteredResults.length > 0) {
          if (filteredResults.length === 1) {
            handleSelectLocation(filteredResults[0]);
          } else {
            setSearchResults(filteredResults);
            setShowSuggestions(true);
            setError('Multiple locations found. Please select one from the suggestions.');
          }
        } else {
          setError('No locations found in the allowed area. Please try a different address.');
        }
      } else {
        setError('No locations found. Please try a different address.');
      }
    } catch (error) {
      console.error('Error searching:', error);
      setError('Error searching for location. Please try again.');
    }
  };

  const handleSelectLocation = (feature) => {
    const [longitude, latitude] = feature.center;
    
    map.current.flyTo({
      center: [longitude, latitude],
      zoom: 15
    });

    marker.current.setLngLat([longitude, latitude]).addTo(map.current);

    setFormData(prev => ({
      ...prev,
      address: feature.place_name,
      location: {
        latitude: latitude.toString(),
        longitude: longitude.toString()
      }
    }));
    
    setShowSuggestions(false);
    toast.success('Location successfully selected!');
  };

  const fetchAddress = async (lat, lng) => {
    try {
      const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${lng},${lat}.json?key=${MAPTILER_KEY}`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        setFormData(prev => ({
          ...prev,
          address: data.features[0].place_name
        }));
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const updateLocation = (lat, lng) => {
    setFormData(prev => ({
      ...prev,
      location: {
        latitude: lat,
        longitude: lng
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'address') {
      setHasSearched(false);
      setShowSuggestions(false);
      setSearchResults([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.address) {
      toast.error('Please enter an address');
      return;
    }

    if (!hasSearched) {
      toast.error('Please click the search button to find your location');
      return;
    }

    if (!formData.location || !formData.location.latitude || !formData.location.longitude) {
      toast.error('Please search and select a location from the suggestions');
      return;
    }

    if (!formData.title || !formData.description || !formData.category || !formData.contactInfo) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const locationData = {
        name: formData.locationName,
        fullAddress: formData.address,
        coordinates: [
          parseFloat(formData.location.longitude),
          parseFloat(formData.location.latitude)
        ]
      };

      const requestData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        location: locationData,
        urgency: formData.urgency,
        contactInfo: formData.contactInfo,
        status: 'open',
        createdBy: user?.id
      };

      const response = await axios.post('/submit-help-request', requestData);
      
      if (response.data.success) {
        toast.success('Help request created successfully!');
        navigate('/testpage');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create help request. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4">
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto pt-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Request Help</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
              placeholder="Brief title for your request"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
              placeholder="Describe what help you need"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            {loading ? (
              <div className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500">
                Loading categories...
              </div>
            ) : (
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location Details
            </label>
            <div className="mb-2">
              <p className="text-sm text-gray-500 italic">
                Beta Version Notice: For better accuracy, please provide a complete address rather than relying solely on map selection.
              </p>
            </div>
            
            <div className="mb-4">
              <input
                type="text"
                name="locationName"
                value={formData.locationName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
                placeholder="Property or Location Name (e.g., Central Library, Memorial Park)"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
                placeholder="Enter full address (e.g., 123 Main St, Los Angeles, CA 90012)"
                required
              />
              <button
                type="button"
                onClick={searchAddress}
                className="px-4 py-2 text-sm font-medium text-white bg-[#1397e9] rounded-md hover:bg-[#1397e9]/90"
              >
                Search
              </button>
            </div>

            {/* Search Results Dropdown */}
            {showSuggestions && searchResults.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
                    onClick={() => handleSelectLocation(result)}
                  >
                    <div className="font-medium text-gray-900">
                      {result.text}
                    </div>
                    <div className="text-sm text-gray-500">
                      {result.place_name}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Map Container */}
          <div 
            ref={mapContainer} 
            className="w-full h-[300px] rounded-lg border border-gray-300 mt-4"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Information
            </label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
              placeholder="How can helpers reach you?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Urgency Level
            </label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1397e9]"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-[#1397e9] rounded-md hover:bg-[#1397e9]/90"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestHelpForm; 