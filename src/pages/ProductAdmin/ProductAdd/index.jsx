import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../store';
import { getProducts, createProduct } from '../../../services/Products';

import logo from '../../../img/fondo.jpg';
import './index.scss';

const ProductAdd = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleClickCancel = () => {
    navigate('/product-Admin');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeImg = (e) => {
    setFile(e.target.files[0]);
    const urlImage = URL.createObjectURL(e.target.files[0]);
    setImage(urlImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('filename', file.name);

      const payload = {
        method: 'POST',
        body: formData,
      };

      try {
        const response = await fetch('http://localhost:8080/api/upload/file', payload);
        const data = await response.json();
        setImage(data.url);

        const formObject = {
          ...form,
          img: data.url,
        };

        setForm(formObject);

        await createProduct(formObject);

        const products = await getProducts();
        const action = {
          type: 'SET_PRODUCTS',
          payload: products,
        };
        dispatch(action);

        navigate('/product-Admin');
      } catch (error) {
        console.log(error);
      }
    } else {
      const formObject = {
        ...form,
      };
      setForm(formObject);

      await createProduct(formObject);

      const products = await getProducts();
      const action = {
        type: 'SET_PRODUCTS',
        payload: products,
      };
      dispatch(action);

      navigate('/product-Admin');
    }
  };

  return (
    <div className="register__container">
      <div className="register__left">
        <Link className="register__link" to="/product-Admin">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="register__right">
        <div className="register__card">
          <form onSubmit={handleSubmit}>
            <div className="register__form-top">
              <img className="register__img" src={image} alt="Img" />
            </div>

            <div className="register__form-content">
              <div className="register__form-group">
                <p>name</p>
                <input
                  type="text"
                  className="register__form-input"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="register__form-group">
                <p>description</p>
                <input
                  type="text"
                  className="register__form-input"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="register__form-group">
                <p>price</p>
                <input
                  type="text"
                  className="register__form-input"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="register__form-group">
                <p>img</p>
                <input
                  type="file"
                  name="file"
                  className="register__form-input product-img"
                  id="file_product"
                  placeholder="Img"
                  onChange={handleChangeImg}
                  accept="image/*"
                />
              </div>

              <div className="register__form-group--display">
                <button className="register__form-button" type="button" onClick={handleClickCancel}>
                  Cancel
                </button>
                <button className="register__form-button" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProductAdd;
