import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gooblin
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              navigate(`/addTicket`);
            }}
          >
            Add Gooblin
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    // <nav className="nav">
    //   <div className="container">
    //     <button
    //       type="button"
    //       className="btn btn-theme-2 btn-dark btn-lg"
    //       data-bs-toggle="button"
    //     >
    //       Log In <i class="bi bi-box-arrow-in-right"></i>
    //     </button>
    //     <Link to={`/addTicket`}>
    //       <button
    //         type="button"
    //         className="btn btn-theme-1 btn-outline-dark btn-lg"
    //       >
    //         Create Ticket <i class="bi bi-plus-circle"></i>
    //       </button>
    //     </Link>
    //   </div>
    // </nav>
  );
}

export default Nav;
