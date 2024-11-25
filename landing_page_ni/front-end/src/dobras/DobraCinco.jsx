import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import time from "../img/time.svg";
import local from "../img/local.svg";
import lupa from "../img/lupa.svg";
import voo from "../img/voo.svg";

function DobraCinco() {
  return (
    <>
      <div id="comoagendar" className="dobra">
        <div className="col-12 col-sm-10 mx-auto">
          <Row className="text-center mb-4">
            <h2 className="text-titulo">Serviços</h2>
          </Row>

          <Row className="justify-content-center align-items-stretch">
            {[
              {
                img: lupa,
                title: "Escolha o Tipo de Consulta",
                description:
                  "Com qual leitura você se sente mais confortável: Personalizada, Perguntas Livres ou Mandala?",
              },
              {
                img: local,
                title: "Escolha o Tipo de Atendimento",
                description:
                  "São três opções: vídeo com horário marcado, WhatsApp com horário marcado, ou WhatsApp sem horário marcado. Leituras por vídeo têm uma taxa adicional de R$80.",
              },
              {
                img: time,
                title: "Escolha o Data e Horário",
                description:
                  "Para consultas com horário marcado, selecione o dia e o horário na minha agenda. Se preferir só o dia (sem horário fixo), escolha a data para receber a leitura.",
              },
              {
                img: voo,
                title: "Chamar no WhatsApp",
                description:
                  "Para Leituras Personalizadas ou Mandalas, você será redirecionada para o WhatsApp. Me conta qual você escolheu, e a gente constrói sua consulta!",
              },
            ].map((card, index) => (
              <Col key={index} className="col-card">
                <div className="card-gray">
                  <div className="card-content">
                    <div className="card-icon">
                      <img src={card.img} alt={card.title} />
                    </div>
                    <div className="card-text">
                      <h5 className="titulo-sec">{card.title}</h5>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            <Row>
              {" "}
              <a
                href="https://web.whatsapp.com/"
                className="button-orange-card  pt-2 mt-2"
              >
                Saiba Mais
              </a>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DobraCinco;
