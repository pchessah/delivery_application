import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { FaMotorcycle, FaBabyCarriage, FaTruckPickup} from "react-icons/fa";

function DeliveryForm(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <div className="container deliveryform">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Motorcyle <FaMotorcycle/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              TukTuk <FaBabyCarriage/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Pick Up <FaTruckPickup/>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                  {/*|||||||||||||||||||||||||||||||||MORTOCYCLE||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
                  <form className="deliveryform1">
                  <div className="row">
                    <div className="col-25">
                      <label>Pick Up Location</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="select pick up location"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label>Destination</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="set destination"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label>Prefered pick up time</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="set destination"
                      />
                    </div>
                  </div>
                  <hr style={{backgroundColor: "grey"}}/>

                  <div className="row">
                    <div className="col-25">
                      <label><strong>How Much?    : </strong></label>
                    </div>
                    <div className="col-75">
                    <section  className= "totalDeliveryForm">
                      Ksh. 50 <FaMotorcycle/>
                    </section>
                    </div>
                  </div>

                  <div className="row submitButton" style={{padding:"0.4rem"}}>
                    <input
                      style={{ width: "20rem" }}
                      type="submit"
                      value="Make Order"
                    />
                  </div>
                </form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                    {/*|||||||||||||||||||||||||||||||||TUKTUK||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
                    <form className="deliveryform1">
                  <div className="row">
                    <div className="col-25">
                      <label>Pick Up Location</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="select pick up location"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label>Destination</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="set destination"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label>Prefered pick up time</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="set destination"
                      />
                    </div>
                  </div>
                  <hr style={{backgroundColor: "grey"}}/>

                  <div className="row">
                    <div className="col-25">
                      <label><strong>How Much?    : </strong></label>
                    </div>
                    <div className="col-75">
                    <section  className= "totalDeliveryForm">
                      Ksh. 200 <FaBabyCarriage/>
                    </section>
                    </div>
                  </div>

                  <div className="row submitButton" style={{padding:"0.4rem"}}>
                    <input
                      style={{ width: "20rem" }}
                      type="submit"
                      value="Make Order"
                    />
                  </div>
                </form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                    {/*|||||||||||||||||||||||||||||||||PICKUP||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
                <form className="deliveryform1">
                  <div className="row">
                    <div className="col-25">
                      <label>Pick Up Location</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="select pick up location"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label>Destination</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="set destination"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label>Prefered pick up time</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="set destination"
                      />
                    </div>
                  </div>
                  <hr style={{backgroundColor: "grey"}}/>

                  <div className="row">
                    <div className="col-25">
                      <label><strong>How Much?    : </strong></label>
                    </div>
                    <div className="col-75">
                    <section  className= "totalDeliveryForm">
                      Ksh. 510 <FaTruckPickup/>
                    </section>
                    </div>
                  </div>

                  <div className="row submitButton" style={{padding:"0.4rem"}}>
                    <input
                      style={{ width: "20rem" }}
                      type="submit"
                      value="Make Order"
                    />
                  </div>
                </form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default DeliveryForm;
