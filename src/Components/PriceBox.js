import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'


const PriceBox = ({ userCart }) => {
  const [subTotal, setSubTotal] = useState(0)



  const navigate = useNavigate()

  useEffect(() => {
      const getTotal = userCart.reduce((acc, curr) => {
        curr = curr.price
        return acc + curr
      }, 0)
      setSubTotal(getTotal)

  }, [userCart])

  const handleCheckout = () => {
    navigate('/home/checkout')
  }
  

  return (
    <div style={{ border: '2px solid black', marginBottom: '2rem', padding: '2rem'}}>
        <h1>Your Total is: ${subTotal}</h1>
        <h6>You have {userCart.length} items in this cart</h6>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  )
}

export default PriceBox