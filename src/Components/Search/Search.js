import React from "react";
import "./Search.css";

function Search() {
  return (
    <div>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Ticket Name</div>
            Description
          </div>
          <span class="badge bg-status-active rounded-pill">Active</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Ticket Name</div>
            Description
          </div>
          <span class="badge bg-status-active rounded-pill">Active</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Ticket Name</div>
            Description
          </div>
          <span class="badge bg-status-active rounded-pill">Active</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Ticket Name</div>
            Description
          </div>
          <span class="badge bg-status-active rounded-pill">Active</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Ticket Name</div>
            Description
          </div>
          <span class="badge bg-status-closed rounded-pill">Closed</span>
        </li>
      </ol>
    </div>
  );
}

export default Search;
