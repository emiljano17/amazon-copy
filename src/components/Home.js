import React from "react";

import Product from "./Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          className="home__image"
          alt="homepage_image"
        />
        <div className="home__row">
          <Product
            id="123123123"
            title="The lean startup"
            price={28.67}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={5}
          />
          <Product
            id="123321123"
            title="Smart Watch,Fitness Tracker Watch with Heart Rate Blood Pressure Monitor IPX65 Waterproof Bluetooth Smartwatch Sports Activity Tracker Smart Bracelet for Men Women Kids Compatible iPhone Android"
            price={299.99}
            image="https://m.media-amazon.com/images/I/41ARYWCev7L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="445533322"
            title="Hanes Women's EcoSmart Crewneck Sweatshirt"
            price={24.99}
            image="https://m.media-amazon.com/images/I/71u0u-nkM4L._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="22400055050"
            title="Nike Womens Pullover Fleece Hoodie"
            price={45.21}
            image="https://m.media-amazon.com/images/I/51c17snvL8L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="2345523333221"
            title="Legendary Whitetails Women's Outfitter Hoodie"
            price={35.55}
            image="https://m.media-amazon.com/images/I/81Yszs-QHXL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="000505588383"
            title="Resistance Bands Set 13 pcs, 6 Tube Stackable Up to 210 lbs Adjustable, Exercise Bands Fitness Workout with Wide Handles, Door Anchor, Steel Clasp, Carry Bag, Ankle Straps for Home Gym Outdoor Travel"
            price={430}
            image="https://m.media-amazon.com/images/I/714LJ8F-cCL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
