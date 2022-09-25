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
      <main>
        <div className="container">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="top-row background-top-row">
                <i className="fa fa-user-circle-o" aria-hidden="true" />
              </div>
              <div className="content">
                <i className="fa fa-lock" aria-hidden="true" />
                <h1>Login</h1>
                <div className="form-group">
                  <div className="input-group">
                    <p>Email</p>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <p>Password</p>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button className="button" type="submit">
                  Login
                </button>
              </div>
              <div className="networks background-top-row">
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
      </main>
    </div>
  );
};
export default Login;
