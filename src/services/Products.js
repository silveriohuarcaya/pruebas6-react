export async function getProducts() {
  const products = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/`);

  if (products) {
    return products.json();
  }
  return console.log('error');
}

export async function createProduct(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/`, options);
  return response.json();
}

export async function updateProduct(auth) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/${auth.id}`, options);
  return response.json();
}
