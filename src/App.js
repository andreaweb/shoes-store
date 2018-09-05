import React, { Component } from 'react';

/* components */
import LogoContainer from './components/general/LogoContainer.js'
import Navigation from './components/general/Navigation.js'
import Breadcrumb from './components/general/Breadcrumb.js'
import MainProduct from './components/product-page/MainProduct.js'
import SuggestedProducts from './components/product-page/SuggestedProducts.js'
import Footer from './components/general/Footer.js'
import Modal from './components/product-page/Modal.js'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingBag: 0,
      isModalOpen: false
    }
  }
  updateShoppingBag = () => {
    let increment = this.state.shoppingBag + 1
    this.setState({shoppingBag: increment, isModalOpen: true })
  }
  closeModal = () => {
    this.setState({isModalOpen: false})
  }
  render() {
    return (
      <div className={this.state.isModalOpen ? "App App--modal" : "App"}>
        <header className="header">
          <LogoContainer />

          <Navigation bag={this.state.shoppingBag} />

        </header>

        <main>
          <Breadcrumb />

          <MainProduct updateBag={this.updateShoppingBag} />

          <SuggestedProducts />
        </main>

        <Modal {...this.state} closeModal={this.closeModal} />

        <Footer />
      </div>
    );
  }
}

export default App;
