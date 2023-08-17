import React from 'react'
import { useOutletContext } from 'react-router-dom'
import CartCard from '../Components/CartCard'
import PriceBox from '../Components/PriceBox'

const Cart = () => {
  const { userCart } = useOutletContext()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Cart</h1>
      <PriceBox userCart={userCart} />
      {userCart.length && userCart.map((product) => <CartCard key={product.id} product={product} />)} 
    </div>
  )
}

export default Cart