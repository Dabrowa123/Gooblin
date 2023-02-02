import React, { useState } from "react";
import "./AddTicket.css";
import { sendPutRequest } from "../../requests.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function AddTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const putData = async () => {
    const data = await { title: `${title}`, description: `${description}` };

    await sendPutRequest(data);
    await navigate(`/`);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Add Gooblin
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Brief Title"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Application Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Improvement Description"
            multiline
            rows={7}
            sx={{ width: "100%" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ mr: 2 }} onClick={putData}>
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate(`/`);
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddTicket;
