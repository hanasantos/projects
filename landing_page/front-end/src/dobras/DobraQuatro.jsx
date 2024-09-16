// Import necessary libraries and components
import { useDobraQuatro } from "./useDobraQuatro";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Circle from "./circleStar.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormsDobraQuatro from "./formsDobraQuatro"; // Importando como FormsDobraQuatro

/**
 * Component that allows users to select services and land area for quotation.
 *
 * This component provides a form where users can select different services, enter the land area,
 * and view the estimated costs. It also provides options to submit the request with a discount or contact a specialist.
 *
 * Structure:
 * - A section to input the land area.
 * - A table to select services and display their costs.
 * - An image with updated pricing information.
 * - Call-to-action buttons to request a quote or contact a specialist.
 */
function DobraQuatro() {
  const [showForm, setShowForm] = useState(false);

  // Functions to handle showing and hiding the form
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // State and functions from the custom hook useDobraQuatro
  const {
    setTamanhoGleba,
    analise,
    estudo,
    concept,
    anteproj,
    mensagem,
    analiseCheck,
    setAnaliseCheck,
    estudoCheck,
    setEstudoCheck,
    conceptCheck,
    setConceptCheck,
    anteprojCheck,
    setAnteprojCheck,
  } = useDobraQuatro();

  return (
    <>
      <div id="orcamento" className="dobra-color">
        <div className="col-12 col-sm-10 mx-auto">
          <Row id="" className="dobra align-content-center">
            <Row className="text-titulo g-0 text-center">
              <h2 className="text-titulo pb-4">Faça um Orçamento</h2>
            </Row>

            <div className="card-container pt-4 pb-4 shadow" id="item4">
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <h2 className="m-0 pb-4 blue titulo-interm">
                  Selecione os serviços e área do seu terreno:
                </h2>
                <Row className="justify-content-center w-100">
                  <Col sm={6}>
                    <div
                      id="calc"
                      className="d-flex flex-column align-items-center"
                    >
                      <Row className="p-0 m-0 form-check h6 d-flex align-items-center justify-content-center">
                        <div className="input-container">
                          <input
                            className="rounded-5 input-area-gleba form-control"
                            type="text"
                            placeholder="Área em Hectares:"
                            id="tamanhoGleba"
                            onChange={(e) => setTamanhoGleba(e.target.value)}
                          />
                          <label className="m-4 blue" id="pacotes">
                            Hectares (ha)
                          </label>
                        </div>
                        {mensagem && <div>{mensagem}</div>}
                      </Row>

                      <Col sm={8} className="form-check h6 pt-4">
                        <table className="custom-table w-100">
                          <tbody>
                            <tr className="table-row">
                              <td className="table-row">
                                <input
                                  className="form-check-input check-danger calc"
                                  type="radio"
                                  checked={analiseCheck}
                                  onChange={() => {
                                    setAnaliseCheck(true);
                                    setEstudoCheck(false);
                                  }}
                                />
                                <div>Análise Territorial:</div>
                              </td>
                              <td className="table-row">
                                <div className="p" id="analise">
                                  {analise.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                  })}
                                </div>
                              </td>
                            </tr>
                            <tr className="table-row">
                              <td className="pt-2 table-row">
                                <input
                                  className="form-check-input check-danger calc"
                                  type="radio"
                                  checked={estudoCheck}
                                  onChange={() => {
                                    setAnaliseCheck(false);
                                    setEstudoCheck(true);
                                  }}
                                />
                                <div>Estudo de Viabilidade:</div>
                              </td>
                              <td className="table-row">
                                <div id="estudo" className="p">
                                  {estudo.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                  })}
                                </div>
                              </td>
                            </tr>
                            <tr className="table-row">
                              <td className="pt-2 table-row">
                                <input
                                  className="form-check-input check-danger calc"
                                  type="checkbox"
                                  checked={conceptCheck}
                                  onChange={(e) =>
                                    setConceptCheck(e.target.checked)
                                  }
                                />

                                <div>Concept Design:</div>
                              </td>
                              <td className="table-row">
                                <div className="p" id="concept">
                                  {concept.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                  })}
                                </div>
                              </td>
                            </tr>
                            <tr className="table-row">
                              <td className="pt-2 table-row">
                                <input
                                  className="form-check-input check-danger calc"
                                  type="checkbox"
                                  checked={anteprojCheck}
                                  onChange={(e) =>
                                    setAnteprojCheck(e.target.checked)
                                  }
                                />
                                <div>Anteprojeto:</div>
                              </td>
                              <td className="table-row">
                                <div className="p" id="anteproj">
                                  {anteproj.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                  })}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </div>
                  </Col>
                  <Col
                    sm={3}
                    className="p-0 m-0 g-0 position-relative col-sm-4"
                  >
                    <div className="pt-4 d-flex flex-column justify-content-center align-items-center h-100 position-relative">
                      <img
                        src={Circle}
                        alt="Circle"
                        className="img-fluid w-50"
                      />
                      <div
                        className="white text-above-map text-center position-absolute"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        De:
                        <span
                          className="p text-decoration-line-through"
                          id="updateTotal"
                        >
                          R$ 0,00
                        </span>
                        <br />
                        Por:
                        <span className="p fs-5" id="updateTotal20">
                          R$ 0,00
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    className="m-0 p-0 g-0 d-flex justify-content-center  order-md-3"
                  >
                    <div className="w-100 button-col-dobra pt-4">
                      <a
                        onClick={handleShowForm}
                        className="button shadow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicite Agora com 20% de Desconto
                      </a>
                    </div>
                  </Col>
                  <Modal show={showForm} onHide={handleCloseForm}>
                    <Modal.Header closeButton>
                      <Modal.Title className="blue">
                        Solicitação de Orçamento
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormsDobraQuatro />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="button shadow rounded-4"
                        variant="secondary"
                        onClick={handleCloseForm}
                      >
                        Fechar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Col
                    xs={12}
                    className="m-0 p-0 g-0 d-flex flex-column align-items-center order-md-3"
                  >
                    <div className="pt-2 blue text-center">
                      <div>OU</div>
                      <div className="underline pt-2 pb-2 blue">
                        <a href="https://web.whatsapp.com/">
                          Fale com um Especialista
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DobraQuatro;
