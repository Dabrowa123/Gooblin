import React, { useEffect, useState } from "react";
import "./AddTicket.css";
import { Link } from "react-router-dom";
import { fetchTicketsArray, sendPutRequest } from "../../requests.js";

function AddTicket() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    createId();
  }, []);

  const createId = async () => {
    const request = await fetchTicketsArray();
    const avaliableId = await request.data.length + 1;
    await setId(avaliableId);
  };
  
  console.log(id);

  const putData = async () => {
    const data = await JSON.stringify( {"title": `${title}`,
      "description": `${description}`,
      "id": id,
      "status": "open"} );

    await sendPutRequest(data);
  }

  return (
    <div className="addTicket">
      <h2>Create Ticket</h2>
      <form>
      <div class="input-group mb-3">
        <input
          type="text"
          value={title}
          class="form-control"
          placeholder="Add Ticket Name"
          aria-label="Write Ticket Name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          value={description}
          aria-label="Write Ticket Description"
          placeholder="Add Ticket Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="addTicket__buttons-area">
        <button
          type="button"
          onClick={putData}
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
      </form>
    </div>
  );
}

export default AddTicket;
