import React, { Component } from 'react';
import truck from './svg/truck.svg';
import logo from './svg/logo.svg';
import search from './svg/search.svg';
import bag from './svg/bag.svg';
import play from './svg/play.svg';
import plus from './svg/circle-plus.svg';
import caretUp from './svg/caret-up.svg';
import caretDown from './svg/caret-down.svg';
import caretRight from './svg/caret-right.svg';
import caretLeft from './svg/caret-left.svg';
import facebook from './svg/facebook.svg';
import instagram from './svg/instagram.svg';
import pinterest from './svg/pinterest.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} />
          </section>

          <nav>
            <section>
              Entrar | Cadastrar-se
            </section>
            <ul>
              <li>SAPATOS</li>
              <li>BOLSAS</li>
              <li>ACESSÓRIOS</li>
              <li>OFF</li>
            </ul>
            <section>
              <img src={search} />
              <input placeholder="Busca" />
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
            <li>Sapatos</li>
          </ul>

          <section className="main-product">
            <div className="main-product__thumbnails">
              <img src={play} />
              <img src={caretUp} />
              <img src={caretDown} />
            </div>
            <div className="main-product__picture">
            </div>
            <div className="main-product__info">
              <section className="main-product__info__title">
                <h2>Rasteira Tira Dedo</h2>
                <span>RT 0568 | 03.07.0653</span>
              </section>

              <section className="main-product__info__price">
                <span>R$69,00 | R$55,20</span>
                <span>Ou 6x de R$9,20</span>
              </section>

              <section className="main-product__info__color">
                <span>Cor: (Fucsia)</span>
                <span className="color-circle"></span>
                <span className="color-circle"></span>
                <span className="color-circle"></span>
                <span className="color-circle"></span>
              </section>

              <section className="main-product__info__size">
                <span>Tamanho: (37)</span> <span>Guia de Medidas</span>
                <span className="size-circle">33</span>
                <span className="size-circle">34</span>
                <span className="size-circle">35</span>
                <span className="size-circle">36</span>
                <span className="size-circle">37</span>
                <span className="size-circle">38</span>
                <span className="size-circle">39</span>
                <span className="size-circle">40</span>
                <span className="size-circle">41</span>
                <span className="size-circle">42</span>
              </section>

              <button>ADICIONAR À SACOLA</button>

              <span className="main-product__info__description">
                Rasteira em atanado soft com tira no dedo e fechamento de fivela. 
                Possui sola sempre na cor do cabedal.
              </span>
            </div>
          </section>

          <section className="suggested-products">
            <h3>QUEM VIU VIU TAMBÉM</h3>
            <ul>
              <li>
                <img src={plus} className="suggested-products__add" />
                <img className="suggested-products__image" />
                <section className="suggested-products__info">
                  <span>R$204,90</span>
                  <span className="color-circle__small"></span>
                </section>
              </li>
            </ul>
            <div className="pagination">
              1 de 10
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

        <footer>
          <section className="newsletter">
            <h5>ASSINE NOSSA NEWS</h5>
            <input id="name" />
            <input id="email" type="email" />
            <button>Enviar</button>
          </section>

          <section className="links">
            <ul className="links__social-media">
              <li><img src={facebook} /></li>
              <li><img src={instagram} /></li>
              <li><img src={pinterest} /></li>
            </ul>

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
              <li>CProcon</li>
            </ul>
          </section>

          <section className="address">
            <span>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</span>
            <span>Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</span>
            <span>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</span>

            <img src={logo} />
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
