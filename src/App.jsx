import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Sign/Login';
import VerifyAccount from './pages/VerifyAccount';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<VerifyAccount />} />
    </Route>
    <Route path="/verifyAccount" element={<VerifyAccount />} />
  </Routes>
);

export default App;
