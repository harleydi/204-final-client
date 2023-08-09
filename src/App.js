import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { getUserToken, removeUserToken } from './Auth/AuthLocalStorage';
import { validateUser } from './Api/api';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [userToken, setUserToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [shouldRefresh, setShouldRefresh] = useState(false)
  
  useEffect(() => {
    const token = getUserToken()
    setUserToken(token)
  }, [shouldRefresh])

  useEffect(() => {
    const verifyUser = async () => {
      if (userToken) {
        const verifyResult = await validateUser(userToken)
        if (verifyResult.success) {
          console.log(verifyResult)
          setUser(verifyResult.email)
          setIsVerified(true)
        } else {
          setShouldRefresh(true)
          const resultLogout = await removeUserToken()
          if (resultLogout) {
            setIsVerified(false)
            setUser(null)
            setShouldRefresh(false)
          }
        }
      }
    }
    verifyUser()
  }, [userToken])

  return (
    <div className="App">
      <Navbar 
        isVerified={isVerified} 
        user={user} 
        setShouldRefresh={setShouldRefresh}
        setIsVerified={setIsVerified}
        setUser={setUser}
      />
      <h1>App</h1>
      <Outlet context={{ isVerified, setIsVerified, setShouldRefresh }} />
    </div>
  );
}

export default App;
