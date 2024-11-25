import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function PerguntasLivresModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="justify-content-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title-center">
          <h2 className="text-titulo">Perguntas Livres</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          A leitura de Perguntas Livres é pra quem tem questões em áreas
          diferentes. Durante uma hora, você pode fazer quantas perguntas quiser
          sobre amor, carreira, espiritualidade, família, ou qualquer outra
          área. É ideal pra quem quer liberdade para fazer o jogo com suas
          próprias perguntas.
        </p>
        <div className="video-wrapper-modal">
          <iframe
            src="https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0"
            className="video-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <a
          onClick={props.onHide}
          className="button-blue-card shadow w-75 mx-auto pt-2 mt-3 d-block"
        >
          Fechar
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export function LeituraPersonalizadaModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title-center">
          <h2 className="text-titulo">Leitura Personalizada</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          A Leitura Personalizada é pra quem tem uma dúvidas em uma área
          específica. Pode ser sobre a sua vida amorosa, carreira,
          espiritualidade, ou qualquer outra questão.
          <br />• Você me fala no que quer focar <br />• Definimos os pontos que
          vamos abordar na leitura <br />• Criamos sua leitura aprofundada
          <br />
          Como alinhamos tudo na etapa de construção da leitura, ela é perfeita
          pra quem ainda não tá se sentindo muito segura.
          <br />
          <div className="underlined">Não adicionamos perguntas na hora.</div>
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0"
            className="video-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function MandalaModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title-center">
          <h2 className="text-titulo">Mandala</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          A Mandala é uma leitura abrangente que explora as energias em
          diferentes áreas da sua vida: espiritualidade, amor, família, carreira
          e finanças. Ela é dividida em 5 partes, mas você pode ajustar os temas
          conforme sua necessidade: se quiser substituir familia por algum
          projeto como um intercâmbio ou uma mudança de área por exemplo… Se
          você está buscando uma análise mais completa de varias areas da vida É
          perfeita pra quem quer uma visão geral e detalhada sobre como está
          cada área. A gente identifica o que está fluindo bem e onde estão os
          desafios! Não adicionamos perguntas na hora.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0"
            className="video-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}
