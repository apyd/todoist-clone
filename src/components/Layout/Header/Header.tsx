import {
  FaStream,
  FaHome,
  FaSearch,
  FaPizzaSlice,
  FaPlus,
  FaUserCircle,
} from "react-icons/fa";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="sidebar__toggle">
            <FaStream className="icon" />
          </li>
          <li className="home">
            <FaHome className="icon" />
          </li>
          <div className="search-box">
            <input
              type="text"
              className="search-box__input"
              id="search"
              name="search"
              placeholder="Search..."
            />
            <FaSearch className="search-box__icon" />
            <label htmlFor="search" />
          </div>
        </ul>
        <ul className="nav__list nav__list">
          <li className="add-task">
            <FaPlus className="icon" />
          </li>
          <li className="toggle-theme">
            <FaPizzaSlice className="icon" />
          </li>
          <li className="user-account">
            <FaUserCircle className="icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
