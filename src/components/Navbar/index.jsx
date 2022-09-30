import { Link, Outlet } from 'react-router-dom';

import './index.scss';

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  console.log(profile);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link className="navbar__link" to="/">
            Home
          </Link>
          <Link className="navbar__link" to="/login">
            Login
          </Link>
          <Link className="navbar__link" to="/register">
            Register
          </Link>
        </div>
        <div className="navbar__right">
          {profile ? (
            <div className="navbar__link">
              {profile.firsName}
              {profile.lastName}
            </div>
          ) : (
            // <Link className="navbar__link" to="/profile">
            //   {profile.firsName}
            //   {profile.lastName}
            // </Link>
            <Link to="/login">Login</Link>
          )}
          <Link className="navbar__link" to="/register">
            Register
          </Link>
        </div>
        <nav>
          <ul className="navbar__menu">
            <li>
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/jobs">
                Jobs
              </Link>
              <ul className="navbar__sub-menu">
                <li>
                  <Link className="navbar__link" to="/jobs">
                    Browse jobs
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/jobs/detail/1020">
                    Job detail
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/jobs/apply/1020">
                    Apply for job
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/jobs/create">
                    Post a job
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/candidates">
                    Candidates
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
