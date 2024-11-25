import "../App.css";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Card from "react-bootstrap/Card";
import img from "../img/professional-smiling-woman.jpg";

/**
 * Component representing a section showcasing client testimonials.
 */
function DobraDois() {
  const testimonials = [
    {
      name: "Cliente 1",
      message: "Excelente serviço!",
      imgSrc: img,
    },
    {
      name: "Cliente 2",
      message: "Mudou minha vida!",
      imgSrc: img,
    },
    {
      name: "Cliente 3",
      message: "Altamente recomendável!",
      imgSrc: img,
    },
  ];

  return (
    <>
      <div id="depoimentos">
        <div className="dobra">
          <div className="col-12 col-sm-10 mx-auto">
            <Row className="align-content-center">
              <Row className="text-titulo g-0 text-center">
                <h2 className="pb-4 text-titulo">Depoimentos de Clientes</h2>
              </Row>

              <Carousel interval={null}>
                {/* Slide 1 */}
                <Carousel.Item>
                  <Row className="justify-content-center mx-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2 h-100"
                        key={index}
                      >
                        <Card className="testimonial-card h-100">
                          <Card.Body className="d-flex align-items-center">
                            <div className="testimonial-image">
                              <img
                                src={testimonial.imgSrc}
                                alt={`Imagem de ${testimonial.name}`}
                                className="circle-image"
                              />
                            </div>

                            <div className="testimonial-content ms-3">
                              <Card.Text className="testimonial-message">
                                {testimonial.message}
                              </Card.Text>
                              <Card.Title className="testimonial-name text-end">
                                {testimonial.name}
                              </Card.Title>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row className="justify-content-center mx-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2 h-100"
                        key={index}
                      >
                        <Card className="h-100">
                          {/* Adicionando a imagem em círculo no topo do card */}
                          <div className="image-circle-container">
                            <img
                              src={testimonial.imgSrc}
                              alt={`Imagem de ${testimonial.name}`}
                              className="circle-image"
                            />
                          </div>
                          <Card.Body className="text-center">
                            <Card.Title>{testimonial.name}</Card.Title>
                            <Card.Text>{testimonial.message}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default DobraDois;
