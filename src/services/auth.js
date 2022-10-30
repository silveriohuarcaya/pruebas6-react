export async function login(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/local/login`, options);
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
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/local/register`, options);
  return response.json();
}

export async function sendEmail(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      email: auth.receipt_email,
      url: auth.charges.data[0].receipt_url,
    }),
  };
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payments/sendEmail`, options);
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
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/user/`, options);
  return response.json();
}

export async function verify(token) {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/local/verify-account/${token}`);
  return response.json();
}

export async function active(token) {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/local/verify-email/${token}`);
  return response.json();
}
