import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav/Nav.js";
import Search from "./Components/Search/Search.js";
import Login from "./Components/Login/Login.js";
import AddTicket from "./Components/AddTicket/AddTicket.js";
import ViewTicket from "./Components/ViewTicket/ViewTicket.js";
import EditTicket from "./Components/EditTicket/EditTicket.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addticket" element={<AddTicket />} />
              <Route path="/viewticket/:id" element={<ViewTicket />} />
              <Route path="/editticket/:id" element={<EditTicket />} />
            </Routes>
          </div>
        </main>

        <footer>
          <div className="container"></div>
        </footer>
      </Router>
    </>
  );
}

export default App;
