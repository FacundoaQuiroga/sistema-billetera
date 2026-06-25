import { useState } from 'react'

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!email || !password) {
      return
    }

    onLogin(email, password)
  }

  return (
    <form className="action-form auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm