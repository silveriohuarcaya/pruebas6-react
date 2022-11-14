import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import logo from '../../../img/fondo.jpg';
import './index.scss';
import { register } from '../../../services/auth';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(form);

      if (response.error?.name === 'ValidationError') {
        swal({
          title: 'Error',
          text: 'Password min 6 characters',
          icon: 'error',
          button: 'Ok',
        });
      }

      if (response.error?.keyPattern.email === 1) {
        swal({
          title: 'Error',
          text: 'This email is registered',
          icon: 'error',
          button: 'Ok',
        });
      }

      if (!response.error) {
        const { token, profile } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('profile', JSON.stringify(profile));
        swal({
          title: 'Success',
          text: 'User registered',
          icon: 'success',
          timer: '1500',
          button: 'Ok',
        });

        navigate('/verify-Email');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register__container">
      <div className="register__left">
        <Link className="register__link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="register__right">
        <div className="register__card">
          <form onSubmit={handleSubmit}>
            <div className="register__form-top">
              <i className="fa fa-user-circle-o" aria-hidden="true" />
            </div>
            <div className="register__form-title">
              <i className="fa fa-lock" aria-hidden="true" />
              <h1>Register</h1>
            </div>
            <div className="register__form-content">
              <div className="register__form-group">
                <p>firstName</p>
                <input
                  type="text"
                  className="register__form-input"
                  name="firstName"
                  placeholder="firstName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="register__form-group">
                <p>lastName</p>
                <input
                  type="text"
                  className="register__form-input"
                  name="lastName"
                  placeholder="lastName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="register__form-group">
                <p>email</p>
                <input
                  type="email"
                  className="register__form-input"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="register__form-group">
                <p>password</p>
                <input
                  type="password"
                  className="register__form-input"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="register__form-button" type="submit">
                Register
              </button>
            </div>
            {/* <div className="register__networks">
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
export default Register;
