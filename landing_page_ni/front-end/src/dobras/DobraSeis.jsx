import React from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../img/professional-smiling-woman.jpg";

function DobraSeis() {
  return (
    <div id="sobremim" className="dobra">
      <div className="col-12 col-sm-10 mx-auto">
        <Row className="text-center mb-4">
          <h2 className="text-titulo">Sobre Mim</h2>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center mb-4">
            <img
              className="img-fluid rounded-4 "
              src={img}
              alt="Foto da Nicolle"
            />
          </Col>
          <Col md={6} className="mb-4">
            <p>
              Meu nome é Nicolle, sou antropóloga, macumbeira e taróloga.
              <br />
              Venho de uma família cearense, mas nasci em São Paulo. A cultura
              nordestina sempre esteve viva dentro de casa – na comida, na
              música e, claro, na fé.
              <br />
              Não vejo a espiritualidade como algo distante ou místico. Aprendi
              isso com minha família (de sangue e de santo).
              <br />A espiritualidade é viva. Ela tá no dia a dia guiando nossas
              escolhas.
              <br />E é por isso que minhas leituras são personalizadas e
              práticas. A gente entende como estão seus caminhos e vê os
              bloqueios pra te mostrar como agir daqui pra frente.
              <br />E tudo isso só é possível pelo axé da cigana Esmeralda e por
              anos de estudo de tarologia, numerologia, simbologia e outras
              práticas.
              <br />
              Cada leitura é feita com muito carinho e cuidado, pra que você
              tenha uma orientação que realmente faça sentido e seja aplicável
              na sua vida.
              <br />O tarot te ajuda a ver com clareza quais passos são
              necessários pra construir a vida que você quer.
              <br />
              Vamos juntas?
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DobraSeis;
