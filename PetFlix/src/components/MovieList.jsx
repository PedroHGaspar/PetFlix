import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomArrows.css';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows';
import './MovieList.css';

const MovieList = () => {
    const [showText, setShowText] = useState(false);

    const filmes = [
        { titulo: 'Bolt - Supercão', imgSource: '/bolt.jpeg', descricao: 'bolttttttttttttt' },
        { titulo: 'Gato de Botas 2: O Último Pedido', imgSource: '/gato-botas.png', descricao: 'gato de botassssssssssss' },
        { titulo: 'Bolt - Supercão', imgSource: '/bolt.jpeg', descricao: 'bolttttttttttttt' },
        { titulo: 'Gato de Botas 2: O Último Pedido', imgSource: '/gato-botas.png', descricao: 'gato de botassssssssssss' },
        { titulo: 'Bolt - Supercão', imgSource: '/bolt.jpeg', descricao: 'bolttttttttttttt' },
        { titulo: 'Gato de Botas 2: O Último Pedido', imgSource: '/gato-botas.png', descricao: 'gato de botassssssssssss' },
        { titulo: 'Bolt - Supercão', imgSource: '/bolt.jpeg', descricao: 'bolttttttttttttt' },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className="movie-list">
            <Slider {...settings}>
                {filmes.map((filme, index) => (
                    <div
                        key={index}
                        className={`movie-slide ${showText ? 'show-text' : ''}`}
                        onMouseEnter={() => setShowText(true)}
                        onMouseLeave={() => setShowText(false)}
                    >
                        <div className="slide-content">
                            <img className="testeImg" src={filme.imgSource} alt={filme.titulo} />
                            {showText && (
                                <div className="movie-title">{filme.titulo}</div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieList;
