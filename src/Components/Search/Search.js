import { React, useState, useEffect } from "react";
import { fetchTicketsArray } from "../../requests.js";
import "./Search.css";

function Search() {

  useEffect(() => {
    fetchAndRenderTicketsList();
  }, []);

  const [ticketsList, setTicketsList] = useState([]);
  const [thereIsNoTicket, setThereIsNoTicket] = useState(true);

  const fetchAndRenderTicketsList = async () => {
    const data = await fetchTicketsArray();
    await setTicketsList(data);
    if (ticketsList.length > 0) {
      setThereIsNoTicket(false);
    } else {
      setThereIsNoTicket(true);
    }
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
          {!thereIsNoTicket &&
            (ticketsList.map((ticket) => (
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{ticket.title}</div>
                  {ticket.description}
                </div>
                <span class="badge bg-status-active rounded-pill">Active</span>
              </li>
            )))}{" "}
          {thereIsNoTicket && (<p>There are no tickets yet</p>)}
        </ol>
      </div>
    </div>
  );
}

export default Search;
