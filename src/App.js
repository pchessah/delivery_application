import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/customer_login" component={Login} />
        <Route path ="/customer_signup" component={SignUp} />
        <Route path ="/confirm_delivery" component={ConfirmDelivery} />
        <Route path ="/size_selection" component={SizeSelection} />
        <Route path ="/order_confirmed" component={OrderConfirmed} />
      </Switch>
    </>
  );
}

export default App;
