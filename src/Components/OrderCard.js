import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { useOutletContext } from 'react-router-dom'


const OrderCard = ({ order }) => {
  const orderItems = order.orderItems.map((item) => item.image)
  console.log(orderItems)
  return (
    <div style={{ border: '2px solid black '}}>
        <h1>{order.orderStatus}</h1>
        <span>
            {orderItems.map((item) => <img src={item} style={{ height: '5rem', width: '5rem' }} />)}
            <h1>{order.orderTotal}</h1>
            <p>orderDock</p>
        </span>
    </div>
  )
}

export default OrderCard