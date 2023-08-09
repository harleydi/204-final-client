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
        const response = axios.get(`${baseURL}/users/validate`, {
            headers: {
                "Authorization": `Bearer ${userToken}`
            }
        })
        return (await response).data
    } catch (error) {
        return error.response.data
    }
}

export {
    registerUser,
    loginUser,
    validateUser
}