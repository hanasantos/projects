// Import necessary libraries and components
import { useState } from "react";
import Logo from "./img/logo_branco.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Header Component
function Header() {
  // State to control which menu item is currently focused
  const [focusedItem, setFocusedItem] = useState(0);
  // State to control the visibility of the iframe
  const [showIframe, setShowIframe] = useState(false);

  // Function called when a menu item is clicked
  const handleItemClick = (index) => {
    setFocusedItem(index); // Updates the focused item state
    if (index === 5) {
      // If the index is 5 (Blog), display the iframe
      setShowIframe(true);
    } else {
      // Otherwise, hide the iframe
      setShowIframe(false);
    }
  };

  return (
    <>
      {/* Fixed header with high z-index to stay above other elements */}
      <header id="header" className="header">
        <div className="p-2  header-content">
          {/* Bootstrap Navbar set to expand on larger screens */}
          <Navbar expand="lg" className="w-100 ">
            <Container fluid className="p-0">
              {/* Navbar brand displaying the logo */}
              <Navbar.Brand href="#home">
                <div className="logo-col">
                  <img src={Logo} alt="Logo" className="logo-image-header" />
                </div>
              </Navbar.Brand>
              {/* Navbar toggle button for mobile view */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav me-auto">
                  {/* Navigation list with menu items */}
                  <ul className="nav-list">
                    {/* Home menu item */}
                    <Nav.Link href="#home">
                      <li className="nav-item">
                        <a
                          href="#home"
                          className={focusedItem === 0 ? "focused" : ""}
                          onClick={() => handleItemClick(0)}
                        >
                          Home
                        </a>
                      </li>
                    </Nav.Link>

                    {/* Clients menu item */}
                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#clientes"
                          className={focusedItem === 1 ? "focused" : ""}
                          onClick={() => handleItemClick(1)}
                        >
                          Clientes
                        </a>
                      </li>
                    </Nav.Link>

                    {/* Solutions menu item */}
                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#solucoes"
                          className={focusedItem === 2 ? "focused" : ""}
                          onClick={() => handleItemClick(2)}
                        >
                          Soluções
                        </a>
                      </li>
                    </Nav.Link>

                    {/* Budget menu item */}
                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#orcamento"
                          className={focusedItem === 3 ? "focused" : ""}
                          onClick={() => handleItemClick(3)}
                        >
                          Orçamento
                        </a>
                      </li>
                    </Nav.Link>

                    {/* Contact menu item */}
                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#contato"
                          className={focusedItem === 4 ? "focused" : ""}
                          onClick={() => handleItemClick(4)}
                        >
                          Contato
                        </a>
                      </li>
                    </Nav.Link>

                    {/* Blog menu item */}
                    <Nav.Link href="#link">
                      <li className="nav-item">
                        <a
                          href="#contato"
                          className={focusedItem === 5 ? "focused" : ""}
                          onClick={() => handleItemClick(5)}
                        >
                          Blog
                        </a>
                      </li>
                    </Nav.Link>
                  </ul>
                </Nav>

                {/* Button to access the platform, opening in a new tab */}
                <a
                  href="https://urbia.painel.roxcode.io"
                  className="button-col shadow justify-content-center"
                  target="_blank"
                >
                  Acessar Plataforma
                </a>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>

      {/* Conditionally render the iframe when showIframe is true */}
      {showIframe && (
        <div className="show-iframe">
          <iframe
            className="iframe"
            src="https://urbia.com.br/blog/masterplan-entenda-a-importancia-para-empreendimentos-imobiliarios/"
          />
        </div>
      )}
    </>
  );
}

export default Header;
