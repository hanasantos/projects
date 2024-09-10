// Import necessary libraries and components
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Whatsapp } from "react-bootstrap-icons";

/**
 * Component representing a section with a WhatsApp contact button,
 * a heading with description, a video, and a contact button.
 */
function DobraUm() {
  return (
    <div className="dobra-color">
      <div className="col-12 col-sm-10 mx-auto">
        {/* WhatsApp contact button */}
        <a
          href="https://web.whatsapp.com/"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp size={30} className="whatsapp-icon shadow" />
        </a>
        <Row id="home" className="dobra justify-content-center">
          {/* Column for the text content */}
          <Col
            xs={12}
            md={5}
            className="m-0 p-0 d-flex flex-column justify-content-center text-center"
          >
            <div>
              {/* Heading */}
              <div className="h1-desktop g-0 m-0 p-0 blue">
                Viabilidades
                <br />
                Urbanas Ágeis
              </div>
              <div>
                {/* Description */}
                <p className="pt-4 pb-4 h6 text-center-um">
                  Descubra em apenas 3 dias*
                  <br />
                  se um terreno é viável para seu
                  <br /> empreendimento imobiliário
                </p>
              </div>
              <div className="text-center blue">
                <p className="fw-bold h5">Enviando apenas o arquivo KMZ</p>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          {/* Column for the video */}
          <Col
            xs={12}
            md={5}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/lGnGzvAF0Q8?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0"
                className="video-iframe"
                allowFullScreen
              ></iframe>
            </div>
          </Col>

          {/* Contact button */}
          <Col xs={12} className="pt-2 d-flex justify-content-center">
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
      </div>
    </div>
  );
}

export default DobraUm;
