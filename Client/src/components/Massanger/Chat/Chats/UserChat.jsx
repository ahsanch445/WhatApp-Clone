import React, { useEffect, useState } from 'react'
import UserNav from './UserNav'
import UserFooter from './UserFooter'
import UserMassage from "./UserMassage"
import { AuthContext } from '../../../../context/credentials'
import { useContext } from 'react'
import { SaveMassage } from './SaveMassage'
import axios from 'axios'
const UserChat =  ({Massage}) => {
console.log(Massage)

const dataId = Massage?.data?._id;
const {creden,User} = useContext(AuthContext)
const [Text,setText] = useState()
const [UserText, setUserText] = useState([])

 useEffect(() => {
  const fetchMessages = async () => {
   
      try {
       
        const res = await axios.get(`http://localhost:3000/Get/Massage/${dataId}`);
        setUserText(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }
  

    dataId && fetchMessages();
}, [User.name,dataId]);



 
  const sendValue = async (event) => {
    console.log('Key pressed:', event)
    if(event ==13){
let massage = {
  sender:creden.name,
  reciver:User.name,
  Converstion:dataId ,
type:"text",
text:Text,


}

await SaveMassage(massage)
setText("")


    }
   

  }
 
  return (
    <div>
      <UserNav/>
  <div >
   
    {
      UserText&&UserText.map((massage)=>(
<UserMassage UserText={UserText} massage={massage} />
      ))
    }

    
  </div>
      <UserFooter sendValue={sendValue}  setText={setText} Text={Text} />
     
    </div>
  )
}

export default UserChat
