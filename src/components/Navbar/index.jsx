import { Link, Outlet } from 'react-router-dom';

import './index.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="container-navbar">
      <ul className="navbar-left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <Link to="/">
            <i className="fa fa-lock" />
            Usuario
          </Link>
        </li>
      </ul>
    </div>
    <Outlet />
  </nav>
);

export default Navbar;
