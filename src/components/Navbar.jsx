import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo">
          <span className="logo-mark">R</span>

          <div className="logo-copy">
            <span className="logo-text">React Activity Portal</span>
            {/* <span className="logo-subtext">Interactive React Workspace</span> */}
          </div>
        </NavLink>

        <nav className="nav-menu">

          <NavLink
            to="/"
            end
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

          <NavLink
            to="/activity-5"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Activity 5
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;