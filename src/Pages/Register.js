import axios from 'axios'
import React, { useState } from 'react'
import { registerUser } from '../Api/api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
      e.preventDefault()
      const data = {
        firstName,
        lastName,
        email,
        password
      }
      const registerResult = await registerUser(data)
      console.log(registerResult)
  }
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                <input value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register