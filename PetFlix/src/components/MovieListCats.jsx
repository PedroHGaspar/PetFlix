import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomArrows.css';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows';
import './MovieList.css';

const filmes = [
    { titulo: 'Gato 1', imgSource: '/bolt.jpeg', descricao: '.' },
    { titulo: 'Gato 2', imgSource: '/marley.jpeg', descricao: '.' },
    { titulo: 'Gato 3', imgSource: '/bolt.jpeg', descricao: '.' },
    { titulo: 'Gato 4', imgSource: '/marley.jpeg', descricao: '.' },
    { titulo: 'Gato 5', imgSource: '/bolt.jpeg', descricao: '.' },
    { titulo: 'Gato 6', imgSource: '/marley.jpeg', descricao: '.' },
];

const filmesDormir = [
    { titulo: 'Gato 1', imgSource: '/bolt.jpeg', descricao: '.' },
    { titulo: 'Gato 2', imgSource: '/marley.jpeg', descricao: '.' },
    { titulo: 'Gato 3', imgSource: '/bolt.jpeg', descricao: '.' },
    { titulo: 'Gato 4', imgSource: '/marley.jpeg', descricao: '.' },
    { titulo: 'Gato 5', imgSource: '/bolt.jpeg', descricao: '.' },
    { titulo: 'Gato 6', imgSource: '/marley.jpeg', descricao: '.' },
    // Adicione mais filmes para gatos dormirem aqui
];

const MovieListCats = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [showText, setShowText] = useState(Array(filmes.length).fill(false));

    const [isHoveredDormir, setIsHoveredDormir] = useState(null);
    const [showTextDormir, setShowTextDormir] = useState(Array(filmesDormir.length).fill(false));
    //aqui é criado um estado local para controlar a visibilidade de cada filme INDEPENDENTE.
    // Array(filmes.length) cria um novo array com um número de elementos igual ao comprimento (número de filmes) do array filmes(objeto)
    // o método fill(false) preenche esse novo array com valores false. inicialmente para cada filme o estado showText é definido como false, o que significa que o texto não está visível.
    //depois disso é só manipular o showText e o setShowText para mostrar o texto.


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    const toggleTextVisibility = (index) => {
        const updatedShowText = [...showText];//aqui usando o spread eu clonei o array showText
        updatedShowText[index] = !updatedShowText[index];//aqui eu pego um valor especifico do array e inverte ele com o operador !
        setShowText(updatedShowText);//aqui eu atualizo o estado showText com o novo array, informando que o estado foi alterado e o texto será mostrado do item daquele índice em que o mouse está pegando.
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

            <Slider {...settings}> {/* aqui no spread é renderizado o Slider(componente pronto do react), isso cria o carrossel */}
                {filmes.map((filme, index) => (//aqui é criado um map padrão para crIAr um conjunto de divs, uma div pra cada filme(pra isso q serve o map)
                    <div
                        key={index}//aqui faz com que cada filme tenha seu proprio index, seu proprio indicador unico para nao haver falhas de renderizaçao e pra cada filme ser único
                        className={`movie-slide ${showText[index] ? 'show-text' : ''} ${isHovered === index ? 'hovered' : ''}`}
                         //aqui fiz com que a classe seja dinamica de acordo com o estado do componente.
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
        </div>
    );
};

export default MovieListCats;
