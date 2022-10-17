import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTickedDetails, deleteRequest } from "../../requests.js";
import { Link } from "react-router-dom";
import "./ViewTicket.css";

function ViewTicket() {
  const [ticketDetails, setTicketDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getTickedDetails(id).then((data) => {

      if (data.error) {
        return;
      }

      setTicketDetails(data);
    });
  }, [id]);

  const deleteTicket = async () => {
    await deleteRequest(ticketDetails.id);
  }

  return <div>
    <h2>{ticketDetails.title}</h2>
    <br></br>
    <p>{ticketDetails.description}</p>
    <Link to={"/"}>
          <button
            type="button"
            className="btn btn-theme-1 btn-dark btn-lg"
            data-bs-toggle="button"
          >
            Go Back
          </button>
        </Link>
        <Link to={"/"}>
          <button
            type="button"
            onClick={deleteTicket}
            className="btn btn-theme-2 btn-dark btn-lg"
            data-bs-toggle="button"
          >
            Delete Ticket
          </button>
        </Link>
  </div>;
}

export default ViewTicket;
