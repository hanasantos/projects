// Import necessary libraries and components
import Logo from "./img/logo_azul.svg";
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/**
 * Footer component that displays the contact information and logo.
 * This component is structured using Bootstrap's grid system for a responsive layout.
 */

const Footer = () => {
  return (
    <Row id="contato" className="g-0 footer">
      <div className="footer-content">
        {/* Column for the company logo and address */}
        <Col className="d-flex justify-content-center">
          <div className="footer-column">
            <img className="logo-image" src={Logo} alt="Logo" />
            <div className="pt-4">
              Instituto Caldeira de Inovação <br />
              Tv. São José, 455 - Navegantes <br />
              Porto Alegre - RS
            </div>
          </div>
        </Col>

        {/* Column for commercial contact information */}
        <Col>
          <div className="footer-column text-center">
            Comercial: <br />
            xxx@xxxxx.com.br
            <br />
            (xx) xxx-xxxxx
          </div>
        </Col>

        {/* Column for urban studies contact information */}
        <Col>
          <div className="pt-2 footer-column text-center">
            Estudos Urbanísticos:
            <br /> xxx@xxxxx.com.br
            <br /> (xx) xxx-xxxxx
          </div>
        </Col>

        {/* Column for administrative and financial contact information */}
        <Col>
          <div className="pt-2 footer-column text-center">
            Financeiro:
            <br /> xxx@xxxxx.com.br
            <br /> (xx) xxx-xxxxx
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Footer;
