import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../빌려줘.png";

function Navbar() {
  return (
    <div className="Header">
      <div className="CenterBar">
        <span className="HomeBar">
          <Link to="/" className="Link">
            <img src={logo} id="logo" />
            <span className="Name Shadow">빌려줘</span>
          </Link>
        </span>
        <Link to="/login">
          <button className="Login Shadow">로그인</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
