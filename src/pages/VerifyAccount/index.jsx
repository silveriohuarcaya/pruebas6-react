import React from 'react';
import jobs from '../../img/jobs.png';

import './index.scss';

const VerifyAccount = () => (
  <div className="verifyaccount">
    <div className="verifyaccount__container">
      <img src={jobs} alt="jobs" />
      <h1>Active your account</h1>
      <button type="button">Active</button>
    </div>
  </div>
);

export default VerifyAccount;
