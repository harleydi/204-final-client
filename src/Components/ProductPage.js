import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductPage = () => {
  const { product, handleAddToCart } = useOutletContext()

  return (
    <div>
        <img src={product.image} style={{ height: '20rem'}} />
        <p>${product.price}</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductPage