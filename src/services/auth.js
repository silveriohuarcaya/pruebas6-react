const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

export async function login(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${BASE_URL}/auth/local/login`, options);
  return response.json();
}

export async function register(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
<<<<<<< HEAD
  const response = await fetch(`${BASE_URL}/auth/local/register`, options);
=======
  const response = await fetch(`${BASE_URL}/api/users`, options);
>>>>>>> 323cf7c (feat: register)
  return response.json();
}

export async function signup(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${BASE_URL}/api/user/`, options);
  return response.json();
}

export async function verify(token) {
  const response = await fetch(`${BASE_URL}/auth/local/verify-account/${token}`);
  return response.json();
}

export async function active(token) {
  const response = await fetch(`${BASE_URL}/auth/local/verify-email/${token}`);
  return response.json();
}
