import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../context/credentials'
import VideocamIcon from '@mui/icons-material/Videocam';
import Search from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const UserNav = () => {
    const {User} = useContext(AuthContext)
  
  return (
    <>
   
    
    <div className='px-2 flex justify-between items-center w-full h-16 bg-[#F0F2F5]'>
     
     <div className='flex  items-center gap-[1.5vw] '>
        <img src={User.picture} className='rounded-full h-[4.5vw] w-[4.5vw] object-cover align-middle'  alt="" />
        <p className='mt-[1.4vw] text-[2vw] tracking-tight'>{User.name}</p>
     </div>
     <div className='flex items-center justify-center gap-[3vw]'>
        <VideocamIcon/>
<Search/>
<div >
<div className=" dropdown-menu-lg-start">
  <div className=" " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='cursor-pointer'><MoreVertIcon/></div>
    
  </div>
  <ul className=" mt-4  px-4 dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
    <li  >
        <a className="text-[#0c0c0c]  cursor-pointer no-underline fw-medium"  >Profile</a></li>
    <li className='mt-2'><a className="text-[#0c0c0c] cursor-pointer no-underline fw-medium" href="#">Chat</a></li>
    <li className='mt-2'><a className="text-[#0c0c0c] cursor-pointer no-underline fw-medium" href="#">Logout</a></li>
  </ul>
</div>
</div>

     </div>
     </div>
   
    </>
  )
}

export default UserNav
