import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/MyOrder.scss";
import close from "@icons/icon_close.png";

const ShopingCart = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product);
  }

  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt={product.tittle} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default ShopingCart;
