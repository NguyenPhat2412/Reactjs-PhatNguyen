import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <>Users</>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">Product</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Header;
