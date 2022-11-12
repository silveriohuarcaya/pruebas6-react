import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import logo from '../../../img/fondo.jpg';
import './index.scss';
import { updateAccount, deleteAccount } from '../../../services/auth';

const Account = () => {
  const token = localStorage.getItem('token');
  const profile = JSON.parse(localStorage.getItem('profile'));

  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleClickCancel = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickDelete = async () => {
    swal({
      title: 'Delete',
      text: 'Are you sure you want to remove this user?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      // eslint-disable-next-line consistent-return
    }).then(async (res) => {
      if (res) {
        try {
          const formData = {
            ...form,
            token,
            id: profile._id,
          };
          const response = await deleteAccount(formData);

          if (!response.error) {
            localStorage.clear();

            swal({
              title: 'Success',
              text: 'Product delete',
              icon: 'success',
              timer: '2000',
              button: 'Ok',
            });

            navigate('/');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    swal({
      title: 'Update',
      text: 'Are you sure you want to Updatet this user?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      // eslint-disable-next-line consistent-return
    }).then(async (res) => {
      if (res) {
        try {
          const formData = {
            ...form,
            password: form.password?.trim(),
            token,
            id: profile._id,
          };
          const response = await updateAccount(formData);

          if (response.error === 'Password incorrect') {
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
            localStorage.setItem('token', response.token);
            localStorage.setItem('profile', JSON.stringify(response.profile));

            swal({
              title: 'Success',
              text: 'User Update',
              icon: 'success',
              timer: '2000',
              button: 'Ok',
            });

            navigate('/');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="account__container">
      <div className="account__left">
        <Link className="account__link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="account__right">
        <div className="account__card">
          <form onSubmit={handleSubmit}>
            <div className="account__form-title">
              <i className="fa fa-lock" aria-hidden="true" />
              <h1>Edit Account</h1>
            </div>

            <div className="account__form-content">
              <div className="account__form-group">
                <p>firstName</p>
                <input
                  type="text"
                  className="account__form-input"
                  name="firstName"
                  defaultValue={profile.firstName}
                  placeholder="firstName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="account__form-group">
                <p>lastName</p>
                <input
                  type="text"
                  className="account__form-input"
                  name="lastName"
                  defaultValue={profile.lastName}
                  placeholder="lastName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="account__form-group">
                <p>email</p>
                <input
                  type="email"
                  className="account__form-input"
                  name="email"
                  defaultValue={profile.email}
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="account__form-group">
                <p>password</p>
                <input
                  type="password"
                  className="account__form-input"
                  name="password"
                  // defaultValue={profile.password}
                  placeholder="password"
                  onChange={handleChange}
                  // required
                />
              </div>

              <div className="account__form-group--display">
                <button className="account__form-button" type="button" onClick={handleClickCancel}>
                  Cancel
                </button>
                <button className="account__form-button" type="submit">
                  Update
                </button>
                <button className="account__form-button" type="button" onClick={handleClickDelete}>
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="account__shooping">
        <button className="account__button" type="button">
          Shooping
        </button>
      </div>
    </div>
  );
};
export default Account;
