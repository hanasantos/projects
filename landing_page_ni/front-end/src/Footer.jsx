// Import necessary libraries and components
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import media1 from "./img/icon-media-01.svg";
import media2 from "./img/icon-media-02.svg";
import selo from "./img/selo.svg";

/**
 * Footer component that displays the contact information and logo.
 * This component is structured using Bootstrap's grid system for a responsive layout.
 */

const Footer = () => {
  return (
    <Row id="contato" className="g-0 footer text-center">
      <div className="footer-content mx-auto">
        {/* Icons for social media */}
        <Col className="">
          <h6 className="footer-text">Estudos Urbanísticos:</h6>
          <img className="media-icon mx-2" src={media1} alt="Media Icon 1" />
          <img className="media-icon mx-2" src={media2} alt="Media Icon 2" />
        </Col>

        {/* Seal and copyright information */}
        <Col>
          <img className="selo-icon mb-2" src={selo} alt="Seal Icon" />
          <h6 className="footer-text">© 2024. All rights reserved.</h6>
        </Col>
      </div>
    </Row>
  );
};

export default Footer;
