import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/users/register`, userData)
        const data = await response.data
        console.log(data)
    } catch (error) {
        return error.response.data
    }
}

const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/users/login`, userData)
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const validateUser = async (userToken) => {
    try {
        const response = await axios.get(`${baseURL}/users/validate`, {
            headers: {
                "Authorization": `Bearer ${userToken}`
            }
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

const createOrder = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/orders/add-order`, userData)
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const getProducts = async () => {
    try {
        const response = await axios.get(`${baseURL}/inventory/all`)
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const getLimitedProducts = async (page) => {
    try {
        const response = await axios.get(`${baseURL}/inventory/all/limit?page=${page}`)
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const getOrders = async (userId) => {
    try {
        const response = await axios.get(`${baseURL}/orders/by-user`)
        const data = await response.data
        return data.data
    } catch (error) {
        return error.response.data
    }
}

export {
    registerUser,
    loginUser,
    validateUser,
    createOrder,
    getProducts,
    getLimitedProducts,
    getOrders
}