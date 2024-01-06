import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function Detail(props) {
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

  let [alert, setAlert] = useState(true);
  let [type, setType] = useState(true);
  let { id } = useParams();
  let findProd = props.shose.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
