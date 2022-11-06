import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verify } from '../../services/auth';
import logo from '../../img/fondo.jpg';

import './index.scss';

const VerifyAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  // const handleActivate = async () => {
  //   try {
  //     const data = await verify(token);
  //     console.log('silverio huarcaya', data);
  //     if (data.message === 'Account activated') {
  //       localStorage.setItem('token', data.token);
  //       localStorage.setItem('profile', JSON.stringify(data.profile));
  //     }
  //     navigate('/');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    const verifyAccount = async () => {
      const data = await verify(token);
      if (data.message === 'Account activated') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('profile', JSON.stringify(data.profile));
      }
      navigate('/');
    };
    setTimeout(verifyAccount, 2000);
  }, []);

  return (
    <div className="verifyaccount">
      <div className="verifyaccount__container">
        <img className="verifyaccount__img" src={logo} alt="jobs" />
        <h3>Thank you</h3>
        <h1 className="verifyaccount__h1">Active your account</h1>
        {/* <button className="verifyaccount__button" type="button" onClick={handleActivate}>
          Active
        </button> */}
      </div>
    </div>
  );
};

export default VerifyAccount;
