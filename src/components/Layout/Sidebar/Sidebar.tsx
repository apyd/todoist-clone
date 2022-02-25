import { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

import "./styles.scss";

export const Sidebar = () => {
  const [projectsExpanded, setProjectsExpanded] = useState<boolean>(false);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__date-filters">
        <li className="date-filter">
          <div className="date-filter__label">
            <span className="date-filter__wrapper">
              <FaInbox className="date-filter__icon date-filter__icon--blue" />
            </span>
            <span className="date-filter__title">Inbox</span>
          </div>
          <span className="date-filter__amount">3</span>
        </li>
        <li className="date-filter">
          <div className="date-filter__label">
            <span className="date-filter__wrapper">
              <FaRegCalendar className="date-filter__icon date-filter__icon--green" />
            </span>
            <span className="date-filter__title">Today</span>
          </div>
          <span className="date-filter__amount">3</span>
        </li>
        <li className="date-filter">
          <div className="date-filter__label">
            <span className="date-filter__wrapper">
              <FaRegCalendarAlt className="date-filter__icon date-filter__icon--purple" />
            </span>
            <span className="date-filter__title">Upcoming</span>
          </div>
          <span className="date-filter__amount"></span>
        </li>
      </ul>
      <div className="projects">
        <header
          className="projects__header"
          onClick={() => setProjectsExpanded((prev) => (prev = !prev))}
        >
          <FaChevronDown
            className={
              projectsExpanded
                ? "projects__icon"
                : "projects__icon projects__icon--rotated"
            }
          />
          <h4 className="projects__heading">Projects</h4>
        </header>
      </div>
      {projectsExpanded && (
        <ul className="projects__list">Projects will be here</ul>
      )}
    </div>
  );
};
