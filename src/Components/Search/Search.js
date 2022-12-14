import { React, useState, useEffect } from "react";
import { fetchTicketsArray } from "../../requests.js";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {

  const [ticketsList, setTicketsList] = useState([]);

  useEffect(() => {
    fetchAndRenderTicketsList();
  }, []);

  const fetchAndRenderTicketsList = async () => {
    const data = await fetchTicketsArray();
    setTicketsList(data);
  };

  return (
    <div>
      <div class="mb-3 search__bar">
        <button
          type="button"
          className="btn btn-theme-2 btn-outline-dark btn-lg"
          data-bs-toggle="button"
        >
          Search <i class="bi bi-search"></i>
        </button>

        <input
          type="email"
          class="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Write ticket's name"
        ></input>
      </div>

      <div>
        <ol class="list-group list-group-numbered">
            {ticketsList.map((ticket) => (
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{ticket.title}<span class="badge bg-status-active rounded-pill">{ticket.status}</span></div>
                  {ticket.description}
                </div>
                <Link to={`/viewticket/${ticket.id}`}>
                <button>View</button>
                </Link>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
