// Import necessary libraries and components
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import imagem_analise from "../img/imagem_analise.png";
import imagem_evu from "../img/imagem_evu.png";
import imagem_outros from "../img/imagem_outros.png";
import { CloudDownload } from "react-bootstrap-icons";
import RAT from "../docs/EX_ANALISE_TERRITORIAL_2024.pdf";
import RE from "../docs/URBIA_EV_LOTEAMENTO ABERTO_ENTRADA COMERCIAL.pdf";
import ROS from "../docs/CONCEPT_MASTER EQUESTRE.pdf";

/**
 * Component displaying solutions and technologies.
 *
 * This component renders a section showcasing solutions and technologies offered,
 * including three cards with information about the services, images, and download links.
 *
 * Structure:
 * - Each card contains an image, title, description of services, and buttons for more information and downloading files.
 */

function DobraTres() {
  return (
    <>
      <div className="dobra-color" id="solucoes">
        <div className="justify-content-center col-12 col-sm-10 mx-auto">
          <Row className="dobra justify-content-center align-content-center">
            {/* Section title */}
            <Row className="pb-4 justify-content-center text-titulo g-0 text-center">
              <h2 className="text-titulo">Soluções e tecnologias</h2>
            </Row>
            <Col md={12} className="mt-2 m-0">
              <Row>
                {/* Card 1 - Análise Territorial */}
                <Col md={4} className="pb-4 d-flex justify-content-end">
                  <div className="p-0 shadow slider-item d-flex flex-column justify-content-between align-items-center">
                    <div>
                      <img
                        className="images"
                        src={imagem_analise}
                        alt="imagem_analise"
                      />
                    </div>
                    <div className="p-4 pt-2 pb-0 pt-0 title-container text-center align-items-center">
                      <h5 className="m-0 blue titulo-intermed">
                        Análise Territorial
                      </h5>
                    </div>
                    <div className="w-100 px-4 pt-2">
                      <div className="px-4">
                        <div className="small m-0 text-center align-items-center button-horas g-0">
                          3 dias
                        </div>
                      </div>
                    </div>
                    <div className="px-3 pt-4 py-4 content-container text-center align-items-center">
                      <div className="descric m-0 text-center align-items-center">
                        Topografia aproximada do terreno;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Levantamento da legislação;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Principais APPs e restrições;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Malha fundiária;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Biomas e vegetações predominantes;
                      </div>
                    </div>
                    <Col
                      xs={12}
                      className="w-100 p-4 pb-0 pt-2 m-0 d-flex justify-content-center"
                    >
                      <div className="w-100 p-4 pt-0 pb-0">
                        <a
                          href="https://www.youtube.com/watch?v=-nFFU7FbKoQ&list=PLIw1Sp8xNBZIvBovrz4JO79EtpkREDHW-"
                          className="button shadow"
                          target="_blank"
                        >
                          Saiba Mais
                        </a>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      className="w-100 p-4 pt-2 m-0 d-flex justify-content-center"
                    >
                      <div className="w-100 p-4 pt-0 pb-0">
                        <a
                          href={RAT}
                          download="Exemplo_Analise_Territorial.pdf"
                          target="_blank"
                          className="button shadow"
                        >
                          <CloudDownload size={20} className={RAT.navLink} />
                          {""}
                          Download
                        </a>
                      </div>
                    </Col>
                  </div>
                </Col>

                {/* Card 2 - Estudo Viabilidade */}
                <Col md={4} className="pb-4 d-flex justify-content-center">
                  <div className="p-0 shadow slider-item d-flex flex-column justify-content-between align-items-center">
                    <div>
                      <img
                        className="images"
                        src={imagem_evu}
                        alt="imagem_evu"
                      />
                    </div>
                    <div className="p-4 pt-2 pb-0 pt-0 title-container text-center align-items-center">
                      <h5 className="m-0 blue titulo-intermed">
                        Estudo Viabilidade
                      </h5>
                    </div>
                    <div className="w-100 px-4 pt-2">
                      <div className="px-4">
                        <div className="small m-0 text-center align-items-center button-horas g-0">
                          5 dias
                        </div>
                      </div>
                    </div>

                    <div className="px-3 pt-4 py-4 content-container text-center align-items-center">
                      <div className="descric m-0 text-center align-items-center">
                        Consultoria ambiental;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Planejamento urbano;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Desenvolvimento de projetos<br></br> sustentáveis;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Gestão de recursos hídricos;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Soluções tecnológicas inovadoras;
                      </div>
                    </div>
                    <Col
                      xs={12}
                      className="w-100 p-4 pb-0 pt-2 m-0 d-flex justify-content-center"
                    >
                      <div className="w-100 p-4 pt-0 pb-0">
                        <a
                          href="https://www.youtube.com/watch?v=lGnGzvAF0Q8&t=14s"
                          className="button shadow"
                          target="_blank"
                        >
                          Saiba Mais
                        </a>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      className="w-100 p-4 pt-2 m-0 d-flex justify-content-center"
                    >
                      <div className="w-100 p-4 pt-0 pb-0">
                        <a
                          href={RE}
                          download="Exemplo_Estudo_Viabilidade.pdf"
                          target="_blank"
                          className="button shadow"
                        >
                          <CloudDownload size={20} className={RE.navLink} />
                          {""}
                          Download
                        </a>
                      </div>
                    </Col>
                  </div>
                </Col>

                {/* Card 3 - Outras Soluções */}
                <Col md={4} className="pb-4 d-flex justify-content-start">
                  <div className="p-0 shadow slider-item d-flex flex-column justify-content-between align-items-center">
                    <div>
                      <img
                        className="images"
                        src={imagem_outros}
                        alt="imagem_outros"
                      />
                    </div>
                    <div className="p-4 pt-2 pb-0 pt-0 title-container text-center align-items-center">
                      <h5 className="m-0 blue titulo-intermed">
                        Outras Soluções
                      </h5>
                    </div>
                    <div className="w-100 px-4 pt-2">
                      <div className="px-4">
                        <div className="small m-0 text-center align-items-center button-horas g-0">
                          3 dias
                        </div>
                      </div>
                    </div>
                    <div className="px-3 pt-4 py-4 content-container text-center align-items-center">
                      <div className="descric m-0 text-center align-items-center">
                        Concept de projeto com <br></br>implantação humanizada;
                      </div>
                      <div className="pt-1 descric m-0 text-center align-items-center">
                        Anteprojeto;
                      </div>
                    </div>

                    <Col
                      xs={12}
                      className="w-100 p-4 pb-0 pt-2 m-0 d-flex justify-content-e"
                    >
                      <div className="w-100 p-4 pt-0 pb-0">
                        <a
                          href="https://www.youtube.com/watch?v=J_Yi0G7gx2A"
                          className="button shadow"
                          target="_blank"
                        >
                          Saiba Mais
                        </a>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      className="w-100 p-4 pt-2 m-0 d-flex justify-content-center"
                    >
                      <div className="w-100 p-4 pt-0 pb-0">
                        <a
                          href={ROS}
                          download="Exemplo_Outras_Soluções.pdf"
                          target="_blank"
                          className="button shadow"
                        >
                          <CloudDownload size={20} className={ROS.navLink} />
                          {""}
                          Download
                        </a>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DobraTres;
