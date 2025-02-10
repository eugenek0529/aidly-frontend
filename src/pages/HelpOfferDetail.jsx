import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LocationIcon from '../components/shared/LocationIcon';
import MapLink from '../components/shared/MapLink';

function HelpOfferDetail() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setPost(response.data.post);
      } catch (err) {
        setError('Failed to load help offer details');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="text-gray-500">Loading...</div></div>;
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>;
  if (!post) return <div className="text-gray-500">Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
            <div className="flex items-center gap-3">
              <span className={`
                inline-block px-2 py-1 text-sm font-medium rounded-full
                ${post.status === 'active' ? 'bg-green-100 text-green-800' : 
                  post.status === 'completed' ? 'bg-gray-100 text-gray-800' : 
                  'bg-red-100 text-red-800'}
              `}>
                {post.status?.charAt(0).toUpperCase() + post.status?.slice(1)}
              </span>
              <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {post.category?.name}
              </span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{post.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <LocationIcon />
                <span>{post.location?.fullAddress}</span>
              </div>
              <MapLink href={post.location?.googleMapsLink} />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{post.contactInfo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpOfferDetail; 