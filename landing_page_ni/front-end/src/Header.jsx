// Import necessary libraries and components
import { useState } from "react";
import Logo from "./img/logo_branco.png";
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
        <div className="header-content">
          {/* Bootstrap Navbar set to expand on larger screens */}
          <Navbar expand="lg" className="w-100">
            <Container fluid className="p-0">
              <Navbar.Brand href="#home">
                <div className="logo-col">
                  <img src={Logo} alt="Logo" className="logo-image-header" />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav className="ml-auto">
                  <ul className="nav-list">
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

                    <Nav.Link href="#depoimentos">
                      <li className="nav-item">
                        <a
                          href="#depoimentos"
                          className={focusedItem === 1 ? "focused" : ""}
                          onClick={() => handleItemClick(1)}
                        >
                          Depoimentos
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#servicos">
                      <li className="nav-item">
                        <a
                          href="#servicos"
                          className={focusedItem === 2 ? "focused" : ""}
                          onClick={() => handleItemClick(2)}
                        >
                          Serviços
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#comoescolher">
                      <li className="nav-item">
                        <a
                          href="#comoescolher"
                          className={focusedItem === 3 ? "focused" : ""}
                          onClick={() => handleItemClick(3)}
                        >
                          Qual Escolher
                        </a>
                      </li>
                    </Nav.Link>

                    <Nav.Link href="#comoagendar">
                      <li className="nav-item">
                        <a
                          href="#comoagendar"
                          className={focusedItem === 4 ? "focused" : ""}
                          onClick={() => handleItemClick(4)}
                        >
                          Como Agendar
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="#sobremim">
                      <li className="nav-item">
                        <a
                          href="#sobremim"
                          className={focusedItem === 5 ? "focused" : ""}
                          onClick={() => handleItemClick(5)}
                        >
                          Sobre Mim
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="#faq">
                      <li className="nav-item">
                        <a
                          href="#faq"
                          className={focusedItem === 5 ? "focused" : ""}
                          onClick={() => handleItemClick(5)}
                        >
                          FAQ
                        </a>
                      </li>
                    </Nav.Link>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
}

export default Header;
