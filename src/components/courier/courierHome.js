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
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section>profile</section>
    </div>
  );
}

export default courierHome;
