import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { getProducts } from '../Api/fakerData'

const Products = () => {
  const [allProducts, setAllProducts] = useState([])


  useEffect(() => {
    const getAll = async () => {
      const data = await getProducts()
      setAllProducts(data)
    }
    getAll()
  }, [])
  
  return (
    <div>
      Products
      <span style={{ display: 'flex', flexWrap: 'wrap'}} >
        {allProducts.length > 0 && allProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </span>
    </div>
  )
}

export default Products