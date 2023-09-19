import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css";

const MovieList = () => {
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
        arrows: true, 
    };

    return (
        <div className="movie-list">
            <Slider {...settings}>
                {filmes.map((filme, index) => (
                    <div key={index} className="movie-slide">
                        <img className='testeImg' src={filme.imgSource} alt={filme.titulo} />
                        <h3>{filme.titulo}</h3>
                        <p>{filme.descricao}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieList;
