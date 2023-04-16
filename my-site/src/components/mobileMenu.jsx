import React, { useState } from 'react'
import NavBarLinks from './navBarLinks'
import MenuIcon from '@mui/icons-material/Menu';

function MobileMenu() {
    const[toggled,setToggled]=useState(false)
  return (
    <div className='md:hidden'>
        <button onClick={()=>setToggled(!toggled)} className='text-white'><MenuIcon/></button>
        {toggled && <div className=' w-4/12 absolute bg-gray-400 '>
        <NavBarLinks/>
        </div>}
        
    </div>
  )
}

export default MobileMenu