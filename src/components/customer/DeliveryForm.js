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
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { FaMotorcycle, FaBabyCarriage, FaTruckPickup } from "react-icons/fa";
import { places } from "./places";

function DeliveryForm(props) {
  const [priceMotorCycle, setPriceMotorCycle] = useState(null);
  const [priceTukTuk, setTukTuk] = useState(null);
  const [pricePick, setPricePick] = useState(null);

  const { className } = props;
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const toggleModal = () => setModal(!modal);

  const handleCalculatePrice = (e) => {
    const distance = e.target.value;
    let cash;
    let cashT;
    let cashP;
    if (distance < 3) {
      cash = 50;
      cashT = 40;
      cashP = 150;
      setPriceMotorCycle(cash);
      setTukTuk(cashT);
      setPricePick(cashP);
      localStorage.setItem("priceMotorcycle", JSON.stringify(cash));
      localStorage.setItem("priceFoot", JSON.stringify(cashT));
      localStorage.setItem("pricePick", JSON.stringify(cashP));
    } else if (distance > 3) {
      cash = Math.ceil(17 * (distance - 3) + 50);
      cashT = Math.ceil(15 * (distance - 3) + 40);
      cashP = Math.ceil(50 * (distance - 3) + 150);
      setPriceMotorCycle(cash);
      setTukTuk(cashT);
      setPricePick(cashP);
      localStorage.setItem("priceMotorcycle", JSON.stringify(cash));
      localStorage.setItem("priceFoot", JSON.stringify(cashT));
      localStorage.setItem("pricePick", JSON.stringify(cashP));
    }
  };

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
                    <div className="col-75">
                      <Input
                        type="select"
                        id="fname"
                        name="firstname"
                        placeholder="select pick up location"
                      >
                        <option>LakeHub, Okore Road</option>
                      </Input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <Input type="select" onChange={handleCalculatePrice}>
                        <option> Choose Destination </option>
                        {places.map(({ name, distance }, i) => (
                          <option key={i} value={distance}>
                            {name}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="pick up time"
                      />
                    </div>
                  </div>
                  <hr style={{ backgroundColor: "grey" }} />

                  <div className="row">
                    <div className="col-75">
                      <section className="totalDeliveryForm">
                        {priceMotorCycle} <FaMotorcycle />
                      </section>
                    </div>
                  </div>

                  <div className="row submitButton">
                    <div className="col-75">
                      <Button
                        color="success"
                        style={{ padding: "1rem", width: "19.2rem" }}
                        onClick={toggleModal}
                      >
                        Make Order
                      </Button>
                    </div>
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
                    <div className="col-75">
                    <Input
                        type="select"
                        id="fname"
                        name="firstname"
                        placeholder="select pick up location"
                      >
                        <option>LakeHub, Okore Road</option>
                      </Input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                    <Input type="select" onChange={handleCalculatePrice}>
                        <option> Choose Destination </option>
                        {places.map(({ name, distance }, i) => (
                          <option key={i} value={distance}>
                            {name}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </div>
                  <div className="row">
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
                    <div className="col-75">
                      <section className="totalDeliveryForm">
                        {priceTukTuk} <FaBabyCarriage />
                      </section>
                    </div>
                  </div>

                  <div
                    className="row submitButton"
                    style={{ padding: "0.4rem" }}
                  >
                    <Button
                      color="success"
                      style={{ padding: "1rem", width: "19.2rem" }}
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
                    <div className="col-75">
                    <Input
                        type="select"
                        id="fname"
                        name="firstname"
                        placeholder="select pick up location"
                      >
                        <option>LakeHub, Okore Road</option>
                      </Input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-75">
                    <Input type="select" onChange={handleCalculatePrice}>
                        <option> Choose Destination </option>
                        {places.map(({ name, distance }, i) => (
                          <option key={i} value={distance}>
                            {name}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </div>
                  <div className="row">
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
                    <div className="col-75">
                      <section className="totalDeliveryForm">
                        {pricePick}<FaTruckPickup />
                      </section>
                    </div>
                  </div>

                  <div
                    className="row submitButton"
                    style={{ padding: "0.4rem" }}
                  >
                    <Button
                      color="success"
                      style={{ padding: "1rem", width: "19.2rem" }}
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
