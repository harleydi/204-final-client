import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { removeUserToken } from '../Auth/AuthLocalStorage'

const Navbar = ({ isVerified, setShouldRefresh, user, setIsVerified, setUser, userCart }) => {
  const handleLogout = async () => {
    setShouldRefresh(true)
    const resultLogout = removeUserToken()
    if (resultLogout) {
      setIsVerified(false)
      setUser(null)
      setShouldRefresh(false)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Link>Home</Link>
      {isVerified ? (
        <div className='client-nav'>
          <Link to={"/home/profile"}>{user}</Link>
          {" "}
          <Link to={"/cart"}>Cart({userCart.length})</Link>
          {" "}
          <Link onClick={handleLogout}>Logout</Link>
        </div>
      ) : (
        <div className='client-nav'>
            <Link to={"/register"}>Register</Link>
            {" "}
            <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar