import React from 'react';
import ProductCard from '../components/ProductCard';
import '../style/Cards.scss';

const CardContainer = () => {
    return (
        <section class="main-container">
                <div class="cards-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
        </section>
    );
}

export default CardContainer;