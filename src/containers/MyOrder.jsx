import React from 'react';
import ShopingCart from '../components/ShopingCart';
import '../style/MyOrder.scss';

const MyOrder = () => {
    return (
        <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">My order</h1>
    
          <div className="my-order-content">
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          <ShopingCart />
          <ShopingCart />
          <ShopingCart />
          <ShopingCart />
        </div>
      </div>
    );
}

export default MyOrder;