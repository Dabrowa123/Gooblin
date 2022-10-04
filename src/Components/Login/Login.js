import React from "react";
import "./Login.css";

function Link() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-theme-2 btn-dark btn-lg"
        data-bs-toggle="button"
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-theme-1 btn-dark btn-lg"
        data-bs-toggle="button"
      >
        Cancel
      </button>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Ticket Name"
          aria-label="Write Ticket Name"
        />
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          aria-label="Write Ticket Description"
          placeholder="Ticket Description"
        ></textarea>
      </div>
    </div>
  );
}

export default Link;
