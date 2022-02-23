import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist logo" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add-task">+</li>
            <li className="settings__toggle-theme">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
