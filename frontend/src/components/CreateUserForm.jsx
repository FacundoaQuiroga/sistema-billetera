import { useState } from 'react'

function CreateUserForm({ onCreateUser }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!fullName || !email || !password) {
      return
    }

    onCreateUser(fullName, email, password)

    setFullName('')
    setEmail('')
    setPassword('')
  }

  return (
    <form className="action-form" onSubmit={handleSubmit}>
      <h2>Create user</h2>

      <label>
        <span>Full name</span>
        <input
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </label>

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

      <button type="submit">Create user</button>
    </form>
  )
}

export default CreateUserForm