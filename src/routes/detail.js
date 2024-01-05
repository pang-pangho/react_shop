import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail(props) {
  let { id } = useParams();
  let findProd = props.shose.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
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
