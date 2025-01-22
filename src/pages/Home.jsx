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
            <p className="text-xl text-secondary max-w-2xl text-center">
              Connect with those in need during critical disaster events.
              This website serves as a hub to discover available help and volunteer opportunities in your area. 
              Get involved by volunteering or organizing new volunteer activities to support the community.
              You can also post ongoing help activities to notify others.
            </p>
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