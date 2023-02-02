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
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
          mt: 5,
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
              <TableCell align="left" width="60%">
                Improvement Idea
              </TableCell>
              <TableCell align="center" width="10%">
                Votes
              </TableCell>
              <TableCell align="right" width="10%">
                Status
              </TableCell>
              <TableCell align="left" width="10%"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketsList.map((ticket) => (
              <TableRow
                key={ticket.title}
                hover={true}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  navigate(`/viewticket/${ticket.id}`);
                }}
              >
                <TableCell>App Name</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell align="right">
                  <Stack direction="row">
                    {Math.floor(Math.random() * 10)}
                    <ThumbUpIcon sx={{ height: 15, ml: 1 }} />
                  </Stack>
                </TableCell>
                <TableCell align="right">{ticket.status}</TableCell>
                <TableCell>
                  <VisibilityIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default Search;
