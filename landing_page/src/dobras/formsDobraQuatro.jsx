// Import necessary libraries and components
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

/**
 * FormsDobraQuatro Component
 *
 * This component renders a form with fields for email and gleba data, and handles form submission.
 * It uses React Bootstrap for styling and Axios for making HTTP requests.
 *
 */

function FormsDobraQuatro() {
  const [email, setEmail] = useState("");
  const [glebaData, setGlebaData] = useState("");

  /**
   * Handles the form submission by sending the data to the server.
   * Displays an alert with the response message or error message.
   */

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/submit", {
        email,
        glebaData,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o formulário.");
    }
  };

  return (
    <Form>
      {/* Email input field */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      {/* Gleba data input field */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          Insira aqui os dados de sua gleba que entraremos em contato
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={glebaData}
          onChange={(e) => setGlebaData(e.target.value)}
        />
      </Form.Group>
      {/* Submit button */}
      <Button
        className="button shadow rounded-4"
        variant="primary"
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </Form>
  );
}

export default FormsDobraQuatro;
