import React from "react";
import "./Nav.css";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <button
          type="button"
          className="btn btn-theme-2 btn-dark btn-lg"
          data-bs-toggle="button"
        >
          Log In <i class="bi bi-box-arrow-in-right"></i>
        </button>
        <button
          type="button"
          className="btn btn-theme-1 btn-outline-dark btn-lg"
        >
          Create Ticket <i class="bi bi-plus-circle"></i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
