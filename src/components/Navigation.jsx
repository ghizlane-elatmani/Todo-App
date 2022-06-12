import React from "react";

const Navigation = ({ active, setActive }) => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li
          onClick={() => setActive("all")}
          className={`nav-link ${active === "all" ? "active" : ""}`}
        >
          All
        </li>

        <li
          onClick={() => setActive("active")}
          className={`nav-link ${active === "active" ? "active" : ""}`}
        >
          Active
        </li>

        <li
          onClick={() => setActive("completed")}
          className={`nav-link ${active === "completed" ? "active" : ""}`}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
