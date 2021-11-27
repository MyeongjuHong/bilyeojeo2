import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import goods from "../매물.png";
import Navbar from "./Navbar";

function Main() {
  return (
    <div>
      <head>
        <title>빌려줘!</title>
      </head>
      <body>
        <Navbar />
        <div className="Body">
          <div className="Notice">
            <div className="notice">당장 물건이 급할 때</div>
            <div className="notice">대여로 자원을 아껴보자</div>
            <h1 className="notice Shadow">빌려줘!</h1>
          </div>
          <div className="Goods">
            <h1 className="Shadow" style={{ margin: "30px" }}>
              인기 대여 목록
            </h1>
            <div className="Area">
              <span className="List Shadow">흥업</span>
              <span className="List Shadow">무실</span>
              <span className="List Shadow">단계</span>
              <span className="List Shadow">단구</span>
            </div>
            <img src={goods} id="goods" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Main;
