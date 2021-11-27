import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../빌려줘.png";

function Login() {
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
        <div className="Label Shadow">로그인</div>
        <form action="" method="post" className="Form">
          <input name="id" type="text" placeholder="아이디" className="Input" />
          <br />
          <input
            name="pw"
            type="password"
            placeholder="비밀번호"
            className="Input"
          />
          <br />
          <input type="submit" value="로그인" className="Submit Shadow" />
        </form>
        <div className="RecJoin">
          계정이 없으신가요? <Link to="/join">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
