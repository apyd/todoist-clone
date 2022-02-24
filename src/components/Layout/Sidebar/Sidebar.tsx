import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

import "./styles.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__categories">
        <li className="sidebar__category">
          <span className="category__icon">
            <FaInbox />
          </span>
          <span className="category__title">Inbox</span>
        </li>
        <li className="sidebar__category">
          <span className="category__icon">
            <FaRegCalendar />
          </span>
          <span className="category__title">Today</span>
        </li>
        <li className="sidebar__category">
          <span className="category__icon">
            <FaRegCalendarAlt />
          </span>
          <span className="category__title">Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__projects">
        <header className="projects__header">
          <FaChevronDown />
          <h2 className="projects__heading">Projects</h2>
        </header>
      </div>
      <ul className="projects__list">Projects will be here</ul>
    </div>
  );
};
