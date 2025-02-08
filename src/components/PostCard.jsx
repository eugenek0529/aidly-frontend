import LocationIcon from './shared/LocationIcon';
import MapLink from './shared/MapLink';

function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {post.title}
          </h3>
          
          <div className="flex items-center mb-2">
            <span className={`
              inline-block px-1.5 py-0.5 text-[10px] font-medium rounded-full
              ${post.status === 'active' ? 'bg-green-100 text-green-800' : 
                post.status === 'completed' ? 'bg-gray-100 text-gray-800' : 
                'bg-red-100 text-red-800'}
            `}>
              {post.status?.charAt(0).toUpperCase() + post.status?.slice(1) || 'Active'}
            </span>

            <div className="mx-2 h-3 w-px bg-gray-300" />

            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {post.category?.name}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3">
            {post.description?.length > 150 
              ? `${post.description.substring(0, 150)}...` 
              : post.description}
          </p>

          <div className="flex items-center text-sm text-gray-500">
            <LocationIcon />
            <span>{post.location?.fullAddress}</span>
          </div>
        </div>

        <MapLink href={post.location?.googleMapsLink} />
      </div>
    </div>
  );
}

export default PostCard; 