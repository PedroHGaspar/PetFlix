import "../App.css";
import Menu from './Menu';
import MovieList from './MovieList';

function Home() {
  return (
    <div>
      {/* <Menu /> */}
      <section className="home-screen-container">
        <img className="background-image-home imagem sem-blur" src="/pets-image.jpg" alt="" />
        <div class="mascara-blur"></div>
        <div className="content-body-filme-principal">
          <h3 className="title-home">PETFLIX <span>ORIGINAL</span></h3>
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
            <button className="button-start-home">
              <i className="fa fa-play icon-play"></i>
              <span className="button-assistir-text">Assistir</span>
            </button>
            {/* <button>MAIS INFORMAÇÕES</button> */}
          </div>
        </div>
      </section>
      <MovieList />
    </div>
  );
}

export default Home;
