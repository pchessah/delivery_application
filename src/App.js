import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ConfirmDelivery from "./components/customer/ConfirmDelivery";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import DeliveryForm from "./components/customer/DeliveryForm";
import SuccesfulOrder from "./components/customer/SuccesfulOrder";
import courierHome from "./components/courier/courierHome";
import SignInPage from "./components/SignIn";
import SignUp from "./components/SignUp";
import * as ROUTES from "./constants/routes";
import Home_logged_in from "./components/Home_logged_in";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route
          exact
          path={ROUTES.CONFIRM_DELIVERY}
          component={ConfirmDelivery}
        />
        <Route
          exact
          path={ROUTES.CUSTOMER_DASHBOARD}
          component={CustomerDashboard}
        />
        <Route exact path={ROUTES.DELIVERY_FORM} component={DeliveryForm} />
        <Route
          exact
          path={ROUTES.SUCCESSFUL_ORDER}
          component={SuccesfulOrder}
        />
        <Route exact path={ROUTES.COURIER_HOME} component={courierHome} />
        <Route exact path={ROUTES.HOME} component={Home_logged_in}/>
      </Switch>
    </>
  );
}

export default App;
