import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './index.scss';

const Register = () => {
  const { form, handleOnchange } = useForm({});

  console.log('form', form);

  return (
    <div className="register">
      <div className="register__container">
        <form>
          <div className="register__form-top">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
          </div>
          <div className="register__form-register">
            <i className="fa fa-lock" aria-hidden="true" />
            <h1>Register</h1>
          </div>
          <div className="register__form-content">
            <div className="form-group">
              <p>User</p>
              <input
                type="text"
                className="form-input"
                name="UserName"
                id=""
                placeholder="Username"
                onChange={handleOnchange}
              />
            </div>

            <div className="form-group">
              <p>Email</p>
              <input
                type="email"
                className="form-input"
                name="email"
                id=""
                placeholder="Email"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <p>Password</p>
              <input
                type="password"
                className="form-input"
                name="password"
                id=""
                placeholder="Password"
                onChange={handleOnchange}
              />
            </div>

            <button className="form__button" type="submit">
              Register
            </button>
          </div>
          <div className="register__networks">
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
export default Register;
