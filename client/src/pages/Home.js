import React from "react";


import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div id='link' className="container">
      
      <Link exact to="/itemsAll">Checkout our Menu</Link>
      <div>
        <h3 id='home' >
        Welcome to your VIP sEATs! Order your food, drinks, and merchandise from the comfort of your seat without missing a single moment of the game. Please sign in and select your seat at the top of the page.
        </h3>
      </div>
      
    </div>

  );
};

export default Home;