import React, { useState, useEffect } from "react";
import "./EditTicket.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getTickedDetails } from "../../requests.js";
import { sendPostRequest } from "../../requests.js";

function EditTicket() {

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

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const postData = async () => {
    console.log(title);
    const data = await {"title": `${title}`,
      "description": `${description}`
    };

    await sendPostRequest(data, id);
  }

  return (
    <div className="addTicket">
      <h2>Edit Ticket</h2>
      <form>
      <div class="input-group mb-3">
        <input
          type="text"
          defaultValue={ticketDetails.title}
          class="form-control"
          placeholder="Add Ticket Name"
          aria-label="Write Ticket Name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          defaultValue={ticketDetails.description}
          aria-label="Write Ticket Description"
          placeholder="Add Ticket Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="addTicket__buttons-area">
        <Link to={"/"}>
          <button
            type="button"
            onClick={postData}
            className="btn btn-theme-2 btn-dark btn-lg"
            data-bs-toggle="button"
          >
            Save
          </button>
        </Link>
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
      </form>
    </div>
  );
}

export default EditTicket;
