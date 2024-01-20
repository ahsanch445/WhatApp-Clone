import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';
import { AuthContext } from '../../../context/credentials';
import { useContext } from 'react';
import axios from 'axios';

const UserMenu = ({user}) => {
  const {setUser,creden} = useContext(AuthContext)


 
const UserData= async()=>{

  setUser(user)
 var CoverstionData = {sender:user.name,recive:creden.name}
 var res = await axios.post("http://localhost:3000/addConverstion",CoverstionData)
console.log(res)
}


const GreenCheckIcon = styled(CheckIcon)({
  color: '#96948d', 
  fontSize:"2vw"
});

  return (
    <div onClick={UserData}>
<div id='main' className=' w-full  '>
    <div id='User-Profile' className=' cursor-pointer flex items-center justify-between bg-white w-full px-[1vw] py-[0.5vw]'>
<div className='flex gap-[1vw]'>
  <div></div>
  <img className='rounded-full object-cover h-[5vw] w-[5vw]  ' src={user.picture} alt="" />
  <div>
    <h5 style={{lineHeight:"1"}} className='mt-[1.2vw] fw-normal'>{user.name} </h5>
  <p className='flex items-center gap-[0.5vw]' style={{lineHeight:"1",fontSize:"1.3vw"}}> <GreenCheckIcon/> ok janab hgdht dhh</p>
  </div>
</div> 
<div>
  <p className=' opacity-80 text-xs font-semibold'>7:59 PM</p>
  </div>
    </div>
    
   

</div>

    </div>
  
  )
}

export default UserMenu
