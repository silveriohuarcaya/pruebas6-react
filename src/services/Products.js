// import products from '../assets/data';

const getProducts = async () => {
  const products = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/`);

  if (products) {
    return products.json();
  }
  return console.log('error');
};
export default getProducts;
