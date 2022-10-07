import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import SignOut from './pages/Sign/SignOut';
import VerifyAccount from './pages/VerifyAccount';
import Payment from './components/Payment';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/signOut" element={<SignOut />} />
    <Route path="/verify-Account/:token" element={<VerifyAccount />} />
  </Routes>
);

export default App;
