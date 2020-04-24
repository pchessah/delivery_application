import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";


function NavigationBar() {

  return (
    <>
      <Navbar className= "whole_navbar" collapseOnSelect expand="lg" bg="dark" variant="light">
        <Navbar.Brand className= "nav_brand" to="/">Easeria Deliveries</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="toggle_controls" id="responsive-navbar-nav toggle_controls">
          <Nav className="mr-auto">
           
          </Nav>
          <Nav>
          <Link
              style={{ padding: "1.5rem" }}
              className="nav-Link"
              to="/"
            >
              Home
            </Link>
              
            <Link
              style={{ padding: "1.5rem" }}
              className="nav-Link"
              to="/customer_login"
            >
              Log In
            </Link>
            <Link
              style={{ padding: "1.5rem" }}
              className="nav-Link"
              to="/customer_signup"
            >
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
