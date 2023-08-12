import React, { useState } from 'react'
import { getOneProduct, getProducts } from '../Api/fakerData'
import { useOutletContext } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { setUserCart, userCart } = useOutletContext()

  const handleAddToCart = (product) => {
    setUserCart([...userCart, product])
    // localStorage.setItem('cart', JSON.stringify(userCart))
  }
  
  return (
    <div className='product-card' style={{ border: "2px solid black", width: "20rem", height: "20rem", margin: '2rem' }}>
        <img src={product.image} height={'65rem'} width={'65rem'} />
        <h2>{product.title}</h2>
        <p>{product.category}</p> 
        <h3>{product.price}</h3>
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard