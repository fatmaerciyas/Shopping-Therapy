import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.hook";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import Button from "./dashboard/Button";
import { PATH_DASHBOARD, PATH_PUBLIC } from "../router/Routes";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav
        id="topnav"
        className="defaultscroll is-sticky bg-white dark:bg-slate-900"
      >
        <div className="container relative">
          <a className="logo" href="index.html">
            OneStopShop
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-none mb-0 ">
            <li className="dropdown inline-block mr-4 relative">
              <Link
                to="/cart"
                className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                type="button"
              >
                <AiOutlineShoppingCart />
              </Link>
            </li>

            <li className=" inline-block ">
              <Link
                to={isAuthenticated ? "/dashboard" : "/login"}
                className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                type="button"
              >
                <AiOutlineUser />
              </Link>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu justify-end align-middle">
              <li>
                <Link to="/catalog" className="sub-menu-item">
                  Catalog
                </Link>
              </li>

              <li>
                <Link to="/about" className="sub-menu-item">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="sub-menu-item">
                  Contact
                </Link>
              </li>
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Button
                    label="Dashboard"
                    onClick={() => navigate(PATH_DASHBOARD.dashboard)}
                    type="button"
                    variant="light"
                  />
                  <Button
                    label="Logout"
                    onClick={logout}
                    type="button"
                    variant="light"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    label="Register"
                    onClick={() => navigate(PATH_PUBLIC.register)}
                    type="button"
                    variant="light"
                  />
                  <Button
                    label="Login"
                    onClick={() => navigate(PATH_PUBLIC.login)}
                    type="button"
                    variant="light"
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
