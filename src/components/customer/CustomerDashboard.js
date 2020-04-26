import React from "react";
import { Link } from "react-router-dom";

function CustomerDashboard() {
  return (
    <div className="mainDivCustomerDashboard">
      <h2>Customer Dashboard</h2>
      <div className="customerDashboard">
        <section className="pickupsection">
          <h3 style={{paddingBottom:"1.3rem"}}>Delivery</h3>
          <Link to="/">
            <div></div>
          </Link>
          <section style={{ marginTop: "2rem" }}>
            <ul>
              <li>Set pickup location</li>
              <li>Set prefered pick up time</li>
              <li>Choose delivery location</li>
              <li>Have them delivered to your prefered location</li>
            </ul>
          </section>
          <button>Set Pick Up location</button>
        </section>
        <section className="vendorsection">
          <h3 style={{paddingBottom:"1.3rem"}}>View Vendors</h3>
          <Link to="/">
            <div></div>
          </Link>
          <section style={{ marginTop: "2rem" }}>
            <ul>
              <li>Select Items from vendors</li>
              <li>Pay for items</li>
              <li>Choose delivery location</li>
              <li>Have them delivered to your prefered location</li>
            </ul>
          </section>
          <button>View the vendors</button>
        </section>
      </div>
    </div>
  );
}

export default CustomerDashboard;
