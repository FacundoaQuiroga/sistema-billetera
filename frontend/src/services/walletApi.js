
const API_URL = 'http://localhost:8080/api'

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Error logging in')
  }

  return data
}

export async function register(fullName, email, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not register user.')
  }

  return data
}

export async function getMyWallet(token) {
  const response = await fetch(`${API_URL}/me/wallet`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error loading wallet')
  }

  return response.json()
}

export async function getMyTransactions(token) {
  const response = await fetch(`${API_URL}/me/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error loading transactions')
  }

  return response.json()
}

export async function depositToMyWallet(token, amount) {
  const response = await fetch(`${API_URL}/me/deposit`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Error depositing money')
  }

  return data
}

export async function transferFromMyWallet(token, receiverWalletId, amount) {
  const response = await fetch(`${API_URL}/me/transfer`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ receiverWalletId, amount }),
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.message || 'Error transferring money')
  }
}