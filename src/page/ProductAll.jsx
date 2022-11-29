import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductAll() {
  const [productsList, setProductsList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url); //브라우저는 네트워크요청을 보내고 프로미스 객체가 반환
    let data = await response.json();
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        {productsList.map((menu) => (
          <ProductCard item={menu} />
        ))}
      </div>
    </div>
  );
}
