import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.js";
import { addCart } from "../store.js";
import { useDispatch, useSelector } from "react-redux";

function Detail(props) {
  let dispatch = useDispatch();
  let { 재고, shose } = useContext(Context1);
  useEffect(() => {
    //mount, update시 코드 실행시켜주는 useEffect html렌더링 후 동작한다.
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);
  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  let [탭, 탭변경] = useState(0);
  let [alert, setAlert] = useState(true);
  let [type, setType] = useState(true);
  let { id } = useParams();
  let findProd = props.shose.find(function (x) {
    return x.id == id;
  });
  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);
  return (
    <div className={"container start" + fade2}>
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={findProd.img} width="100%" alt="shoe" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProd.title}</h4>
          <p>{findProd.content}</p>
          <p>{findProd.price}원</p>
          <button
            onClick={() => {
              dispatch(addCart(findProd));
              console.log(findProd);
            }}
            className="btn btn-danger"
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => 탭변경(0)}>
            상품정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => 탭변경(1)}>
            환불규정
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => 탭변경(2)}>
            문의사항
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} shose={props.shose} />
    </div>
  );
}

function TabContent({ 탭, shose }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [탭]);
  return (
    <div className={"start" + fade}>
      {
        [<div>{shose[0].title}</div>, <div>shose[1]</div>, <div>shose[2]</div>][
          탭
        ]
      }
    </div>
  );
}
export default Detail;
