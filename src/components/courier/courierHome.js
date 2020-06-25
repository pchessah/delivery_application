import React from "react";
import { Table } from 'reactstrap';

function courierHome() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}> 
      <section className="courierHome">
        <Table  hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Customer Contact</th>
              <th>Pick Up location</th>
              <th>Pick Up Time</th>
              <th>Destination</th>
              <th>Accept Order?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>0706165412</td>
              <td>LakeHub</td>
              <td>12.30</td>
              <td>Lolwe Estate</td>
              <td><button color="primary">Take Order</button></td>
            </tr>
           
          </tbody>
        </Table>
      </section>
     
    </div>
  );
}

export default courierHome;
