import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Join from "./components/Join";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="" exact={true} element={<Main />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/join" exact={true} element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
