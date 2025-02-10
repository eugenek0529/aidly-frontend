
function MapLink({ href }) {
  return (
    <a 
      href={href}
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
  );
}

export default MapLink; 