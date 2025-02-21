function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero pt-36 bg-layout-hero">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="slogan flex flex-col items-center py-20 max-w-[84%]">
            <h1 className="text-5xl font-black text-primary mb-6 text-center">
              Your Go-To Hub Community for Finding Help and Volunteering
            </h1>
            <p className="text-xl text-secondary max-w-2xl text-center mb-16">
              Connect with those in need during critical disaster events.
              This website serves as a hub to discover available help and volunteer opportunities in your area. 
              Get involved by volunteering or organizing new volunteer activities to support the community.
              You can also post ongoing help activities to notify others.
            </p>

            {/* Added Icon Section with border */}
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">Connect</h3>
                  <p className="text-secondary">
                    Join our community of helpers and those in need
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">Post</h3>
                  <p className="text-secondary">
                    Create or respond to help requests in your area
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">Help</h3>
                  <p className="text-secondary">
                    Make a real difference in your community
                  </p>
                </div>

                {/* New Report Icon */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">Report</h3>
                  <p className="text-secondary">
                    Share locations where help is available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="main flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-layout-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8 text-text-footer">
              <div>
                <span className="font-semibold">Los Angeles: </span>
                <span>{new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' })}</span>
              </div>
              <div>
                <span className="font-semibold">New York: </span>
                <span>{new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</span>
              </div>
            </div>
            <p className="text-center text-footer">
              © 2024 Aidly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home 