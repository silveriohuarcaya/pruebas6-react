import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './index.scss';
import { login } from '../../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      const { token, profile } = response;
      localStorage.setItem('token', token);
      localStorage.setItem('profile', JSON.stringify(profile));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <form onSubmit={handleSubmit}>
          <div className="login__form-top">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
          </div>
          <div className="login__form-login">
            <i className="fa fa-lock" aria-hidden="true" />
            <h1>Login</h1>
          </div>
          <div className="login__form-content">
            <div className="form__group">
              <p>Email</p>
              <input
                type="email"
                className="form__input"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="form__group">
              <p>Password</p>
              <input
                type="password"
                className="form__input"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button className="form__button" type="submit">
              Login
            </button>
          </div>

          <div className="login__networks">
            <Link to="/">
              <i className="fa fa-facebook" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-google" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-instagram" aria-hidden="true" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
