import { useNavigate } from 'react-router-dom';

import './index.scss';

const Pending = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="pending">
      <div className="pending__container">
        <i className="fa-solid fa-circle-xmark" />
        <p className="pending__p">¡your payment is pending!</p>
        <div className="pending__button-container">
          <button className="pending__button" type="button" onClick={handleClick}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pending;
