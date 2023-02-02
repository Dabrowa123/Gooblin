import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getTickedDetails } from "../../requests.js";
import { sendPostRequest } from "../../requests.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(ticketDetails);
  const postData = async () => {
    const data = await { title: `${title}`, description: `${description}` };

    await sendPostRequest(data, id);
    await navigate(`/viewticket/${id}`);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Edit Gooblin
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-multiline-static"
            defaultValue={ticketDetails.title}
            multiline
            rows={1}
            sx={{ width: "100%" }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            defaultValue="Application Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            defaultValue={ticketDetails.description}
            multiline
            rows={7}
            sx={{ width: "100%" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ mr: 2 }} onClick={postData}>
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate(`/viewticket/${id}`);
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
    // <div className="addTicket">
    //   <h2>Edit Ticket</h2>
    //   <form>
    //     <div class="input-group mb-3">
    //       <input
    //         type="text"
    //         defaultValue={ticketDetails.title}
    //         class="form-control"
    //         placeholder="Add Ticket Name"
    //         aria-label="Write Ticket Name"
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //     </div>
    //     <div class="input-group">
    //       <textarea
    //         class="form-control"
    //         defaultValue={ticketDetails.description}
    //         aria-label="Write Ticket Description"
    //         placeholder="Add Ticket Description"
    //         onChange={(e) => setDescription(e.target.value)}
    //       ></textarea>
    //     </div>
    //     <div className="addTicket__buttons-area">
    //       <Link to={`/viewticket/${id}`}>
    //         <button
    //           type="button"
    //           onClick={postData}
    //           className="btn btn-theme-2 btn-dark btn-lg"
    //           data-bs-toggle="button"
    //         >
    //           Save
    //         </button>
    //       </Link>
    //       <Link to={"/"}>
    //         <button
    //           type="button"
    //           className="btn btn-theme-1 btn-dark btn-lg"
    //           data-bs-toggle="button"
    //         >
    //           Cancel
    //         </button>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}

export default EditTicket;
