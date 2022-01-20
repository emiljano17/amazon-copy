import React from "react";

import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

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
            return (
              <div key={idx} className="checkout__singleItem">
                <img src={item.image} alt={item.title} />
                <div className="checkout__description">
                  <p>{item.title}</p>
                  <CurrencyFormat
                    renderText={(value) => (
                      <strong className="checkout__descriptionPrice">
                        {`${value}`}
                      </strong>
                    )}
                    decimalScale={2}
                    value={item.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />

                  <div className="checkout__descriptionRating">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => {
                        return <p key={i}>⭐</p>;
                      })}
                  </div>
                  <button>Remove from Basket</button>
                </div>
              </div>
            );
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
