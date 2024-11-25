import React, { useState } from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import fluxo from "../img/fluxo.png";


function DobraQuatro() {

  return (
    <div id="comoescolher" className="dobra">
      <div className="col-12 col-sm-10 mx-auto">
        <Row className="text-center mb-4">
          <h2 className="text-titulo">Como Escolher</h2>
        </Row>

        <Row className="justify-content-center align-items-stretch">
            <Col
              md={4}
              className="d-flex justify-content-center mb-4"
            >
              
                <div className="text-center">
                  <img className="" src={fluxo}  />

                  
                </div>

            </Col>
        </Row>

      </div>
    </div>
  );
}

export default DobraQuatro;
