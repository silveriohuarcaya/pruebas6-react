import { useNavigate } from 'react-router-dom';

import './index.scss';

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="success">
      <div className="success__container">
        <i className="fa-solid fa-circle-check" />
        <p className="success__p">¡Thank you for your purchase!</p>
        <div className="success__button-container">
          <button className="success__button" type="button" onClick={handleClick}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
