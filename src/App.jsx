import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import SignOut from './pages/Sign/SignOut';
import VerifyAccount from './pages/VerifyAccount';
import Product from './pages/Product';
import VerifyEmail from './pages/VerifyEmail';
import Payment from './components/Payment';
import Preference from './components/Preference';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/preference" element={<Preference />} />
    <Route path="/product" element={<Product />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/signOut" element={<SignOut />} />
    <Route path="/verify-Account/:token" element={<VerifyAccount />} />
    <Route path="/verify-Email" element={<VerifyEmail />} />
  </Routes>
);

export default App;
