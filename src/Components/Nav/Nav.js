import React from "react";
import "./Nav.css";
import * as icon from "../../assets/icons/index.js";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <button
          type="button"
          className="btn btn-login btn-dark btn-lg"
          data-bs-toggle="button"
        >
          Log In <i class="bi bi-box-arrow-in-right"></i>
        </button>
        <button
          type="button"
          className="btn btn-add-ticket btn-outline-dark btn-lg"
        >
          Create Ticket <i class="bi bi-plus-circle"></i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
