import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PostCard from './PostCard';
import RequestCard from './RequestCard';

function ListSection({ activeView }) {
  const [posts, setPosts] = useState([]);
  const [helpRequests, setHelpRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        if (activeView === 'find') {
          const response = await axios.get('/posts/get-all-help-offers');
          //console.log('Help offers response:', response.data);
          setPosts(response.data.posts || []);
          setHelpRequests([]);
        } else {
          const requestResponse = await axios.get('/help-requests/get-all-help-requests');
          console.log('Help requests response:', requestResponse.data);
          console.log('Current activeView:', activeView);
          console.log('Setting helpRequests to:', requestResponse.data.helpRequests || []);
          setHelpRequests(requestResponse.data.requests || []);
          setPosts([]);
        }
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
        setPosts([]);
        setHelpRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeView]);

  if (loading) return <div className="flex justify-center items-center h-[calc(100vh-300px)]"><div className="text-gray-500">Loading posts...</div></div>;
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>;
  

  
  const currentItems = activeView === 'find' ? posts : helpRequests;

  if (currentItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-300px)]">
        <p className="text-gray-500">
          {activeView === 'find' 
            ? 'No help offers available at the moment.' 
            : 'No help requests available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-300px)] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {activeView === 'find' ? (
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      ) : (
        helpRequests.map((request) => (
          <RequestCard key={request._id} request={request} />
        ))
      )}
    </div>
  );
}

export default ListSection;