import React from "react";

import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31//img17/AmazonPay/PDAYILM/v1/01.jpg"
          alt="banner"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item, idx) => {
            return <CheckoutProduct item={item} key={idx} />;
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
