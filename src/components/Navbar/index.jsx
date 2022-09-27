import { Link, Outlet } from 'react-router-dom';

import './index.scss';

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link className="navbar__toggle" to="/">
            Home
          </Link>
          <Link className="navbar__login" to="/login">
            Login
          </Link>
          <Link className="navbar__Register" to="/register">
            Register
          </Link>
        </div>
        <div className="navbar__right">
          {profile ? (
            <Link className="user-login" to="/profile">
              {profile.firsName}
              {profile.lastName}
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          or
          <Link className="user-register" to="/register">
            Register
          </Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/jobs">Position</a>
            <ul>
              <li>
                <Link to="/jobs">Browse jobs</Link>
              </li>
              <li>
                <Link to="/jobs/detail/1020">Job detail</Link>
              </li>
              <li>
                <Link to="/jobs/apply/1020">Apply for job</Link>
              </li>
              <li>
                <Link to="/jobs/create">Post a job</Link>
              </li>
              <li>
                <Link to="/candidates">Candidates</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
