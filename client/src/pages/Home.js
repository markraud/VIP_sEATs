import React from "react";


import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container">
      
      <Link exact to="/itemsAll">Go to all items</Link>
      
    </div>
  );
};

export default Home;
