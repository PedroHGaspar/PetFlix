import React, { useEffect, useState } from "react";
import "../App.css";
import Menu from "./Menu";
import MovieListCats from "./MovieListCats";
import Modal from "react-modal";

function HomeGatos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playAudio = () => {
    const audio = new Audio("/audio-gato.mp3");
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(playAudio, 10000); 

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      {/* <Menu /> */}
      <section className="home-screen-container">
        <img
          className="background-image-home imagem sem-blur"
          src="/pets-image.jpg"
          alt=""
        />
        <div className="mascara-blur"></div>
        <div className="content-body-filme-principal">
          <h3 className="title-home">
            PETFLIX <span>ORIGINAL</span>
          </h3>
          <h1 className="subtitle-home">PETS - A Vida Secreta dos Bichos</h1>
          <div className="items-text-lista-home">
            <label className="first-item-label-home">98% Match</label>
            <label className="second-item-label-home">2016</label>
            <label className="third-item-label-home">Animação</label>
            <label className="fourth-item-label-home">4K Ultra HD</label>
            <label className="fifth-item-label-home">5.1</label>
          </div>
          <p className="sinopse-home">
            Dois cachorros de estimação brigões se unem para lutar contra uma
            gangue de animais bravos que prepara um ataque contra os humanos.
          </p>
          <p className="elenco-home">
            Kevin Hart, Chris Renaud, Jenny Slate, Lake Bell, Louis C.K. e Eric
            Stonestreet
          </p>
          <div>
            <button className="button-start-home" onClick={openModal}>
              <i className="fa fa-play icon-play"></i>
              <span className="button-assistir-text">Assistir</span>
            </button>
          </div>
        </div>
      </section>
      <MovieListCats />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Reprodutor de Vídeo"
        ariaHideApp={false}
      >
        <iframe
          width="98%"
          height="98%"
          src="https://www.youtube.com/embed/i-80SGWfEjM?si=TBcMChZlkNsmFFbR"
          title="Reprodutor de Vídeo"
        ></iframe>
      </Modal>
    </div>
  );
}

export default HomeGatos;
