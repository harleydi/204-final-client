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

export {
    registerUser
}