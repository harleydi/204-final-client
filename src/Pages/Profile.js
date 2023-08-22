import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import OrderCard from '../Components/OrderCard'

const Profile = () => {
  const { userOrders, userInfo, orders, setUserOrders } = useOutletContext()

//   useEffect(() => {
//     const getUserOrders = orders.filter((order) => order.orderOwner === userInfo._id)
//     setUserOrders(getUserOrders)
//   }, [])
  
  return (
    <div>
        <h1>{userInfo.firstName}'s Orders</h1>
        {userOrders.length > 0 && userOrders.map((order) => <OrderCard key={order.id} order={order} />)}
    </div>
  )
}

export default Profile