import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();
  localStorage.clear();
  useEffect(() => navigate('/'), []);
};
export default SignOut;
