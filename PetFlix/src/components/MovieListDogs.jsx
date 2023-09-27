import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';
import './CustomArrows.css';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows';
import './MovieList.css';

const filmes = [
    { titulo: 'Cachorros Brincando', imgSource: '/bolt.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/9DhCUZaNIm4?si=09WLf5zo-EBZVr4r' },
    { titulo: 'Cachorros No Jardim', imgSource: '/marley.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/f_QLiKS3aug?si=h_z7PDhKbL9C8JDG' },
    { titulo: 'Cachorros Filhotes Latindo', imgSource: '/bolt.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/-sR9G5ZWj2w?si=VlThasq0uCL1m5Fz' },
    { titulo: 'Cachorros Correndo', imgSource: '/marley.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/r9-Hd_vuHV4?si=CRpDlO-SYQki5rQZ' },
    { titulo: 'Cachorros Curiosos', imgSource: '/bolt.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/QYZLUamaweQ?si=cW-7QiDz21tVABgS' },
    { titulo: 'Cachorros Fofos', imgSource: '/marley.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/N7TX7mp871M?si=fqTtcEtiyVFYsk0a' },
];

const filmesDormir = [
    { titulo: 'Cachorros Dormindo', imgSource: '/bolt.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/SA2RM3b8NNM?si=0Zks59P06uR0eIpI' },
    { titulo: 'Cachorros Dormindo', imgSource: '/marley.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/SA2RM3b8NNM?si=0Zks59P06uR0eIpI' },
    { titulo: 'Cachorros Dormindo', imgSource: '/bolt.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/SA2RM3b8NNM?si=0Zks59P06uR0eIpI' },
    { titulo: 'Cachorros Dormindo', imgSource: '/marley.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/SA2RM3b8NNM?si=0Zks59P06uR0eIpI' },
    { titulo: 'Cachorros Dormindo', imgSource: '/bolt.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/SA2RM3b8NNM?si=0Zks59P06uR0eIpI' },
    { titulo: 'Cachorros Dormindo', imgSource: '/marley.jpeg', descricao: '.', videoUrl: 'https://www.youtube.com/embed/SA2RM3b8NNM?si=0Zks59P06uR0eIpI' },
];

const MovieListDogs = () => {
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
                <p className='text-title-list'>Para o seu cachorro assistir</p>
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
                <p className='text-title-list'>Para o seu cachorro dormir</p>
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

export default MovieListDogs;
