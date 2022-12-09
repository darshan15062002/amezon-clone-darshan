import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__imege" src="\banner.jpg" alt="" />
      </div>
      <div className="home__Row">
        <Product
        id={1}
          title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
          image="product1.jpg"
          rating={3}
          price={22.99}
        />
        <Product
        id={2}
          title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
          image="product2.jpg"
          rating={4}
          price={15.99}
        />
      </div>
      <div className="home__Row">
        <Product
        id={3}
          title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
          image="product3.jpg"
          rating={4}
          price={15.99}
        />
        <Product
        id={4}
          title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
          image="product4.jpg"
          rating={4}
          price={15.99}
        />
        <Product
        id={5}
          title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
          image="product5.jpg"
          rating={4}
          price={15.99}
        />
      </div>
      <div className="home__Row">
        <Product
        id={6}
          title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
          image="product6.jpg"
          rating={5}
          price={199.99}
        />
      </div>
    </div>
  );
}

export default Home;
