import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTickedDetails } from "../../requests.js";
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

  return <div>
    <h2>{ticketDetails.title}</h2>
    <br></br>
    <p>{ticketDetails.description}</p>
  </div>;
}

export default ViewTicket;
