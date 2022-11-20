import { useNavigate } from 'react-router-dom';

import './index.scss';

const Failure = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="failure">
      <div className="failure__container">
        <i className="fa-solid fa-circle-xmark" />
        <p className="failure__p">¡Your payment was declined</p>
        <div className="failure__button-container">
          <button className="failure__button" type="button" onClick={handleClick}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failure;
