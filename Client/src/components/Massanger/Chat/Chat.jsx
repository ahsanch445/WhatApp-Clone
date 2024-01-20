import React, { useContext, useEffect, useState } from 'react'
import UserChat from './Chats/UserChat'


import axios from 'axios'
import { AuthContext } from '../../../context/credentials'



const Chat = () => {
  const {creden,User} = useContext(AuthContext)
  const [Massage, setMassage] = useState({})
  useEffect(() => {
    async function fetchData() {
      try {
        const data = { sender: creden.name, reciver: User.name };
        const response = await axios.post("http://localhost:3000/Converstion/Massage", data);
        setMassage(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  
  }, [User.name]);
  console.log(Massage)
  return (
    <div className=' relative w-full h-full'>
<UserChat Massage={Massage} />   
    </div>
  )
}

export default Chat
