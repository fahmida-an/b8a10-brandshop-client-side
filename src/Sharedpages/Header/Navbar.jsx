import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Logo from "./Logo";

const Navbar = ({children}) => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-red-500 hover:text-slate-100 mr-2"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  hover:text-slate-100 mr-2"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " hover:text-slate-100 mr-2" : ""
          }
        >
          MyCart
        </NavLink>
      </li>
    </>
  );

  return (
    <div>

      <div>
        <div className="navbar bg-gray-700">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
          </div>

          <div className="navbar-end mr-4 lg:mr-16">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-72 md:72 w-64"
                >
                  <li>
                    <button className="btn btn-sm btn-ghost text-pinkdark1 hover:bg-pinkdark1 text-sm mb-1 w-full">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-sm btn-ghost text-pinkdark1 hover:bg-pinkdark1 text-sm mb-1 w-full">
                      {user.email}
                    </button>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="btn btn-sm  btn-ghost text-pinkdark1 hover:bg-pinkdark1 text-sm mb-1 w-full">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 rounded-lg p-2 "
                      : "text-white btn btn-sm bg-gray-950 border-none"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-red-500 rounded-lg p-2"
                      : " text-white btn btn-sm bg-gray-950 border-none"
                  }
                >
                  SignUp
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
