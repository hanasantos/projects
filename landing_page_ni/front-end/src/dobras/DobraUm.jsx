// Import necessary libraries and components
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function DobraUm() {
  return (
    <div className="dobra-um">
      <div className="col-12 col-sm-10 mx-auto">
        <Row id="home" className="justify-content-center">
          <Col
            xs={12}
            md={5}
            className="m-0 p-0 d-flex flex-column justify-content-center text-center"
          >
            <div>
              <h1 className="h1-desktop">
                Tarot: o GPS espiritual <br />da
                 sua vida! <br />
              </h1>
              <div>
                <p className="pt-4 pb-4 fw-bold">
                  Tá sentindo que algo não vai pra frente?
                  <br /> Parece que você está andando em círculos?
                  <br />
                  Se você quer saber o porquê ou como resolver,
                  <br /> vamos criar uma leitura de tarot que encaixe
                  <br /> exatamente no que você tá vivendo.
                </p>
              </div>
            </div>
            <Col xs={12} className="pt-2 d-flex">
              <div className="w-100">
                <a
                  href="https://web.whatsapp.com/"
                  className="button "
                  target="_blank"
                >
                  Agendamento
                </a>
              </div>
            </Col>
          </Col>
          <Col md={1}></Col>
          <Col
            xs={12}
            md={5}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0"
                className="video-iframe"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DobraUm;
