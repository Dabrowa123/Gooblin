import { React, useState, useEffect } from "react";
import { fetchTicketsArray } from "../../requests.js";
import { Link } from "react-router-dom";
// import "./Search.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

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
      <Stack direction="row" justifyContent="center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "70%",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Tickets"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
      {/* <Stack direction="row">
        <FormControl sx={{ width: "100%" }}>
          <InputLabel htmlFor="component-outlined">Ticket's Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            type="text"
            label="Ticket's Name"
            color="info"
          />
        </FormControl>
        <Button
          variant="outlined"
          size="large"
          sx={{ ml: 2 }}
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Stack> */}

      <div>
        <ol class="list-group list-group-numbered">
          {ticketsList.map((ticket) => (
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  {ticket.title}
                  <span class="badge bg-status-active rounded-pill">
                    {ticket.status}
                  </span>
                </div>
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
