import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import MobileMenu from '../components/mobileMenu'

function Layout() {
  return (
    <div className="flex md:flex-col lg:flex-row">
      <div className="hidden md:block lg:w-3/12 lg:h-screen ">
        <Sidebar />
      </div>
      <div className="w-full bg-hero bg-no-repeat  bg-cover lg:min-h-screen min-w-[450px] lg:w-9/12">
        <div className='block text-white lg:hidden '>
          <MobileMenu/>
        </div>
        <Feed />
      </div>
    </div>
  );
}

export default Layout
