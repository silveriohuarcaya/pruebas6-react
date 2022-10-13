import { useNavigate } from 'react-router-dom';

import logo from '../../img/Logo-Danasoft.png';

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
        <img src={logo} alt="logo" />
        <h2>Verify your Email</h2>
        <h2 className="h2--color">{data.email}</h2>
        <h3>Check to email for activate your account and start</h3>
        <button type="button" onClick={handleActivate}>
          Open Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
