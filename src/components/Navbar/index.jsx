import { Link, Outlet } from 'react-router-dom';

import './index.scss';

const Navbar = () => {
  const profile = localStorage.getItem('profile');

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
          <ul className="navbar__menu navbar__menu--padding">
            {profile !== 'undefined' && profile !== null ? (
              <li>
                <div className="navbar__link navbar__link--background-color">
                  <span>
                    {JSON.parse(profile).firstName}
                    {` ${JSON.parse(profile).lastName}`}
                  </span>
                </div>

                <ul className="navbar__sub-menu">
                  <li>
                    <Link className="navbar__link" to="/signOut">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <Link className="navbar__link" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link className="navbar__link" to="/register">
                Register
              </Link>
            </li>
          </ul>
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
