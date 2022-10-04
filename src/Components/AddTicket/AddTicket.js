import React from "react";
import "./AddTicket.css";
import { Link } from "react-router-dom";

function AddTicket() {
  return (
    <div className="addTicket">
      <h2>Create Ticket</h2>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add Ticket Name"
          aria-label="Write Ticket Name"
        />
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          aria-label="Write Ticket Description"
          placeholder="Add Ticket Description"
        ></textarea>
      </div>
      <div className="addTicket__buttons-area">
        <button
          type="button"
          className="btn btn-theme-2 btn-dark btn-lg"
          data-bs-toggle="button"
        >
          Save
        </button>
        <Link to={"/"}>
          <button
            type="button"
            className="btn btn-theme-1 btn-dark btn-lg"
            data-bs-toggle="button"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddTicket;
