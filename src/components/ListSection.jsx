import React from 'react';

function ListSection({ activeView }) {
  return (
    <div className="space-y-4">
      {activeView === 'find' ? (
        <div>
          {/* Find Help content will go here */}
          <p>Find Help Content Coming Soon</p>
        </div>
      ) : (
        <div>
          {/* Give Help content will go here */}
          <p>Give Help Content Coming Soon</p>
        </div>
      )}
    </div>
  );
}

export default ListSection;