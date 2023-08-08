import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Link>Home</Link>
        <div className='client-nav'>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar