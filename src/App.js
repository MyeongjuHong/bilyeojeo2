import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import customAxios from "./customAcios";
import Main from "./components/Main";
import Login from "./components/Login";
import Join from "./components/Join";
import "./App.css";

function App() {
  // IP주소 변수 선언
  const [ip, setIp] = useState("");

  // IP주소 값을 설정합니다.
  function callback(data) {
    setIp(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(() => {
    // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
    customAxios("/ip", callback);
  }, []);

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
