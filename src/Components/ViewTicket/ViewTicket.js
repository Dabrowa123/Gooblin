import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTickedDetails, deleteRequest } from "../../requests.js";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

  const navigate = useNavigate();

  const deleteTicket = async () => {
    await deleteRequest(ticketDetails.id);
    await navigate(`/`);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            {ticketDetails.title}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom>
            Application Name
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mb: 5 }}>
            {ticketDetails.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate(`/`);
            }}
          >
            Go Back
          </Button>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate(`/editticket/${ticketDetails.id}`);
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ mr: 2 }}
            onClick={deleteTicket}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewTicket;
