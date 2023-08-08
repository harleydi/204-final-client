import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label>
                Email:
                <input />
            </label>
            <label>
                Password:
                <input />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login