import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import { verify, updateAccount } from '../../services/auth';
import logo from '../../img/fondo.jpg';

import './index.scss';

const VerifyPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.trim() && form.password.trim().length >= 6) {
      swal({
        title: 'Update',
        text: 'Are you sure you want to Reset Password?',
        icon: 'warning',
        buttons: ['Cancel', 'Ok'],
      }).then(async (resp) => {
        if (resp) {
          try {
            const data = await verify(token); // token, profile, message

            if (data.message === 'Account activated') {
              const formData = {
                password: form.password.trim(),
                token: data.token,
                id: data.profile._id,
              };
              const response = await updateAccount(formData);

              if (response.error === 'Password incorrect') {
                swal({
                  title: 'Error',
                  text: 'Password incorrect min 6 characters',
                  icon: 'error',
                  button: 'Ok',
                });
              }

              if (!response.error) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('profile', JSON.stringify(response.profile));

                swal({
                  title: 'Success',
                  text: 'Password Update',
                  icon: 'success',
                  timer: '2000',
                  button: 'Ok',
                });

                navigate('/');
              }
            }
          } catch (error) {
            console.error(error);
          }
        }
      });
    } else {
      swal({
        title: 'Error',
        text: 'Password incorrect min 6 characters',
        icon: 'error',
        button: 'Ok',
      });
    }
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
                <p>Password</p>
                <input
                  type="password"
                  className="forgotPassword__form-input"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="forgotPassword__form-group--display">
                <button className="forgotPassword__form-button" type="submit">
                  Reset password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyPassword;
