import React, { Component } from 'react';
import truck from './svg/truck.svg';
import logo from './svg/logo.svg';
import whiteLogo from './svg/white-logo.svg';
import lineBackground from './svg/background.svg';
import search from './svg/search.svg';
import bag from './svg/bag.svg';
import play from './svg/play.svg';
import plus from './svg/plus.svg';
import caretUp from './svg/caret-up.svg';
import caretDown from './svg/caret-down.svg';
import caretRight from './svg/caret-right.svg';
import caretLeft from './svg/caret-left.svg';
import facebook from './svg/facebook.svg';
import instagram from './svg/instagram.svg';
import pinterest from './svg/pinterest.svg';
import certified from './svg/certified.svg';
import ebit from './svg/ebit.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <section className="logo-container">
            <img src={logo} />
          </section>

          <nav className="main-menu">
            <section className="main-menu__login">
              Entrar | Cadastrar-se
            </section>
            <ul className="main-menu__navigation">
              <li>SAPATOS</li>
              <li>BOLSAS</li>
              <li>ACESSÓRIOS</li>
              <li>OFF</li>
            </ul>
            <section className="main-menu__search">
              <img className="main-menu__search__input-icon" src={search} />
              <input className="main-menu__search__input-field" placeholder="Busca" />
              <div>
                <img src={bag} />
                0
              </div>
            </section>
          </nav>

        </header>

        <main>
          <ul className="breadcrumb">
            <li>Home</li>
            <li className="breadcrumb__current-page">Sapatos</li>
          </ul>

          <section className="main-product" style={{backgroundImage: `url(${lineBackground})`}}>
            <div className="main-product__thumbnails">
              <section className="main-product__thumbnails__video">
                <span>Vídeo</span>
                <img src={play} />
              </section>
              <img src={caretUp} className="main-product__thumbnails__link-up" />
              <img src="./images/sandalia.jpg" className="main-product__thumbnails__thumbnail main-product__thumbnails__thumbnail--active" />
              <img src="./images/sandalia.jpg" className="main-product__thumbnails__thumbnail" />
              <img src="./images/sandalia.jpg" className="main-product__thumbnails__thumbnail" />
              <img src="./images/sandalia.jpg" className="main-product__thumbnails__thumbnail" />
              <img src={caretDown} className="main-product__thumbnails__link-down" />
            </div>
            
            <div className="main-product__picture">
              <img src="./images/sandalia.jpg" />
            </div>

            <div className="main-product__info">
              <section className="main-product__info__title">
                <h2 className="product-title">RASTEIRA TIRA DEDO</h2>
                <span>RT 0568 | 03.07.0653</span>
              </section>

              <section className="main-product__info__price">
                <span className="off">R$69,00</span>
                <span className="red"> |</span>
                <span className="new-price">R$55,20</span>
                <span className="parcelas">Ou 6x de R$9,20</span>
              </section>

              <section className="main-product__info__color">
                <div className="margin-bottom">
                  <span>Cor: 
                    <span className="light-blue"> (Fucsia)</span>
                  </span>
                </div>
                <span className="color-circle color-circle--active red-bg"></span>
                <span className="color-circle marine-blue-bg"></span>
                <span className="color-circle pastel-orange-bg"></span>
                <span className="color-circle black-bg"></span>
              </section>

              <section className="main-product__info__size">
                <div className="margin-bottom margin-top">
                  <span>Tamanho: 
                    <span className="light-blue"> (37)</span>
                  </span> 
                  <span className="link link--position">Guia de Medidas</span>
                </div>
                <span className="size-circle">33</span>
                <span className="size-circle">34</span>
                <span className="size-circle">35</span>
                <span className="size-circle">36</span>
                <span className="size-circle size-circle--active">37</span>
                <span className="size-circle">38</span>
                <span className="size-circle">39</span>
                <span className="size-circle">40</span>
                <span className="size-circle">41</span>
                <span className="size-circle">42</span>
              </section>

              <button className="button">ADICIONAR À SACOLA</button>

              <span className="main-product__info__description">
                Rasteira em atanado soft com tira no dedo e fechamento de fivela. 
                Possui sola sempre na cor do cabedal.
              </span>
            </div>
          </section>

          <section className="suggested-products">
            <h3 className="suggested-products__title">QUEM VIU VIU TAMBÉM</h3>
            <ul>
              <li className="suggested-product">
                <img src={plus} className="suggested-product__add" />
                <img className="suggested-product__image" src="./images/rasteirinha.jpg" />
                <section className="suggested-product__info">
                  <span>R$204,90</span>
                  <span>
                    <span className="color-circle red-bg color-circle--small"></span>
                    <span className="color-circle marine-blue-bg color-circle--small"></span>
                    <span className="color-circle pastel-orange-bg color-circle--small"></span>
                    <span className="color-circle black-bg color-circle--small"></span>
                  </span>
                </section>
              </li>

              <li className="suggested-product">
                <img src={plus} className="suggested-product__add" />
                <img className="suggested-product__image" src="./images/carteira.jpg" />
                <section className="suggested-product__info">
                  <span>R$204,90</span>
                  <span>
                    <span className="color-circle red-bg color-circle--small"></span>
                    <span className="color-circle marine-blue-bg color-circle--small"></span>
                    <span className="color-circle pastel-orange-bg color-circle--small"></span>
                    <span className="color-circle black-bg color-circle--small"></span>
                  </span>
                </section>
              </li>

              <li className="suggested-product">
                <img src={plus} className="suggested-product__add" />
                <img className="suggested-product__image" src="./images/bolsa.jpg" />
                <section className="suggested-product__info">
                  <span>R$204,90</span>
                  <span>
                    <span className="color-circle red-bg color-circle--small"></span>
                    <span className="color-circle marine-blue-bg color-circle--small"></span>
                    <span className="color-circle pastel-orange-bg color-circle--small"></span>
                    <span className="color-circle black-bg color-circle--small"></span>
                  </span>
                </section>
              </li>

              <li className="suggested-product">
                <img src={plus} className="suggested-product__add" />
                <img className="suggested-product__image" src="./images/sandalia.jpg" />
                <section className="suggested-product__info">
                  <span>R$204,90</span>
                  <span>
                    <span className="color-circle red-bg color-circle--small"></span>
                    <span className="color-circle marine-blue-bg color-circle--small"></span>
                    <span className="color-circle pastel-orange-bg color-circle--small"></span>
                    <span className="color-circle black-bg color-circle--small"></span>
                  </span>
                </section>
              </li>
            </ul>
            <div className="pagination">
              <img src={caretLeft} className="pagination__caret" />
              <span>1 de 10 </span>
              <img src={caretRight} className="pagination__caret" />
            </div>
          </section>
        </main>

        <div style={{display: 'none'}} className="modal">
          <section className="modal-content">
            <img src="" alt="Close button" />
            <img src="" alt="Produto" />
            <h3>PRODUTO ADICIONADO COM SUCESSO!</h3>
            <button>FINALIZAR COMPRA</button>
            <span>Continuar Comprando</span>
          </section>
        </div>

        <footer className="footer">
          <section className="links">
            <div className="external-links">
              <ul className="links__social-media">
                <li><img src={facebook} /></li>
                <li><img src={instagram} /></li>
                <li><img src={pinterest} /></li>
              </ul>

              <ul className="links__certifications">
                <li><img src={certified} /></li>
                <li><img src={ebit} /></li>
              </ul>
            </div>

            <ul className="links__group">
              <li className="links__group--title">INSTITUCIONAL</li>
              <li>A Marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>

            <ul className="links__group">
              <li className="links__group--title">INFORMAÇÕES</li>
              <li>Formas de Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li>Cuidados com o Produto</li>
            </ul>

            <ul className="links__group">
              <li className="links__group--title">CONHEÇA</li>
              <li>Franquias e Multimarcas</li>
              <li>Trabalhe com a Gente</li>
              <li>Procon</li>
            </ul>
          </section>

          <section className="newsletter">
            <h5 className="newsletter__title">ASSINE NOSSA NEWS</h5>
            <label className="newsletter__label">Nome</label>
            <input id="name" className="newsletter__input" />
            <label className="newsletter__label">E-mail</label>
            <input id="email" className="newsletter__input" type="email" />
            <button className="newsletter__button">Enviar</button>
          </section>

          <section className="address">
            <span>
            <span>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</span>
            <span>Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</span>
            <span>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</span>
            </span>

            <img src={whiteLogo} className="white" />
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
