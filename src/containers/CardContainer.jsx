import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Cards.scss";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products";

const CardContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, [])

  return (
    <section class="main-container">
      <div class="cards-container">
        {products.map(product => (
            <ProductCard />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
