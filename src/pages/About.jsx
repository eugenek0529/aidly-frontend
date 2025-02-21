import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Aidly
          </h1>
          <p className="text-xl text-gray-600">
            Connecting communities during critical times
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Aidly was created with a simple yet powerful mission: to bridge the gap between those who need help and those who can provide it during disasters and emergencies. We believe in the power of community and technology to make a real difference in people's lives.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600">
                Join our community of helpers and those in need
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Post</h3>
              <p className="text-gray-600">
                Create or respond to help requests in your area
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Help</h3>
              <p className="text-gray-600">
                Make a real difference in your community
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Report</h3>
              <p className="text-gray-600">
                Share locations where help is available
              </p>
            </div>
          </div>

          {/* Explanatory paragraphs */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              In America, there are always people who want to volunteer or contribute what they have to support disaster relief efforts, but there is no straightforward way to do so. Aidly serves as a central hub where individuals can easily find or offer help within their community. Whether it's providing essential supplies, offering shelter, or volunteering time, Aidly connects those in need with those willing to make a difference—quickly and efficiently.
            </p>
            <p>
              When you're in urgent need of help, searching all over the internet just to find food, shelter, or supplies can be overwhelming. Aidly simplifies this process by bringing everything into one place, so you can quickly find the assistance you need, when you need it most.
            </p>
            <p>
              See help happening in your area? Report it! By sharing the location of ongoing assistance efforts, you help others find the support they need. Together, we can create a more connected and responsive community during times of crisis.
            </p>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gray-900 text-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="mb-6 text-gray-300">
            Join our community today and start helping those in need.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About; 