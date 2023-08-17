import React from 'react'
import { useOutletContext } from 'react-router-dom'

const CartCard = ({ product }) => {
  const { setUserCart } = useOutletContext()

  const handleRemoveFromCart = () => {
    const products = JSON.parse(localStorage.getItem('cart'))
    const findItem = products.filter((item) => product.id !== item.id)
    // localStorage.removeItem('cart')
    // localStorage.setItem('cart', JSON.stringify(findItem))
    setUserCart(findItem)
    console.log(findItem)
  }


  return (
    <div style={{ border: '2px solid black', width: '60rem'}}>
        <img style={{ height: '10rem'}} src={product.image} />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  )
}

export default CartCard