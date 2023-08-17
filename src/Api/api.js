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


export {
    registerUser,
    loginUser,
    validateUser,
    createOrder
}