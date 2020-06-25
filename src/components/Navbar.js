import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import * as ROUTES from "../constants/routes"


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
              to={ROUTES.LANDING}
            >
              Home
            </Link>
              
            <Link
              style={{ padding: "1.5rem" }}
              className="nav-Link"
              to={ROUTES.SIGN_IN}
            >
              Log In
            </Link>
            <Link
              style={{ padding: "1.5rem" }}
              className="nav-Link"
              to={ROUTES.SIGN_UP}
            >
              Sign Up
            </Link>
            <Link
              style={{ padding: "1.5rem" }}
              className="nav-Link"
              to={ROUTES.SIGN_UP}
            >
              Be a courier
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
