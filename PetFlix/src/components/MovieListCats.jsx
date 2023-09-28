import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import axios from "axios";
import { initializeApp } from "firebase/app"; // Importe a função initializeApp
import { getDatabase, ref, get } from "firebase/database"; // Importe as funções necessárias do Realtime Database
import "./CustomArrows.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";
import "./MovieList.css";

const MovieListCats = () => {
  const [watchingMoviesHovered, setWatchingMoviesHovered] = useState(null);
  const [sleepingMoviesHovered, setSleepingMoviesHovered] = useState(null);
  const [showText, setShowText] = useState([]);
  const [showText2, setShowText2] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [firebaseLinks, setFirebaseLinks] = useState([]);
  const [watchingMovies, setWatchingMovies] = useState([]); // Array para "Para o seu gato assistir"
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const toggleTextVisibility = (index) => {
    const updatedShowText = [...showText];
    updatedShowText[index] = !updatedShowText[index];
    const updatedShowText2 = [...showText];
    updatedShowText[index] = !updatedShowText[index];
    setShowText(updatedShowText);
    setShowText2(updatedShowText);
  };

  const imageExtensions = [".jpeg", ".jpg", ".png"];

  return (
    <div className="movie-list">
      <div className="movie-list-title">
        <p className="text-title-list">Para o seu gato assistir</p>
      </div>

      <Slider {...settings}>
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
                src={`/gato-fofo-${index + 1}.jpg`}
                alt={`Gato Fofo${index + 1}`}
              />
              {showText[index] && (
                <div className="movie-title">{`Gato Fofo Brincando`}</div>
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
        <p className="text-title-list">Para o seu gato Dormir</p>
      </div>

      <Slider {...settings}>
        {sleepingMovies.map((videoUrl, index) => (
          <div
            key={index}
            onClick={() => openVideoModal(videoUrl)}
            className={`movie-slide ${showText2[index] ? "show-text" : ""} ${
              sleepingMoviesHovered === index ? "hovered" : ""
            }`}
            onMouseEnter={() => {
              toggleTextVisibility(index);
              setSleepingMoviesHovered(index);
            }}
            onMouseLeave={() => {
              toggleTextVisibility(index);
              setSleepingMoviesHovered(null);
            }}
          >
            <div className="slide-content">
              <img
                className="img-list"
                src={`/gato-dormindo-${index + 1}.jpg`}
                alt={`Gato Dormindo${index + 1}`}
              />
              {showText2[index] && (
                <div className="movie-title">{`Gato Fofo Dormindo`}</div>
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
    </div>
  );
};

export default MovieListCats;
