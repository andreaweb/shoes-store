import React from 'react';

/* SVG ICONS */
import lineBackground from '../../svg/background.svg';


import Thumbnails from './Thumbnails.js'
import ProductInfo from './ProductInfo.js'

class MainProduct extends React.Component {
  render(){
    return (
      <section className="main-product" style={{backgroundImage: `url(${lineBackground})`}}>
            <Thumbnails product={this.props.product} />

            <div className="main-product__picture">
              <img src={this.props.product.img} alt="" />
            </div>

            <ProductInfo 
              product={this.props.product}
              updateShoppingBag={this.props.updateBag}
            />
      </section>
    )
  }
}
export default MainProduct;