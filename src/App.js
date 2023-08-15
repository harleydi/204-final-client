import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { getUserToken, removeUserToken } from './Auth/AuthLocalStorage';
import { validateUser } from './Api/api';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';

function App() {
  // let storedUserCart = JSON.parse(localStorage.getItem('cart'))
  const [userToken, setUserToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [shouldRefresh, setShouldRefresh] = useState(false)
  const [userCart, setUserCart] = useState([])
  const [product, setProduct] = useState('')
  

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(userCart))
  }, [userCart])

  const handleAddToCart = (product) => {
    setUserCart([...userCart, product])
    // localStorage.setItem('cart', JSON.stringify(userCart))
  }

  console.log(localStorage.getItem('cart'))

  return (
    <div className="App">
      <Navbar 
        isVerified={isVerified} 
        user={user} 
        setShouldRefresh={setShouldRefresh}
        setIsVerified={setIsVerified}
        setUser={setUser}
        userCart={userCart}
      />
      <h1>App</h1>
      <Outlet context={{ isVerified, setIsVerified, setShouldRefresh, handleAddToCart, product, setProduct }} />
    </div>
  );
}

export default App;
