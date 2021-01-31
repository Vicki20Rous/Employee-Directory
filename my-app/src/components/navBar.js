import React from "react";
import searchForm from "./searchForm.js";
import "../styles/navBar.css";

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <searchForm handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;