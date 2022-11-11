import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import logo from '../../../img/fondo.jpg';
import './index.scss';
import { forgotPassword } from '../../../services/auth';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    swal({
      title: 'Update',
      text: 'Are you sure you want to Reset Password?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
    }).then(async (resp) => {
      if (resp) {
        try {
          const response = await forgotPassword(form);
          if (response.error === 'Email not found') {
            swal({
              title: 'Error',
              text: 'Email not found',
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
            const { profile } = response;
            localStorage.setItem('profile', JSON.stringify(profile));
            navigate('/verify-Email');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="forgotPassword__container">
      <div className="forgotPassword__left">
        <Link className="forgotPassword__link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="forgotPassword__right">
        <div className="forgotPassword__card">
          <form onSubmit={handleSubmit}>
            <div className="forgotPassword__form-top">
              <i className="fa fa-user-circle-o" aria-hidden="true" />
            </div>
            <div className="forgotPassword__form-title">
              <i className="fa fa-lock" aria-hidden="true" />
              <h1>Reset your password</h1>
            </div>
            <div className="forgotPassword__form-content">
              <div className="forgotPassword__form-group">
                <p>Email</p>
                <input
                  type="email"
                  className="forgotPassword__form-input"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="forgotPassword__form-group--display">
                <button className="forgotPassword__form-button" type="submit">
                  Get reset link
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
