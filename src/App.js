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
import CustomerDashboard from "./components/customer/CustomerDashboard";
import DeliveryForm from "./components/customer/DeliveryForm";
import SuccesfulOrder from "./components/customer/SuccesfulOrder";

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
        <Route path="/customer_dashboard" component={CustomerDashboard}/>
        <Route path="/delivery_form" component={DeliveryForm}/>
        <Route path="/successful_order" component={SuccesfulOrder}/>
      </Switch>
    </>
  );
}

export default App;
