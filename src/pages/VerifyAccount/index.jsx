import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verify } from '../../services/auth';
import jobs from '../../img/jobs.png';

import './index.scss';

const VerifyAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  console.log('VerifyAcoount', token);

  useEffect(() => {
    const verifyAccount = async () => {
      const data = await verify(token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('profile', JSON.stringify(data.profile));
      navigate('/');
    };
    verifyAccount();
  }, []);

  return (
    <div className="verifyaccount">
      <div className="verifyaccount__container">
        <img src={jobs} alt="jobs" />
        <h1>Active your account</h1>
        <button type="button">Active</button>
      </div>
    </div>
  );
};

export default VerifyAccount;
