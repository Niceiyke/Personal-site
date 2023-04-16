import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
function Layout() {
  return (
    <div className="flex">
      <div className="h-screen w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 bg-hero  bg-no-repeat  bg-cover min-h-screen">
        <Feed />
      </div>
    </div>
  );
}

export default Layout
