import { useNavigate } from 'react-router-dom';

import { signOut } from '../../../services/auth';

const SignOut = () => {
  const navigate = useNavigate();
  const form = signOut();
  const deleteLocalStorage = async () => {
    try {
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  console.log('silverio', form);
  return { deleteLocalStorage };
};
export default SignOut;
