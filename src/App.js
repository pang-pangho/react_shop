import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/detail.js";

function App() {
  let [shose] = useState(data);
  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Sensy-closet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link href="#features">상의</Nav.Link>
            <Nav.Link href="#pricing">하의</Nav.Link>
            <Nav.Link href="#pricing">악세서리</Nav.Link>
            <Nav.Link href="#pricing" className="navLogin">
              로그인
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shose.map(function (a, i) {
                    return <ShoesContent shose={shose[i]} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shose={shose} />} />

        <Route path="/about" element={<div>어바웃 페이지입니다.</div>} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}
function ShoesContent(props, title) {
  return (
    <div className="col-md-4">
      <img src={props.shose.img} alt="shoseImg" width="80%" />

      <h4>{props.shose.title}</h4>
      <p>{props.shose.content}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보입니다.</h4>
    </div>
  );
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

export default App;
