import { Link, Outlet } from 'react-router-dom';

import logo from '../../img/fondo.jpg';
import './index.scss';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const profile = JSON.parse(localStorage.getItem('profile'));

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link className="navbar__link" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar__right">
          <ul className="navbar__menu navbar__menu--padding">
            {token !== 'undefined' && token !== null && profile?.isActive ? (
              <li>
                <div className="navbar__link navbar__link--background-color">
                  <span>
                    {profile.firstName}
                    {` ${profile.lastName}`}
                  </span>
                </div>

                <ul className="navbar__sub-menu">
                  <li>
                    <Link className="navbar__link" to="/">
                      Account
                    </Link>
                  </li>
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
              <div className="shopping-bars">
                <i className="fa fa-solid fa-bars" />
              </div>

              <ul className="navbar__sub-menu">
                <li>
                  <Link className="navbar__link" to="/jobs">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/jobs/detail/1020">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/jobs/apply/1020">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/jobs/create">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link className="navbar__link" to="/candidates">
                    About
                  </Link>
                </li>
              </ul>
            </li>

            {profile?.role === 'admin' ? (
              <li>
                <div className="navbar__link">Admin</div>

                <ul className="navbar__sub-menu">
                  <li>
                    <Link className="navbar__link" to="/product-Admin">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar__link" to="/img/photos">
                      Photos
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar__link" to="/img/videos">
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar__link" to="/img/histories">
                      Histories
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <p />
            )}
            <li>
              <Link className="navbar__link" to="/product">
                Menus
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
