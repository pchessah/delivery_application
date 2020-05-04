import React from "react";
import { Jumbotron, Button } from "reactstrap";

function SuccesfulOrder() {
  return (
    <div className="successfulDelivery">
      <Jumbotron style={{background:"transparent", width:"45rem"}}>
        <h1 className="display-3">Success!</h1>
        <p className="lead">Your product is on the way</p>
        <hr className="my-2" />
        <p>Thank you for choosing Easeria Deliveries</p>
        <p className="lead">
          <Button style={{width: "12rem"}}color="primary">Go Back Home</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default SuccesfulOrder;
