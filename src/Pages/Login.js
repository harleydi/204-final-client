import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { loginUser } from '../Api/api'
import { setUserToken } from '../Auth/AuthLocalStorage'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setIsVerified, setShouldRefresh } = useOutletContext()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShouldRefresh(true)
    const data = {
        email,
        password
    }
    const loginResult = await loginUser(data)
    console.log(loginResult)
    if (loginResult) {
        setIsVerified(true)
        setUserToken(loginResult.token)
        navigate('/home')
    }
    setShouldRefresh(false)
  }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login