// import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verify } from '../../services/auth';
import jobs from '../../img/jobs.png';

import './index.scss';

const VerifyAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const handleActivate = async () => {
    try {
      const data = await verify(token);
      console.log('silverio huarcaya', data);
      if (data.message === 'Account activated') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('profile', JSON.stringify(data.profile));
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const verifyAccount = async () => {
  //     const data = await verify(token);
  //     console.log('wilfredo', token);
  //     console.log('Wiily-data', data);
  //     localStorage.setItem('token', data.token);
  //     localStorage.setItem('profile', JSON.stringify(data.profile));
  //     navigate('/');
  //   };
  //   verifyAccount();
  // }, []);

  return (
    <div className="verifyaccount">
      <div className="verifyaccount__container">
        <img src={jobs} alt="jobs" />
        <h1>Active your account</h1>
        <button type="button" onClick={handleActivate}>
          Active
        </button>
      </div>
    </div>
  );
};

export default VerifyAccount;
