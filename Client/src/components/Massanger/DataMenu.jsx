import React, { useEffect, useState,useContext } from 'react'
import UserMenu from './Menu/UserMenu'
import axios from 'axios'
import { AuthContext } from '../../context/credentials'

export const DataMenu = () => {
  const {creden} = useContext(AuthContext) 
const [user, setuser] = useState([])
    async function Getdata(){
let res = await axios.get("http://localhost:3000/getuser")

setuser(res.data)

    }
    useEffect(() => {
 Getdata()
    
     
    }, [])
    
  return (
    <>
  {user.map(user => (
    user.name !==creden.name &&
  <UserMenu  key={user.id} user={user} />
))}

    
        
    </>
  )
}
