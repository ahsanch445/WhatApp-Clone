import React, { useContext, useState,useEffect } from 'react';
import { AuthContext } from '../../../../context/credentials';

const UserMassage = ({massage}) => {
  const { creden } = useContext(AuthContext);
  const [timestamp, setTimestamp] = useState(null);



  // Update the time string when the component mounts or when message.timestamp changes
  useEffect(() => {
    // Update the time string when the component mounts or when message.timestamp changes
    if (massage.timestamp) {
      const date = new Date(massage.timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const timestamp = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      setTimestamp(timestamp)
    }
  }, [massage.timestamp]);
  return (
  <>
<div className='mx-[3vw]'>


      {
        creden.name === massage.sender ? (

          <div className='  d-flex  w-[70%] ml-auto'>
        
          <div style={{wordBreak:"break-word"}}   className={` d-flex gap-[1vw] ml-auto  text-[1.5vw] w-fit bg-[#D9FDD3] px-[1vw] py-[0.6vw] mt-[0.9vw] rounded`}>
            {massage.text}
            {timestamp && (
                <div className=' min-w-fit text-[1.03vw]   text-end' style={{ wordBreak:"keep-all", color: '#555', alignSelf: 'flex-end', marginTop:"1.4vw"}}>
                  {timestamp}
                </div>
              )}
          </div>
        
          </div>
   
        ):
        <div className='w-[70%] '>
        <div style={{wordBreak:"break-word"}}   className={`  d-flex gap-[1vw] text-[1.5vw] w-fit  bg-[#ffffff]  mt-[0.7vw] px-[1vw] py-[0.6vw] rounded`}>
        {massage.text}
        {timestamp && (
                <div className=' min-w-fit text-[1.03vw]  text-end' style={{ wordBreak:"keep-all",  color: '#555', alignSelf: 'flex-end', marginTop:"1.4vw"}}>
                  {timestamp}
                </div>
              )}
      </div>
      </div>
      }
    </div>
   </>
  );
};

export default UserMassage;
