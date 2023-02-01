import { React, useState, useEffect } from "react";
import { fetchTicketsArray } from "../../requests.js";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

function Search() {
  const [ticketsList, setTicketsList] = useState([]);

  useEffect(() => {
    fetchAndRenderTicketsList();
  }, []);

  const fetchAndRenderTicketsList = async () => {
    const data = await fetchTicketsArray();
    setTicketsList(data);
  };

  const navigate = useNavigate();

  return (
    <Stack alignItems="center">
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          mb: 3,
          width: "100%",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "70%",
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search Gooblins"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>

      <TableContainer component={Paper} sx={{ width: "70%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" width="10%">
                Application
              </TableCell>
              <TableCell align="left" width="80%">
                Improvement Idea
              </TableCell>
              <TableCell align="right" width="10%">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketsList.map((ticket) => (
              <TableRow
                key={ticket.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  navigate(`/viewticket/${ticket.id}`);
                }}
              >
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell align="right">{ticket.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default Search;
