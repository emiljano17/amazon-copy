import React, { useState } from "react";

import { useStateValue } from "../StateProvider";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const [mouseEnter, setMouseEnter] = useState(false);

  const mouseEnterHandler = () => {
    setMouseEnter(true);
  };

  const mouseLeaveHandler = () => {
    setMouseEnter(false);
  };

  const addToBasket = () => {
    //dispatch sth
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={mouseEnter ? "product productFlex" : "product"}
    >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="product" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
