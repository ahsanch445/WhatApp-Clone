import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);


const CredentialsProvider = ({ children }) => {
    const [creden, setcreden] = useState()
    const [User, setUser] = useState({})
  
  return (
 
      <AuthContext.Provider value={{creden,setcreden,User, setUser}}>

{children}
      </AuthContext.Provider>
 
  )
  
}

export default  CredentialsProvider


