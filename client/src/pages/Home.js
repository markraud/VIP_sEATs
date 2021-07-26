import React from "react";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"




const Home = () => {

  // const textRef = useRef();

  // useEffect(()=> {
  //     init(textRef.current, {
  //         backDelay: 1500,
  //         backSpeed: 60,
  //         showCurser: true,
  //         strings: ["Welcome to VIP sEATs"]
  //     })
  //   },[])

  return (
    <div className="container">
      
      <Link exact to="/itemsAll">Go to all items</Link>
      {/* <h3 id="hometext"><span ref={textRef}></span></h3> */}
      
    </div>
  );
};

export default Home;
