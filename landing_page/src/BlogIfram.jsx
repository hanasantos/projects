import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const BlogIFrame = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://blogurbia.wordpress.com/"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="Blog WordPress"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Definir tipos de propriedades
BlogIFrame.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BlogIFrame;
