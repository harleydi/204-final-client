import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useOutletContext } from 'react-router-dom'

const PrivateRoute = () => {
  const { isVerified } = useOutletContext()

  return (
    <div>
        {/* <h1>Private Route</h1> */}
        {isVerified && <Outlet />}
    </div>
  )
}

export default PrivateRoute