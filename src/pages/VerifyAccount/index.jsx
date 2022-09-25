import React from 'react';
import jobs from '../../img/jobs.png';

import './index.scss';

const VerifyAccount = () => (
  <div className="container-block">
    <div className="login-block">
      <img src={jobs} alt="jobs" />
      <h1>Active your account</h1>
      <button type="button">Active</button>
    </div>
  </div>
);

export default VerifyAccount;
