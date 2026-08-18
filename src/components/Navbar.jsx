import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo">
          <span className="logo-mark">R</span>
          <span className="logo-text">React Activities</span>
        </NavLink>

        <nav className="nav-menu">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/activity-1"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Activity 1
          </NavLink>

          <NavLink
            to="/activity-2"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Activity 2
          </NavLink>

          <NavLink
            to="/activity-3"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Activity 3
          </NavLink>

          <NavLink
            to="/activity-4"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Activity 4
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;