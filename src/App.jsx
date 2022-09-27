import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import VerifyAccount from './pages/VerifyAccount';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
    <Route path="/verify-Account/:token" element={<VerifyAccount />} />
  </Routes>
);

export default App;
