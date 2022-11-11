import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import Account from './pages/Sign/Account';
import ForgotPassword from './pages/Sign/ForgotPassword';
import SignOut from './pages/Sign/SignOut';
import VerifyAccount from './pages/VerifyAccount';
import VerifyPassword from './pages/VerifyPassword';
import Product from './pages/Product';
import ProductAdmin from './pages/ProductAdmin';
import ProductAdd from './components/ProductsAdmin/ProductAdd';
import ProductEdit from './components/ProductsAdmin/ProductEdit';
import VerifyEmail from './pages/VerifyEmail';
import Payment from './components/Payment';
import Preference from './components/Preference';
import UploadPage from './pages/Upload';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/preference" element={<Preference />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product-Admin" element={<ProductAdmin />} />
    <Route path="/product-Admin/product-Add" element={<ProductAdd />} />
    <Route path="/product-Admin/product-Edit" element={<ProductEdit />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/account" element={<Account />} />
    <Route path="/forgot-Password" element={<ForgotPassword />} />
    <Route path="/signOut" element={<SignOut />} />
    <Route path="/verify-Account/:token" element={<VerifyAccount />} />
    <Route path="/verify-Password/:token" element={<VerifyPassword />} />
    <Route path="/verify-Email" element={<VerifyEmail />} />
    <Route path="/mercadopago/success" element={<h1>Success</h1>} />
    <Route path="/mercadopago/failure" element={<h1>Failure</h1>} />
    <Route path="/mercadopago/pending" element={<h1>Pending</h1>} />
    <Route path="/upload" element={<UploadPage />} />
  </Routes>
);

export default App;
