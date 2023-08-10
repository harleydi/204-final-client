import axios from "axios";
import { json } from "react-router-dom";
const baseURL = process.env.FAKER_URL

const getProducts = async () => {
    try {
        const response = await fetch(`http://fakestoreapi.com/products`) // Should I hide this in env?
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        return error
    }
}


const getOneProduct = async () => {
    try {
        const products = await fetch(`${baseURL}/products/1`)
        const data = products.json()
        console.log(data)
    } catch (error) {
        return error
    }
}



export {
    getProducts,
    getOneProduct
}