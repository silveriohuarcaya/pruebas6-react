import { useNavigate } from 'react-router-dom';

import logo from '../../img/fondo.jpg';

import './index.scss';

const VerifyEmail = () => {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem('profile'));

  const handleActivate = async () => {
    try {
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="verifyEmail">
      <div className="verifyEmail__container">
        <img className="verifyEmail__img" src={logo} alt="logo" />
        <h2>Verify your email address</h2>
        <h3>Verification email has been sent to:</h3>
        <h2 className="h2--color">{data.email}</h2>
        <h3>Click on the link in the email to activate your account</h3>
        <button className="verifyEmail__button" type="button" onClick={handleActivate}>
          Thank you
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
