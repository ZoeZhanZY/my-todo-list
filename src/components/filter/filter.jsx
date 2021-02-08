import React from "react";
import "./filter.css";

const Filter = ({ status, sortHandler, statusHandler }) => {
  return (
    <div className="filters">
      <div className="tabs__nav">
        <ul className="tabs__nav-list">
          <li
            className={`tabs__nav-item ${
              status === "All" ? "js-active tabs__nav-decoration " : ""
            }`}
            value="All"
            onClick={statusHandler}
          >
            All
          </li>
          <li
            className={`tabs__nav-item ${
              status === "Completed" ? "js-active tabs__nav-decoration " : ""
            }`}
            value="Completed"
            onClick={statusHandler}
          >
            Completed
          </li>
          <li
            className={`tabs__nav-item ${
              status === "Uncompleted" ? "js-active tabs__nav-decoration " : ""
            }`}
            value="Uncompleted"
            onClick={statusHandler}
          >
            Uncompleted
          </li>
        </ul>
      </div>

      <div>
        <p className="sort_button " onClick={sortHandler}>
          Sort P0 > P4
        </p>
      </div>
    </div>
  );
};

export default Filter;
