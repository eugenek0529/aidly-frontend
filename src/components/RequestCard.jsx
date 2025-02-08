import LocationIcon from './shared/LocationIcon';
import MapLink from './shared/MapLink';

function RequestCard({ request }) {
  console.log('Request data received:', request); // Debug log
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {request.title}
          </h3>
          
          <div className="flex items-center mb-2">
            <span className={`
              inline-block px-1.5 py-0.5 text-[10px] font-medium rounded-full
              ${request.urgency === 'critical' ? 'bg-red-100 text-red-800' :
                request.urgency === 'high' ? 'bg-orange-100 text-orange-800' :
                request.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'}
            `}>
              {request.urgency?.charAt(0).toUpperCase() + request.urgency?.slice(1) || 'Medium'}
            </span>

            <div className="mx-2 h-3 w-px bg-gray-300" />

            <span className={`
              inline-block px-1.5 py-0.5 text-[10px] font-medium rounded-full
              ${request.status === 'open' ? 'bg-green-100 text-green-800' :
                request.status === 'fulfilled' ? 'bg-gray-100 text-gray-800' :
                'bg-red-100 text-red-800'}
            `}>
              {request.status?.charAt(0).toUpperCase() + request.status?.slice(1) || 'Open'}
            </span>

            <div className="mx-2 h-3 w-px bg-gray-300" />

            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {request.category?.name}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3">
            {request.description?.length > 150
              ? `${request.description.substring(0, 150)}...` 
              : request.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <LocationIcon />
              <span>{request.location?.fullAddress}</span>
            </div>
            
            
          </div>
        </div>

        <MapLink href={request.location?.googleMapsLink} />
      </div>
    </div>
  );
}

export default RequestCard; 