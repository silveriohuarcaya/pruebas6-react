import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useAppContext } from '../../../store';
import { getProducts, updateProduct } from '../../../services/Products';

import logo from '../../../img/fondo.jpg';
import './index.scss';

const ProductEdit = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();

  const { name, description, price, img, _id } = state.cart[0];

  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(img);

  const handleClickCancel = () => {
    navigate('/product-Admin');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  const handleChangeImg = (evt) => {
    setFile(evt.target.files[0]);
    const urlImage = URL.createObjectURL(evt.target.files[0]);
    setImage(urlImage);
  };

  const handleUploadFile = async () => {
    if (file) {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('filename', file.name);

      const payload = {
        method: 'POST',
        body: formData,
      };

      console.log('silverio front 1:', file);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/upload/file`, payload);
        const data = await response.json();
        console.log('huarcaya-data', data);

        // const response = await axios.post('http://localhost:8080/api/upload/file', formData);

        setImage(data.url);

        const formObject = {
          ...form,
          img: data.url,
          id: _id,
        };

        setForm(formObject);

        await updateProduct(formObject);

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
        id: _id,
      };
      setForm(formObject);

      await updateProduct(formObject);

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
    <div className="productEdit__container">
      <div className="productEdit__left">
        <Link className="productEdit__link" to="/product-Admin">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="productEdit__right">
        <div className="productEdit__card">
          <form>
            <div className="productEdit__form-top">
              <img className="productEdit__img" src={image} alt="Img" />
            </div>

            <div className="productEdit__form-content">
              <div className="productEdit__form-group">
                <p>name</p>
                <input
                  type="text"
                  className="productEdit__form-input"
                  name="name"
                  defaultValue={name}
                  placeholder="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="productEdit__form-group">
                <p>description</p>
                <input
                  type="text"
                  className="productEdit__form-input"
                  name="description"
                  defaultValue={description}
                  placeholder="description"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="productEdit__form-group">
                <p>price</p>
                <input
                  type="text"
                  className="productEdit__form-input"
                  name="price"
                  defaultValue={price}
                  placeholder="price"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="productEdit__form-group">
                <p>img</p>
                <input
                  type="file"
                  name="file"
                  className="productEdit__form-input productEdit-img"
                  id="file"
                  placeholder="Img"
                  onChange={handleChangeImg}
                  accept="image/*"
                />
              </div>

              <div className="productEdit__form-group--display">
                <button className="productEdit__form-button" type="button" onClick={handleClickCancel}>
                  Cancel
                </button>
                <button className="productEdit__form-button" type="button" onClick={handleUploadFile}>
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
export default ProductEdit;
