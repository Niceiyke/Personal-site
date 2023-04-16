import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from '../components/mobileMenu'

function Layout() {
    const [toggled, setToggled] = useState(false);
  return (
    <div className="flex ">
      <div className="hidden lg:block lg:w-3/12 ">
        <Sidebar />
      </div>
      <div className="min-w-full md:min-w-[780px] bg-hero bg-no-repeat bg-cover lg:w-9/12 relative">
        <button
          onClick={() => setToggled(!toggled)}
          className="text-white mt-10 mr-10 right-4 absolute lg:hidden"
        >
          <MenuIcon fontSize='large' />
        </button>
        {toggled && (
          <div className="left-0 text-white lg:hidden ">
            <MobileMenu />
          </div>
        )}
        <Feed />
      </div>
    </div>
  );
}

export default Layout
