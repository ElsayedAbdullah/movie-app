import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}>Movie App</Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to={"/watchlist"}>Watch List</NavLink>
            </li>
            <li>
              <NavLink to={"/watched"}>Watched</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
