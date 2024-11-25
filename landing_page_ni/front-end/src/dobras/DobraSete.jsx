// Import necessary libraries and components
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import faq from "../img/faq.svg";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DobraSete() {
  return (
    <>
      <div id="faq" className="dobra">
        <div className="col-12 col-sm-10 mx-auto">
          <Row className="text-center mb-4">
            <h2 className="text-titulo">FAQ</h2>
          </Row>
          <Accordion className="custom-accordion">
            <Row className="justify-content-center">
              <Col xs={12} md={6} className="accordion-col">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      “Preciso acreditar no tarot pra ele funcionar?”
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Não, porque o tarot funciona como um espelho da sua vida:
                      reflete suas emoções, obstáculos e caminhos - independente
                      da sua religião/crença. O importante é estar aberta para
                      ouvir as mensagens da sua espiritualidade!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      “Como me preparar para a consulta?”
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Se quiser, pode reservar uns minutos antes para pensar
                      sobre suas questões. Mas não precisa de nada elaborado,
                      não!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      “E se eu não concordar com algo que saiu nas cartas?”
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Tá tudo bem! Numa leitura a gente acessa as mensagens da
                      sua espiritualidade para te guiar, mas você tem
                      livre-arbítrio para tomar decisões. Você não vai ser
                      punido por não seguir os conselhos do tarot!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">“Em que o tarot pode ajudar?”</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Relacionamentos, carreira, projetos pessoais,
                      espiritualidade... tudo que você sentir que precisa de uma
                      orientação dos seus mentores espirituais.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
              <Col xs={12} md={6} className="accordion-col">
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      “Como saber se devo jogar tarot?”
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Se você está passando por um momento de dúvida ou sente
                      que tem algo fora do lugar, o tarot pode te ajudar. A
                      gente pode criar uma consulta só pra você, pra ver tudo
                      com clareza e profundidade. Me conta o que precisa, e
                      sugiro uma leitura que faça sentido pra sua busca.
                      enfrentando um obstáculo ou querendo entender melhor seus
                      sentimentos e escolhas, o tarot pode ajudar a trazer
                      clareza. Se sentir que algo em sua vida precisa de
                      orientação ou reflexão mais profunda, esse pode ser o
                      sinal para jogar. Tá com algo empacado? Quer saber pra
                      onde as energias estão te levando? A gente pode criar uma
                      consulta só pra você, pra ver tudo com clareza e detalhe.
                      Me conta o que precisa, e sugiro uma leitura que faça
                      sentido pra sua busca.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      “Como funciona a leitura online?”
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      São três modos de leitura: por vídeo com horário marcado,
                      por WhatsApp com horário marcado ou pelo WhatsApp sem
                      horário marcado. As leituras por vídeo têm uma taxa
                      adicional de 50$. Independente do formato, vamos construir
                      uma leitura para o que você precisa, respeitando suas
                      preferências e disponibilidade.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      "A leitura online funciona igual a presencial?"
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Sim! Todas as minhas leituras são online, e elas têm a
                      mesma profundidade que uma consulta presencial. As
                      mensagens da espiritualidade fluem independentemente da
                      distância.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="icon-text">
                    <img src={faq} alt="FAQ icon" className="faq-icon" />
                    <h6 className="fw-bold">
                      "O tarot responde sobre saúde ou gravidez?"
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-question">
                      Não faço esse tipo de leitura - esses assuntos devem ser
                      tratados por profissionais especializados. O tarot é ótimo
                      para te ajudar a lidar com os efeitos
                      emocionais/energéticos que surgem a partir dessas
                      questões, mas não substitui o cuidado médico.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
            </Row>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default DobraSete;
