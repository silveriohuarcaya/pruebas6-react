import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import logo from '../../../img/fondo.jpg';
import './index.scss';
import { login } from '../../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      if (response.error === 'Password incorrect' || response.error === 'Email not found') {
        swal({
          title: 'Error',
          text: 'Email or Password incorrect',
          icon: 'error',
          button: 'Ok',
        });
      } else if (!response.profile.isActive) {
        swal({
          title: 'Error',
          text: 'First activate your email',
          icon: 'error',
          button: 'Ok',
        });
      } else {
        const { token, profile } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('profile', JSON.stringify(profile));
        swal({
          title: 'Success',
          text: 'User logged in',
          icon: 'success',
          timer: '1500',
          button: 'Ok',
        });
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login__container">
      <div className="login__left">
        <Link className="login__link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="login__right">
        <div className="login__card">
          <form onSubmit={handleSubmit}>
            <div className="login__form-top">
              <i className="fa fa-user-circle-o" aria-hidden="true" />
            </div>
            <div className="login__form-title">
              <i className="fa fa-lock" aria-hidden="true" />
              <h1>Login</h1>
            </div>
            <div className="login__form-content">
              <div className="login__form-group">
                <p>Email</p>
                <input
                  type="email"
                  className="login__form-input"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login__form-group">
                <p>Password</p>
                <input
                  type="password"
                  className="login__form-input"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>
              <Link className="login__link" to="/forgot-Password">
                <span>Forgot your password?</span>
              </Link>

              <button className="login__form-button" type="submit">
                Login
              </button>
            </div>

            {/* <div className="login__networks">
              <Link to="/">
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
              <Link to="/">
                <i className="fa fa-google" aria-hidden="true" />
              </Link>
              <Link to="/">
                <i className="fa fa-instagram" aria-hidden="true" />
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
