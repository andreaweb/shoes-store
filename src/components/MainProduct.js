import React from 'react';

/* SVG ICONS */
import lineBackground from '../svg/background.svg';


import Thumbnails from './Thumbnails.js'
import ProductInfo from './ProductInfo.js'

class MainProduct extends React.Component {
  render(){
    return (
      <section className="main-product" style={{backgroundImage: `url(${lineBackground})`}}>
            <Thumbnails />

            <div className="main-product__picture">
              <img src="./images/sandalia.jpg" />
            </div>

            <ProductInfo updateShoppingBag={this.props.updateBag} />
      </section>
    )
  }
}
export default MainProduct;