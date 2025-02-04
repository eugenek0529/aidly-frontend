import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ListSection({ activeView }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/posts/${activeView === 'find' ? 'get-all-help-offers' : 'get-all-help-offers'}`);
        setPosts(response.data.posts);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeView]);

  if (loading) return <div className="flex justify-center items-center h-[calc(100vh-300px)]"><div className="text-gray-500">Loading posts...</div></div>;
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>;
  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-300px)]">
        <p className="text-gray-500">
          {activeView === 'find' 
            ? 'No help requests available at the moment.' 
            : 'No help offers available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-300px)] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {posts.map((post) => (
        <div 
          key={post._id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-gray-900 mb-1">{post.title}</h3>
              
              <div className="flex items-center mb-2">
                <span className={`
                  inline-block px-1.5 py-0.5 text-[10px] font-medium rounded-full
                  ${post.status === 'active' ? 'bg-green-100 text-green-800' : 
                    post.status === 'completed' ? 'bg-gray-100 text-gray-800' : 
                    'bg-red-100 text-red-800'}
                `}>
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </span>

                <div className="mx-2 h-3 w-px bg-gray-300" />

                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {post.category.name}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-3">
                {post.description.length > 150 
                  ? `${post.description.substring(0, 150)}...` 
                  : post.description}
              </p>

              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{post.location.fullAddress}</span>
              </div>
            </div>

            <a 
              href={post.location.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors group"
              title="Open in Google Maps"
            >
              <svg 
                className="w-8 h-8 text-gray-600 group-hover:text-gray-800" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListSection;