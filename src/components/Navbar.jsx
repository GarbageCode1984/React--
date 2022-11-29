import React from "react";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import "./Navbar.scss";

export default function Navbar() {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M MOME",
    "스포츠",
    "Sale",
    "지속가능성",
  ];

  return (
    <>
      <div className="login_btn">
        <BsPersonCircle /> <span>로그인</span>
      </div>
      <h1>
        <img width={90} src="./img/Logo.png" alt="H&M" />
      </h1>
      <nav>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </nav>
      <div className="search">
        <BsSearch />
        <input type="text" placeholder="제품검색" />
      </div>
    </>
  );
}
