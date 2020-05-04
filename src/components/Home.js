import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="home_text">
        {" "}
        Get your goods delivered <br />
        at affordable prices to your convinient location. <br/>
       
        <Link to="customer_signup">
        <button>Get Started </button>
        </Link>
      </div>
   
    </div>
  );
}

export default Home;
