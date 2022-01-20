import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

import "./CheckoutProduct.css";

function CheckoutProduct({ item, idx }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };

  return (
    <div key={idx} className="checkout__singleItem">
      <img src={item.image} alt={item.title} />
      <div className="checkout__description">
        <p>{item.title}</p>
        <CurrencyFormat
          renderText={(value) => (
            <strong className="checkout__descriptionPrice">{`${value}`}</strong>
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
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
