import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

function Home() {
  return (
    <div className="Home">
      <div className="home_text">
        Get your goods delivered <br />
        at affordable prices to your convinient location. <br />
        <Link to={ROUTES.SIGN_UP}>
          <button>Get Started </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
