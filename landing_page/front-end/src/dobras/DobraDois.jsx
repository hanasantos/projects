// Import necessary libraries and components
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Mapa from "../img/mapaurbia.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_bairru from "../img/logo_bairru.svg";
import logo_conviver from "../img/logo_conviver.svg";
import logo_buriti from "../img/logo_buriti.svg";
import logo_cyrela from "../img/logo_cyrela.svg";
import logo_fronte from "../img/logo_fronte.svg";
import logo_habitasul from "../img/logo_habitasul.svg";
import logo_itv from "../img/logo_itv.svg";
import logo_jmd from "../img/logo_jmd.svg";
import logo_urba from "../img/logo_urba.svg";
import logo_ginco from "../img/logo_ginco.svg";

/**
 * Component representing a section showcasing results over the past 3 years,
 * including statistics and client logos, along with a map and a contact button.
 */
function DobraDois() {
  return (
    <>
      <div id="clientes">
        <div style={{ background: "white" }}>
          <div
            className="col-12 pt-0 mt-0 col-sm-10 mx-auto"
            style={{ padding: "30px", background: "white" }}
          >
            <Row
              className="dobra align-content-center"
              style={{ background: "white" }}
            >
              {/* Section title */}
              <Row className="text-titulo g-0 text-center">
                <h2 className="pb-4 text-titulo">
                  Nossos resultados em apenas 3 anos
                </h2>
              </Row>

              {/* Statistics */}
              <Row className="g-0 text-center justify-content-center d-block">
                <div
                  className="blue row g-0 d-flex flex-wrap justify-content-center"
                  style={{ fontSize: "18px" }}
                >
                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block">
                      Todos
                    </span>
                    <span>Estados</span>
                  </div>

                  <div className="vr"></div>

                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block">
                      +400
                    </span>
                    <span>Estudos</span>
                  </div>

                  <div className="vr d-none d-sm-block"></div>

                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block mt-sm-0 mt-4">
                      +140
                    </span>
                    <span>Clientes</span>
                  </div>

                  <div className="vr"></div>

                  <div className="col-5 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block mt-sm-0 mt-4">
                      +280
                    </span>
                    <span>Cidades</span>
                  </div>

                  <div className="vr d-none d-sm-block"></div>

                  <div className="col-12 col-sm-2 py-2">
                    <span className="w-100 text-center fw-bold d-block mt-sm-0 mt-4">
                      +20k HA
                    </span>
                    <span>Projetados</span>
                  </div>
                </div>
              </Row>

              {/* Map and logos */}
              <Row className="g-0 m-0 p-0 justify-content-center align-items-center text-center">
                <Col
                  xs={12}
                  md={6}
                  className="map-col d-flex justify-content-center"
                >
                  <img
                    className="img-fluid-map w-75 h-auto"
                    src={Mapa}
                    alt="Map"
                  />
                </Col>

                <Col
                  xs={12}
                  md={6}
                  style={{ maxWidth: "auto", maxHeight: "auto" }}
                >
                  <Row className="g-0 d-flex align-items-center">
                    {/* Logos */}
                    {[
                      { logo: logo_buriti, align: "align-center-var" },
                      { logo: logo_conviver, align: "align-start-var" },
                      { logo: logo_bairru, align: "align-center-var" },
                      { logo: logo_cyrela, align: "align-start-var" },
                      { logo: logo_fronte, align: "align-center-var" },
                      { logo: logo_habitasul, align: "align-start-var" },
                      { logo: logo_itv, align: "align-center-var" },
                      { logo: logo_jmd, align: "align-start-var" },
                      { logo: logo_urba, align: "align-center-var" },
                      { logo: logo_ginco, align: "align-start-var" },
                    ].map(({ logo, align }, index) => (
                      <Col
                        xs={6}
                        sm={6}
                        md={6}
                        className={`g-0 d-flex align-items-center pt-4 ${align}`}
                        key={index}
                      >
                        <img
                          className="img-fluid-logo"
                          src={logo}
                          alt={`logo_${index}`}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>

                {/* Contact button */}
                <Col xs={12} className="pt-4 d-flex justify-content-center">
                  <div className="button-col-dobra">
                    <a
                      href="https://web.whatsapp.com/"
                      className="button shadow"
                      target="_blank"
                    >
                      Fale com um Especialista
                    </a>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default DobraDois;
