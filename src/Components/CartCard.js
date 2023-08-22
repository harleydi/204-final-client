import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const CartCard = ({ product, subTotal, setSubTotal }) => {
  const [quantity, setQuantity] = useState(1)
  

  const { setUserCart } = useOutletContext()

  const handleRemoveFromCart = () => {
    const products = JSON.parse(localStorage.getItem('cart'))
    const findItem = products.filter((item) => product.id !== item.id)
    // localStorage.removeItem('cart')
    // localStorage.setItem('cart', JSON.stringify(findItem))
    setUserCart(findItem)
    console.log(findItem)
  }

  const incrementQuantity = () => {
    setQuantity(quantity+1)
    setSubTotal(Math.round(subTotal + product.price))
  }

  const decrementQuantity = () => {
    setQuantity(quantity-1)
    setSubTotal(Math.abs(subTotal - product.price))
  }

  return (
    <div style={{ border: '2px solid black', width: '60rem'}}>
        <img style={{ height: '10rem'}} src={product.image} />
        <h1>{product.title}</h1>
        <p>{product.price * quantity}</p>
        <p>{quantity}</p>
        <button onClick={incrementQuantity}>+</button>
        <button onClick={decrementQuantity}>-</button>
        <br/>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  )
}

export default CartCard