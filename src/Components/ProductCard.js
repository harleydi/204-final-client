import React, { useState } from 'react'
import { getOneProduct, getProducts } from '../Api/fakerData'

const ProductCard = ({ product }) => {
    
  return (
    <div className='product-card' style={{ border: "2px solid black", width: "20rem", height: "20rem", margin: '2rem' }}>
        <img src={product.image} height={'65rem'} width={'65rem'} />
        <h1>{product.title}</h1>
        <p>{product.category}</p> 
        <h3>{product.price}</h3>
        <button>Add to cart</button>
    </div>
  )
}

export default ProductCard