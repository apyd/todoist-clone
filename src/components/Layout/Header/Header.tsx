import { useState } from "react";
import {
  FaStream,
  FaHome,
  FaPizzaSlice,
  FaPlus,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import "./styles.scss";

export const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const clearInput = () => {
    setSearchInput("");
  };

  return (
    <header className="header" data-testid="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <FaStream className="icon" />
          </li>
          <li className="nav__item">
            <FaHome className="icon" />
          </li>
          <div className="search-box">
            <span className="icon__wrapper">
              <FaSearch className="icon icon--search" />
            </span>
            <input
              type="text"
              className="search-box__input"
              id="search"
              name="search"
              placeholder="Search..."
              onChange={(e) => searchHandler(e)}
              value={searchInput}
            />
            {searchInput.length > 3 && (
              <span
                className="nav__item nav__item--positioned"
                onClick={clearInput}
              >
                <FaPlus className="icon icon--clear" />
              </span>
            )}
            <label htmlFor="search" />
          </div>
        </ul>
        <ul className="nav__list">
          <li className="nav__item">
            <FaPlus className="icon" />
          </li>
          <li className="nav__item">
            <FaPizzaSlice className="icon" />
          </li>
          <li className="nav__item">
            <FaUserCircle className="icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
