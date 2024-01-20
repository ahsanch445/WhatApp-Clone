import React, { useState } from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import styled from '@emotion/styled';

function UserFooter(data) {
  
const {sendValue,setText,Text} = data

  const AddIcon2 = styled(AddIcon)({
   
    fontSize:"3vw"
  });
  const MoodIcon2 = styled(MoodIcon)({
   
    fontSize:"2.8vw"
  });
  const KeyboardVoiceIcon2= styled(KeyboardVoiceIcon)({
   
    fontSize:"2.8vw"
  });
  return (
    <div className=' flex items-center justify-between px-4 py-2 absolute bg-[#F0F2F5] w-full bottom-0 '>
        
            <div className='flex  gap-[1.5vw]  '>
 <MoodIcon2/>
<AddIcon2/>
</div>
<div className='flex items-center gap-[2vw] w-[85%] '>
<input value={Text} onKeyPress={(e)=>sendValue(e.which)}  onChange={(e)=>{setText(e.target.value)}} className='outline-none w-full bg-[#FFFFFF] p-[0.6vw] rounded ' placeholder='Type a massage' p type="text" />
<KeyboardVoiceIcon2/>
 </div>
    </div>
  )
}

export default UserFooter
