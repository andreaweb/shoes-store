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
      isModalOpen: false,
      products: [
        { name: "BOLSA ALCINHA",
          type: "accessory",
          img: "./images/bolsa.jpg",
          oldPrice: "R$ 139,99",
          price: "R$ 99,99"
        },
        {
          name: "RASTEIRINHA BRILHOSA",
          type: "shoes",
          img: "./images/rasteirinha.jpg",
          oldPrice: "R$ 39,99",
          price: "R$ 19,99"
        },
        {
          name: "SANDÁLIA TIRA DEDO",
          type: "shoes",
          img: "./images/sandalia.jpg",
          oldPrice: "R$ 69,99",
          price: "R$ 55,20"
        },
        {
          name: "CARTEIRA DE COURO",
          type: "accessory",
          img: "./images/carteira.jpg",
          oldPrice: "R$ 129,99",
          price: "R$ 89,99"
        }
      ],
      activeProduct: 2
    }
  }
  updateShoppingBag = () => {
    let increment = this.state.shoppingBag + 1
    this.setState({shoppingBag: increment, isModalOpen: true })
  }
  closeModal = () => {
    this.setState({isModalOpen: false})
  }
  changeActiveProduct = (key) => {
    this.setState({activeProduct: key})
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

          <MainProduct 
            product={this.state.products[this.state.activeProduct]} 
            updateBag={this.updateShoppingBag} 
          />

          <SuggestedProducts 
            {...this.state} 
            changeActiveProduct={(key) => this.changeActiveProduct(key)} 
          />
        </main>

        <Modal {...this.state} closeModal={this.closeModal} />

        <Footer />
      </div>
    );
  }
}

export default App;
