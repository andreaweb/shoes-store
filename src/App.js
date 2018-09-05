import React, { Component } from 'react';

/* components */
import LogoContainer from './components/LogoContainer.js'
import Navigation from './components/Navigation.js'
import Breadcrumb from './components/Breadcrumb.js'
import MainProduct from './components/MainProduct.js'
import SuggestedProducts from './components/SuggestedProducts.js'
import Footer from './components/Footer.js'
import Modal from './components/Modal.js'

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
