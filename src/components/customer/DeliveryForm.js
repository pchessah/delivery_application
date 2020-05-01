import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { FaMotorcycle, FaBabyCarriage, FaTruckPickup } from "react-icons/fa";

function DeliveryForm(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const toggleModal = () => setModal(!modal);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      {/*|||||||||||||||||||||||||||||||||||||||||||||||||||\MODAL SUCCESS||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
      <div>
        <Modal isOpen={modal} toggle={toggleModal} className={className}>
          <ModalHeader toggle={toggleModal}>Confrim</ModalHeader>
          <ModalBody>Would You like to confirm Order?</ModalBody>
          <ModalFooter>
            <Link to="/successful_order">
              <Button color="success" onClick={toggleModal}>
                Yes
              </Button>{" "}
            </Link>
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className="container deliveryform">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Motorcyle <FaMotorcycle />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              TukTuk <FaBabyCarriage />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Pick Up <FaTruckPickup />
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
                  <hr style={{ backgroundColor: "grey" }} />

                  <div className="row">
                    <div className="col-25">
                      <label>
                        <strong>How Much? : </strong>
                      </label>
                    </div>
                    <div className="col-75">
                      <section className="totalDeliveryForm">
                        Ksh. 50 <FaMotorcycle />
                      </section>
                    </div>
                  </div>

                  <div
                    className="row submitButton"
                    style={{ padding: "0.4rem" }}
                  >
                    <Button
                      color="success"
                      style={{ padding: "1.2rem", width: "20rem" }}
                      onClick={toggleModal}
                    >
                      Make Order
                    </Button>
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
                  <hr style={{ backgroundColor: "grey" }} />

                  <div className="row">
                    <div className="col-25">
                      <label>
                        <strong>How Much? : </strong>
                      </label>
                    </div>
                    <div className="col-75">
                      <section className="totalDeliveryForm">
                        Ksh. 200 <FaBabyCarriage />
                      </section>
                    </div>
                  </div>

                  <div
                    className="row submitButton"
                    style={{ padding: "0.4rem" }}
                  >
                    <Button
                      color="success"
                      style={{ padding: "1.2rem", width: "20rem" }}
                      onClick={toggleModal}
                    >
                      Make Order
                    </Button>
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
                  <hr style={{ backgroundColor: "grey" }} />

                  <div className="row">
                    <div className="col-25">
                      <label>
                        <strong>How Much? : </strong>
                      </label>
                    </div>
                    <div className="col-75">
                      <section className="totalDeliveryForm">
                        Ksh. 510 <FaTruckPickup />
                      </section>
                    </div>
                  </div>

                  <div
                    className="row submitButton"
                    style={{ padding: "0.4rem" }}
                  >
                    <Button
                      color="success"
                      style={{ padding: "1.2rem", width: "20rem" }}
                      onClick={toggleModal}
                    >
                      Make Order
                    </Button>
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