import React from "react";
import ProductCard from "@components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/Cards.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const CardContainer = () => {
  const products = useGetProducts(API);
  
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => (
            <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
