import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/customer/LogIn";
import SignUp from "./components/customer/SignUp";
import ConfirmDelivery from "./components/customer/ConfirmDelivery";
import SizeSelection from "./components/customer/SizeSelection";
import OrderConfirmed from "./components/customer/OrderConfirmed";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customer_login" component={Login} />
        <Route path="/customer_signup" component={SignUp} />
        <Route path="/confirm_delivery" component={ConfirmDelivery} />
        <Route path="/size_selection" component={SizeSelection} />
        <Route path="/order_confirmed" component={OrderConfirmed} />
      </Switch>
    </>
  );
}

export default App;
