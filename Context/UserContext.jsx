import { createContext, useEffect, useState } from "react";

export  const userContext =  createContext()



export default function UserContextProvider(props) {

  
  const [userToken, setUserToken] = useState(null)
  useEffect(() => {
    
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }
    return () => {
      
    }
  }, [])
  
  return (
    <userContext.Provider value={ {userToken , setUserToken} } >
      {props.children}
    </userContext.Provider>
  )
}
