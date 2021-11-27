import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../빌려줘.png";

function Join() {
  return (
    <div className="Body">
      <div className="Bar">
        <Link to="/" className="Link">
          <span>
            <img src={logo} id="logo" />
          </span>
          <span className="Name Shadow">빌려줘!</span>
        </Link>
      </div>
      <div className="InputBox">
        <div className="Label Shadow">회원가입</div>
        <form action="" method="post" className="Form">
          <input name="name" type="text" placeholder="이름" className="Input" />
          <br />
          <input name="id" type="text" placeholder="아이디" className="Input" />
          <br />
          <input
            name="pw"
            type="password"
            placeholder="비밀번호"
            className="Input"
          />
          <br />
          {/* <input name="pw" type="password" placeholder="비밀번호 확인" />
          <br /> */}
          <input type="submit" value="회원가입" className="Submit Shadow" />
        </form>
      </div>
    </div>
  );
}

export default Join;
