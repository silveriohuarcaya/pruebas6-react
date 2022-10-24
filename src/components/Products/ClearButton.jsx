import { useAppContext } from '../../store';

const ClearButton = () => {
  const { dispatch } = useAppContext();

  const handleClick = () => {
    const product = [];
    const action = {
      type: 'DELETE_TO_CART',
      payload: product,
    };
    dispatch(action);
  };
  return (
    <button type="button" className="button" onClick={handleClick}>
      Clear
    </button>
  );
};
export default ClearButton;
