import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import "./CustomArrows.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";
import "./MovieList.css";

const MovieListDogs = () => {
  const [watchingMoviesHovered, setWatchingMoviesHovered] = useState(null);
  const [sleepingMoviesHovered, setSleepingMoviesHovered] = useState(null);
  const [showText, setShowText] = useState([]);
  const [showText2, setShowText2] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [firebaseLinks, setFirebaseLinks] = useState([]);
  const [watchingMovies, setWatchingMovies] = useState([]); // Array para "Para o seu cachorro assistir"
  const [sleepingMovies, setSleepingMovies] = useState([]);

  useEffect(() => {
    // Inicialize o Firebase com sua configuração
    const firebaseConfig = {
      apiKey: "AIzaSyCzhuq6suPTr8IGH6nOtGsjH6HTOLlaNFg",
      authDomain: "petflix-37fdd.firebaseapp.com",
      databaseURL: "https://petflix-37fdd-default-rtdb.firebaseio.com",
      projectId: "petflix-37fdd",
      storageBucket: "petflix-37fdd.appspot.com",
      messagingSenderId: "572817167140",
      appId: "1:572817167140:web:10cff7ffa1c2c2fc8899b1",
      measurementId: "G-SHD345XZEY",
    };

    const app = initializeApp(firebaseConfig);

    const database = getDatabase(app);

    const videoLinksRef = ref(database, "/");

    get(videoLinksRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const allLinks = Object.values(snapshot.val());
          setFirebaseLinks(allLinks);

          // Divida os links em duas categorias
          const watchingMovies = allLinks.slice(0, 6); // 6 primeiros para assistir
          const sleepingMovies = allLinks.slice(6, 12); // Próximos 6 para dormir

          setWatchingMovies(watchingMovies);
          setSleepingMovies(sleepingMovies);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar os links do Firebase:", error);
      });
  }, []);

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Defina as configurações padrão para o Slider
  const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Use o estado para rastrear as configurações atuais do Slider
  const [sliderSettings, setSliderSettings] = useState(defaultSettings);

  useEffect(() => {
    // Verifique o tamanho da tela e atualize as configurações do Slider conforme necessário
    const updateSliderSettings = () => {
      if (window.innerWidth < 600) {
        // Se a largura da tela for menor que 600px, mostre apenas 3 itens
        setSliderSettings({
          ...defaultSettings,
          slidesToShow: 3,
        });
      } else {
        // Caso contrário, use as configurações padrão
        setSliderSettings(defaultSettings);
      }
    };

    // Adicione um ouvinte de redimensionamento para monitorar alterações na largura da tela
    window.addEventListener("resize", updateSliderSettings);

    // Execute a função de atualização inicialmente
    updateSliderSettings();

    // Certifique-se de remover o ouvinte ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateSliderSettings);
    };
  }, []);

  const toggleTextVisibility = (index) => {
    const updatedShowText = [...showText];
    updatedShowText[index] = !updatedShowText[index];
    setShowText(updatedShowText);
  };
  const toggleTextVisibility2 = (index) => {
    const updatedShowText2 = [...showText2];
    updatedShowText2[index] = !updatedShowText2[index];
    setShowText2(updatedShowText2);
  };

  const imageExtensions = [".jpeg", ".jpg", ".png"];

  return (
    <div className="movie-list">
      <div className="movie-list-title">
        <p className="text-title-list">Para o seu cachorro assistir</p>
      </div>

      <Slider {...sliderSettings}>
        {watchingMovies.map((videoUrl, index) => (
          <div
            key={index}
            onClick={() => openVideoModal(videoUrl)}
            className={`movie-slide ${showText[index] ? "show-text" : ""} ${
              watchingMoviesHovered === index ? "hovered" : ""
            }`}
            onMouseEnter={() => {
              toggleTextVisibility(index);
              setWatchingMoviesHovered(index);
            }}
            onMouseLeave={() => {
              toggleTextVisibility(index);
              setWatchingMoviesHovered(null);
            }}
          >
            <div className="slide-content">
              <img
                className="img-list"
                src={`/cachorro-fofo-${index + 1}.jfif`}
                alt={`cachorro Fofo${index + 1}`}
              />
              {showText[index] && (
                <div className="movie-title">{`cachorro Fofo Brincando`}</div>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <Modal
        isOpen={selectedVideo !== null}
        onRequestClose={closeVideoModal}
        contentLabel="Reprodutor de Vídeo"
        ariaHideApp={false}
      >
        {selectedVideo && (
          <iframe
            width="1000"
            height="500"
            src={selectedVideo}
            title="Reprodutor de Vídeo"
          ></iframe>
        )}
      </Modal>
      <div className="movie-list-title">
        <p className="text-title-list">Para o seu Cachorro Dormir</p>
      </div>

      <Slider {...sliderSettings}>
        {sleepingMovies.map((videoUrl, index) => (
          <div
            key={index}
            onClick={() => openVideoModal(videoUrl)}
            className={`movie-slide ${showText2[index] ? "show-text" : ""} ${
              sleepingMoviesHovered === index ? "hovered" : ""
            }`}
            onMouseEnter={() => {
              toggleTextVisibility2(index);
              setSleepingMoviesHovered(index);
            }}
            onMouseLeave={() => {
              toggleTextVisibility2(index);
              setSleepingMoviesHovered(null);
            }}
          >
            <div className="slide-content">
              <img
                className="img-list"
                src={`/cachorro-dormindo-${index + 1}.jpg`}
                alt={`cachorro Dormindo${index + 1}`}
              />
              {showText2[index] && (
                <div className="movie-title">{`Cachorro Fofo Dormindo`}</div>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <Modal
        isOpen={selectedVideo !== null}
        onRequestClose={closeVideoModal}
        contentLabel="Reprodutor de Vídeo"
        ariaHideApp={false}
      >
        {selectedVideo && (
          <iframe
            width="98%"
            height="98%"
            src={selectedVideo}
            title="Reprodutor de Vídeo"
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default MovieListDogs;
