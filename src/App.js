import React, { Component } from 'react';

/* components */
import LogoContainer from './components/LogoContainer.js'
import Navigation from './components/Navigation.js'
import Breadcrumb from './components/Breadcrumb.js'
import MainProduct from './components/MainProduct.js'
import SuggestedProducts from './components/SuggestedProducts.js'
import Footer from './components/Footer.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <LogoContainer />

          <Navigation />

        </header>

        <main>
          <Breadcrumb />

          <MainProduct />

          <SuggestedProducts />
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

        <Footer />
      </div>
    );
  }
}

export default App;
