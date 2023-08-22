import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { getLimitedProducts, getProducts } from '../Api/api'
import { Pagination } from '@mui/material'

const Products = () => {
  const [allProducts, setAllProducts] = useState([])
  const [limitedProducts, setLimitedProducts] = useState([])
  const [sortOption, setSortOption] = useState('Recommended')
  const [categoryOption, setCategoryOption] = useState('')
  const [page, setPage] = useState(0)


  useEffect(() => {
    const getAll = async () => {
      const data = await getProducts()
      setAllProducts(data.data)
      // console.log(data.data)
    }
    getAll()
  }, [])

  useEffect(() => {
    const getLimited = async () => {
      const data = await getLimitedProducts(page)
      setLimitedProducts(data.data)
      // console.log(data.data)
      return data.data
    }
    getLimited()
    console.log(limitedProducts)
  }, [page])

  useEffect(() => {
    const handleSort = () => {
      if (categoryOption === 'Electronics') {
         const electronics = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
         setAllProducts(electronics)
      } else if (categoryOption === 'Jewelery') {
         const jewelery = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
         setAllProducts(jewelery)
      } else if (categoryOption === "Men's clothing") {
        const mens = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
        setAllProducts(mens)
     } else if (categoryOption === "Women's clothing") {
      const womens = allProducts.filter((item) => item.category === categoryOption.toLowerCase())
      setAllProducts(womens)
   }
    }
    handleSort()
  }, [categoryOption])
  
  return (
    <div>
      Products
      <form style={{ display: 'flex', justifyContent: 'space-around'}}>
        <label>
          Sort:{" "}
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option>Recommended</option>
            <option>Lowest</option>
            <option>Highest</option>
          </select>
        </label>
        {" "}
        <label>
          Category:{" "}
          <select onChange={(e) => setCategoryOption(e.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Jewelery</option>
            <option>Men's clothing</option>
            <option>Women's clothing</option>
          </select>
        </label>
      </form>
      <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
        {limitedProducts.length > 0 && limitedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </span>
      <Pagination
        count={3}
        // page={page}
        onChange={(e) => setPage(Number(e.target.textContent) - 1)} 
        style={{ display: 'flex', justifyContent: 'center' }} 
      />
    </div>
  )
}

export default Products