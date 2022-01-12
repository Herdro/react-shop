import React from "react";
import "../styles/MyOrder.scss";
import close from "@icons/icon_close.png";

const ShopingCart = ({ product }) => {
  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt={product.tittle} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" />
    </div>
  );
};

export default ShopingCart;
