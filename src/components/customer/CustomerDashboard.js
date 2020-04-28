import React from "react";
import { Link } from "react-router-dom";

function CustomerDashboard() {
  return (
    <div className="mainDivCustomerDashboard">
      <h2>Customer Dashboard</h2>
      <div className="customerDashboard">
        <section className="pickupsection">
          <h3 style={{ paddingBottom: "1.3rem" }}>Delivery</h3>
          <Link to="/delivery_form">
            <div>
              <img
                style={{ borderRadius: "3rem" }}
                className="img-fluid"
                src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="delivery"
              />
            </div>
          </Link>
          <section style={{ marginTop: "6.5rem" }}>
            <ul style={{ fontSize: "1.3rem" }}>
              <li>Set pickup location</li>
              <li>Set prefered pick up time</li>
              <li>Choose delivery location</li>
              <li>Have them delivered to your prefered location</li>
            </ul>
          </section>
          <Link to="/delivery_form">
            <button>Set Pick Up location</button>
          </Link>
        </section>
        <section className="vendorsection">
          <h3 style={{ paddingBottom: "1.3rem" }}>View Vendors</h3>
          <Link to="/delivery_form">
            <div>
              <img
                style={{ borderRadius: "3rem" }}
                className="img-fluid"
                src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="vendor"
              />
            </div>
          </Link>
          <section style={{ marginTop: "6.5rem" }}>
            <ul style={{ fontSize: "1.3rem" }}>
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
