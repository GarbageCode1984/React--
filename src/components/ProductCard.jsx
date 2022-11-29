import React from "react";

export default function ProductCard({ item }) {
  return (
    <div>
      <img src={item?.img} alt="" />
      <div>MD추천</div>
      <div>신제품</div>
      <div>{item?.title}</div>
      <div>￦{item?.price}</div>
    </div>
  );
}
