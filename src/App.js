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
  constructor(props){
    super(props);
    this.state = {
      shoppingBag: 0
    }
  }
  updateShoppingBag = () => {
    let increment = this.state.shoppingBag+1
    this.setState({shoppingBag: increment })
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <LogoContainer />

          <Navigation bag={this.state.shoppingBag} />

        </header>

        <main>
          <Breadcrumb />

          <MainProduct updateBag={this.updateShoppingBag} />

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
