import React, { useState } from "react";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import star from "../img/star.svg";
import rosa from "../img/rosa.svg";
import sol from "../img/sol.svg";
import {
  LeituraPersonalizadaModal,
  PerguntasLivresModal,
  MandalaModal,
} from "./modal.jsx";

function DobraTres() {
  const [modalShowPerguntas, setModalShowPerguntas] = useState(false);
  const [modalShowLeitura, setModalShowLeitura] = useState(false);
  const [modalShowMandala, setModalShowMandala] = useState(false);

  return (
    <div  className="dobra">
      <div className="col-12 col-sm-10 mx-auto">
        <Row className="text-center mb-4">
          <h2 id="servicos" className="text-titulo">Serviços</h2>
        </Row>

        <Row className="justify-content-center align-items-stretch">
          {[
            {
              img: star,
              title: "Perguntas Livres",
              description:
                "Aqui você tem uma hora para fazer todas as perguntas que quiser ao tarot.",
              price: "R$ 300,00",
              onClick: () => setModalShowPerguntas(true),
            },
            {
              img: rosa,
              title: "Leitura Personalizada",
              description:
                "Aqui a gente foca em uma área ou questão e aprofundamos nela.",
              price: "R$ 350,00",
              onClick: () => setModalShowLeitura(true),
            },
            {
              img: sol,
              title: "Mandala",
              description:
                "Um panorama das principais áreas da sua vida — pra quem tá se sentindo perdido.",
              price: "R$ 500,00",
              onClick: () => setModalShowMandala(true),
            },
          ].map((card, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex justify-content-center "
            >
              <div className="card-gray  d-flex flex-column justify-content-between text-center">
                <div className="d-flex flex-column justify-content-between h-100">
                  <img
                    className="mx-auto"
                    src={card.img}
                    alt={card.title}
                  />
                  <h5 className="titulo-sec">{card.title}</h5>
                  <p className="card-description">
                    {card.description}{" "}
                    <span
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={card.onClick}
                    >
                      Saber mais...
                    </span>
                  </p>
                  <div className="d-flex justify-content-center align-items-end flex-grow-1">
                    <p className="h4 fw-bold card-price">{card.price}</p>
                  </div>
                </div>
                <a
                  href="https://web.whatsapp.com/"
                  className="button-orange-card  mx-auto mt-3 d-block"
                >
                  Agendar
                </a>
              </div>
            </Col>
          ))}
        </Row>

        <PerguntasLivresModal
          show={modalShowPerguntas}
          onHide={() => setModalShowPerguntas(false)}
        />
        <LeituraPersonalizadaModal
          show={modalShowLeitura}
          onHide={() => setModalShowLeitura(false)}
        />
        <MandalaModal
          show={modalShowMandala}
          onHide={() => setModalShowMandala(false)}
        />
      </div>
    </div>
  );
}

export default DobraTres;
