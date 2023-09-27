import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';
import './CustomArrows.css';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows';
import './MovieList.css';

const filmes = [
    { titulo: 'Gatos Adoráveis', imgSource: '/gato-fofo-1.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/b8iTTiU7Ot0?si=3sEThmgrA4Tvy_LG' },
    { titulo: 'Gatos Fofos', imgSource: '/gato-fofo-2.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/LMD6MqwErzc?si=mbCvxhLmEV2pAeU4' },
    { titulo: 'Gatos engraçados', imgSource: '/gato-fofo-3.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/4R6woWfjC3I?si=_yktfVJY9qMaKlpG' },
    { titulo: 'Gatos Fofos 4K', imgSource: '/gato-fofo-4.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/_f0XcVwNa8A?si=Mk0tKEhnE4K-TpeZ' },
    { titulo: 'Gatos Carinhosos', imgSource: '/gato-fofo-5.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/E5Rn1HbTwWA?si=nY6AxMojNvyKJt82' },
    { titulo: 'Gatos Super Fofos', imgSource: '/gato-fofo-6.png', descricao: '.', videoUrl: 'https://www.youtube.com/embed/R3UdXDJtQro?si=TEWiNtDyliG83mAx' },
];

const filmesDormir = [
    { titulo: 'Música Gato Relaxar', imgSource: '/gato-dormindo-1.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/8Fdkgo5EOXA?si=zNbJxmqptyfZFP1k' },
    { titulo: 'Música Gato Dormir', imgSource: '/gato-dormindo-2.png', descricao: '.', videoUrl: 'https://www.youtube.com/embed/3hfy3hRi16U?si=tu_XU_4Arw48ia_r' },
    { titulo: 'Canção Ninar', imgSource: '/gato-dormindo-3.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/pCsR3OwMEjg?si=G8GeZWzHwEPZ3MPG' },
    { titulo: 'Ronronar Pra Dormir', imgSource: '/gato-dormindo-4.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/4d3-RRFi_bU?si=dQb-7MS_i8HWZX0n' },
    { titulo: 'Canção Dormir', imgSource: '/gato-dormindo-5.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/Es3kOyfeLMo?si=da6fLnAfsi8x4PBJ' },
    { titulo: 'Relaxamento Gatos', imgSource: '/gato-dormindo-6.jpg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/sn2YTJ1wjtY?si=42HwTJEq867YWqVF' },
];

const MovieListCats = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [showText, setShowText] = useState(Array(filmes.length).fill(false));

    const [isHoveredDormir, setIsHoveredDormir] = useState(null);
    const [showTextDormir, setShowTextDormir] = useState(Array(filmesDormir.length).fill(false));

    const [selectedVideo, setSelectedVideo] = useState(null);

    const openVideoModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    const toggleTextVisibility = (index) => {
        const updatedShowText = [...showText];
        updatedShowText[index] = !updatedShowText[index];
        setShowText(updatedShowText);
    };

    const toggleTextVisibilityDormir = (index) => {
        const updatedShowTextDormir = [...showTextDormir];
        updatedShowTextDormir[index] = !updatedShowTextDormir[index];
        setShowTextDormir(updatedShowTextDormir);
    };

    return (
        <div className="movie-list">
            <div className="movie-list-title">
                <p className='text-title-list'>Para o seu gato assistir</p>
            </div>

            <Slider {...settings}>
                {filmes.map((filme, index) => (
                    <div
                        key={index}
                        onClick={() => openVideoModal(filme.videoUrl)}
                        className={`movie-slide ${showText[index] ? 'show-text' : ''} ${isHovered === index ? 'hovered' : ''}`}
                        onMouseEnter={() => {
                            toggleTextVisibility(index);
                            setIsHovered(index);
                        }}
                        onMouseLeave={() => {
                            toggleTextVisibility(index);
                            setIsHovered(null);
                        }}
                    >
                        <div className="slide-content">
                            <img className="img-list" src={filme.imgSource} alt={filme.titulo} />
                            {showText[index] && (
                                <div className="movie-title">{filme.titulo}</div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="movie-list-title">
                <p className='text-title-list'>Para o seu gato dormir</p>
            </div>

            <Slider {...settings}>
                {filmesDormir.map((filme, index) => (
                    <div
                        key={index}
                        onClick={() => openVideoModal(filme.videoUrl)}
                        className={`movie-slide ${showTextDormir[index] ? 'show-text' : ''} ${isHoveredDormir === index ? 'hovered' : ''}`}
                        onMouseEnter={() => {
                            toggleTextVisibilityDormir(index);
                            setIsHoveredDormir(index);
                        }}
                        onMouseLeave={() => {
                            toggleTextVisibilityDormir(index);
                            setIsHoveredDormir(null);
                        }}
                    >
                        <div className="slide-content">
                            <img className="img-list" src={filme.imgSource} alt={filme.titulo} />
                            {showTextDormir[index] && (
                                <div className="movie-title">{filme.titulo}</div>
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
                        width="1260"
                        height="762"
                        src={selectedVideo}
                        title="Reprodutor de Vídeo"
                    ></iframe>
                )}
            </Modal>
        </div>
    );
};

export default MovieListCats;
