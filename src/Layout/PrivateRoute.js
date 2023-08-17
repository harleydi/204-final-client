import React from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'

const PrivateRoute = () => {
  const { isVerified, userCart } = useOutletContext()
  const navigate = useNavigate()

  const handleNavigateToLogin = () => {
    navigate('/login')
  }

  return (
    <div>
        {/* <h1>Private Route</h1> */}
        {!isVerified && 
          <div>
            <h1>Please login to continue</h1>
            <button onClick={handleNavigateToLogin}>Login</button>
          </div>
        }
        {isVerified && <Outlet context={{ userCart }} />}
    </div>
  )
}

export default PrivateRoute