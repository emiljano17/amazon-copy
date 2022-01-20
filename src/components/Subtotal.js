import React from "react";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) => {
    let price = 0;

    basket.map((item) => {
      return (price = price + item.price);
    });

    return price;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
