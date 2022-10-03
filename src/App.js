import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.js";
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
              <Route path="/login" element={<LoginView />} />
              <Route path="/addticket" element={<AddTicket />} />
              <Route path="/viewticket" element={<ViewTicket />} />
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
