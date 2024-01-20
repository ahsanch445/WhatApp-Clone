import axios from 'axios'
import React from 'react'

export const SaveMassage = async (data) => {
    console.log(data)
   let res =  await axios.post("http://localhost:3000/Save/Massage",data)
   console.log(res)
  
  return (
    <div></div>
  )
}

