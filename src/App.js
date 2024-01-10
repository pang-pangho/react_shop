import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { createContext, useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";
export let Context1 = createContext();
function App() {
  let [재고] = useState([10, 11, 12]);

  let [shose, setShose] = useState(data);
  let [count, setCount] = useState(1);
  let [load, setLoad] = useState(true);
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
            <Nav.Link
              onClick={() => {
                navigate("./Cart");
              }}
            >
              장바구니
            </Nav.Link>
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
                    return (
                      <ShoesContent shose={shose[i]} navigate={navigate} />
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  setCount(count + 1);
                  if (count === 1) {
                    {
                      load && <Loading />;
                    }

                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        let newShoes = result.data;

                        // 기존 정보와 새로운 정보를 합칩니다.
                        let updatedShoes = [...shose, ...newShoes];

                        // 합쳐진 정보로 상태를 업데이트합니다.
                        setLoad(!load);
                        setShose(updatedShoes);
                        console.log(result.data);
                        console.log(shose);
                      })
                      .catch(() => {
                        console.log("실패하였습니다.");
                      });
                  } else if (count === 2) {
                    {
                      load && <Loading />;
                    }
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        let newShoes = result.data;

                        // 기존 정보와 새로운 정보를 합칩니다.
                        let updatedShoes = [...shose, ...newShoes];
                        setLoad(!load);
                        // 합쳐진 정보로 상태를 업데이트합니다.
                        setShose(updatedShoes);
                        console.log(result.data);
                        console.log(shose);
                      })
                      .catch(() => {
                        console.log("실패하였습니다.");
                      });
                  } else if (count <= 3) {
                    alert("더 이상 상품이 없습니다.");
                  }
                }}
              >
                버튼
              </button>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shose }}>
              <Detail shose={shose} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<div>어바웃 페이지입니다.</div>} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}
function ShoesContent(props) {
  const { id, img, title, content } = props.shose;
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="col-md-4" onClick={handleImageClick}>
      <img src={img} alt="shoseImg" width="80%" />
      <h4>{title}</h4>
      <p>{content}</p>
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
function Loading() {
  return (
    <>
      <div>상품을 불러오는 중 입니다. </div>
    </>
  );
}

export default App;
