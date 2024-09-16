// Import necessary libraries and components
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * A React component that displays a set of monthly plans and an offer for custom technology development.
 *
 * The component uses Bootstrap for layout and styling and is structured into several sections, including:
 * 1. A header with a title
 * 2. A section displaying monthly plans with three options
 * 3. An offer section for custom technology development
 *
 */
function DobraCinco() {
  return (
    <>
      {/* Budget section */}
      <div id="orcamento" className="dobra-color">
        <div className="col-12 col-sm-10 mx-auto">
          <Row id="" className="dobra align-content-center">
            {/* Section title */}
            <Row className="text-titulo g-0 text-center">
              <h2 className="text-titulo pb-4">Escolha um Plano</h2>
            </Row>

            {/* Monthly plans section */}
            <div
              className="pt-4 bg-white rounded-4 justify-content-center shadow"
              id="item5"
            >
              <div className="justify-content-center align-items-center">
                <h2 className="pb-4 blue text-center">Planos Mensais</h2>
              </div>

              <Row className="justify-content-center align-items-center">
                {/* LITE Plan */}
                <Col md={4} className="d-flex justify-content-center">
                  <div className="card-gray d-flex flex-column justify-content-between h-100">
                    <Row className="flex-fill d-flex align-items-center justify-content-center">
                      <div className="blue text-center">
                        <p className="h3 fw-bold mb-0">
                          LITE <br />
                        </p>
                        <p className="fs-5 mb-0">
                          3 Estudos <br />
                          5 Análises <br />
                        </p>
                        <p className="mb-0">R$ 10.800,00</p>
                      </div>
                    </Row>
                    <Row className="pb-4 justify-content-center mt-auto">
                      <a
                        href="https://web.whatsapp.com/"
                        className="button-blue-card shadow w-50 pt-2 mt-2 d-block"
                      >
                        Saiba Mais
                      </a>
                    </Row>
                  </div>
                </Col>

                {/* PROMO Plan */}
                <Col md={4} className="d-flex justify-content-center">
                  <div className=" card-gray d-flex flex-column justify-content-between h-100">
                    <Row className="flex-fill d-flex align-items-center justify-content-center">
                      <div className="blue text-center">
                        <p className="h3 fw-bold mb-0">
                          PROMO <br />
                        </p>
                        <p className="fs-5 mb-0">
                          5 Estudos <br />
                          10 Análises <br />
                        </p>
                        <p className="mb-0">R$ 15.600,00</p>
                      </div>
                    </Row>
                    <Row className="pb-4 justify-content-center mt-auto">
                      <a
                        href="https://web.whatsapp.com/"
                        className="button-blue-card shadow w-50 pt-2 mt-2 d-block"
                      >
                        Saiba Mais
                      </a>
                    </Row>
                  </div>
                </Col>

                {/* PRO Plan */}
                <Col md={4} className="d-flex justify-content-center">
                  <div className="card-gray d-flex flex-column justify-content-between h-100">
                    <Row className="flex-fill d-flex align-items-center justify-content-center">
                      <div className="blue text-center">
                        <p className="h3 fw-bold mb-0">
                          PRO <br />
                        </p>
                        <p className="fs-5 mb-0">
                          10 Estudos <br />
                          15 Análises <br />
                        </p>
                        <p className="mb-0">R$ 28.200,00</p>
                      </div>
                    </Row>
                    <Row className="pb-4 justify-content-center mt-auto">
                      <a
                        href="https://web.whatsapp.com/"
                        className="button-blue-card shadow w-50 pt-2 mt-2 d-block"
                      >
                        Saiba Mais
                      </a>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Custom development offer section */}
            <Row className="g-0 pt-4 justify-content-center">
              <Col
                xs={12}
                md={6}
                className="g-0 bg-blue p-4 rounded-4 white w-100 mx-auto d-flex flex-column align-items-center"
              >
                <Row className="align-items-center w-100">
                  <Col
                    xs={12}
                    md={8}
                    className="text-center text-md-start mb-4 mb-md-0"
                  >
                    <p className="h3">
                      Quer desenvolver uma tecnologia sob encomenda?
                    </p>
                    <p>
                      Provas de conceito (POC) a partir de R$25.500,00. Fale com
                      nosso CEO
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center justify-content-md-end"
                  >
                    <a
                      href="https://web.whatsapp.com/"
                      className="w-100 w-md-50  button-white shadow text-center"
                    >
                      Fale com o CEO
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DobraCinco;
