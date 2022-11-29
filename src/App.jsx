import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
/* 
  1.전체상품페이지(대문페이지), 로그인, 상품 상세페이지
  1-1. 네비게이션바
  2.전체상품페이지(대문페이지) -전체상품을 쭉 나열
  3.로그인버튼 클릭하면 로그인 페이지 나옴
  4.상품디테일을 클릭-로그인이 안되어있을때는 로그인 페이지가 나옴
  5.로그인이 되어 있을때는 상품디테일 페이지를 볼 수 있음
  6.로그아웃기능 - 로그아웃 상태에선 다시 디테일페이지X, 
  로그인 페이지 나옴
  7.로그인, 로그아웃은 토글버튼
  8.상품 검색기능 
*/

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;

//Routes는 Route를 감싸주고, 스위치 해준다.
