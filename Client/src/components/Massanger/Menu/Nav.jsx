import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { useContext } from 'react';
import { AuthContext } from '../../../context/credentials';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Nav = () => {

const [showOffcanvas, setShowOffcanvas] = useState(false);

const toggleOffcanvas = () => {
  setShowOffcanvas(!showOffcanvas);
};
const openDrawer=()=>{
    setShowOffcanvas(true)
}

    const {creden} = useContext(AuthContext)
  return (
    <>
  
      <nav   className=' px-2 flex gap-[13vw] items-center w-full h-16 bg-[#F0F2F5] '>

  <img  onClick={openDrawer} className=' cursor-pointer h-9 w-9 rounded-full' src={creden.picture} alt="dp" />
<div className='flex items-center gap-[4vw]'>
<div className='cursor-pointer'> <ChatIcon/></div>
 


<div className='cursor-pointer'><HistoryToggleOffIcon/></div>

<div className=" dropdown-menu-lg-start">
  <div className=" " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='cursor-pointer'><MoreVertIcon/></div>
    
  </div>
  <ul className=" mt-4  px-4 dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
    <li onClick={openDrawer} >
        <a className="text-[#0c0c0c]  cursor-pointer no-underline fw-medium"  >Profile</a></li>
    <li className='mt-2'><a className="text-[#0c0c0c] cursor-pointer no-underline fw-medium" href="#">Chat</a></li>
    <li className='mt-2'><a className="text-[#0c0c0c] cursor-pointer no-underline fw-medium" href="#">Logout</a></li>
  </ul>
</div>
</div>


</nav>
<div id='profile'>

 <div className=" w-full flex overflow-hidden bg-gray-100">
     
      <div className={`fixed inset-y-0 left-0 w-[33%] bg-[#fffefe] shadow-xl z-30 transform transition-transform duration-300 ease-in-out ${showOffcanvas ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-full h-28 rounded-sm bg-[#008069] flex items-center gap-7  px-7">
        <button onClick={toggleOffcanvas} className="text-white mt-[5vw]  focus:outline-none">
        <div className='cursor-pointer'>   <ArrowBackIcon/></div>
          </button>
          <span className="text-white mt-[5vw] text-lg font-bold block">Profile</span>
          
        </div>
        <div className='bg-[#F0F2F5] flex items-center justify-center h-1/3'>
            <img className='h-36 w-36 rounded-full' src={creden.picture} alt="" />
        </div>
        
        <div className='bg-white text-sm w-full px-6 py-3' >
            <p className='text-[#008069]'>Your name</p>
            <p className='text-lg'>{creden.name}</p>
        </div>
        <div  className='bg-[#F0F2F5] px-6 py-3 text-[1.4vw] ' >This is not your username or pinn.This name will visible to your whatapp connect</div>
        <div className='bg-white text-sm w-full px-6 py-3' >
            <p className='text-[#008069]'>Email</p>
            <p className='text-sm'>{creden.email}</p>
        </div>
      </div>

    
      
    </div>




</div>
    </>
  )
}

export default Nav
