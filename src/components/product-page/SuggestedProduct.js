import React from 'react';
import plus from '../../svg/plus.svg';

class SuggestedProduct extends React.Component {
  render(){
    return (
      <li className="suggested-product">
          <img src={plus} className="suggested-product__add" />
          <img className="suggested-product__image" src={this.props.img} />
          <section className="suggested-product__info">
            <span>{this.props.price}</span>
            <span>
              <span className="color-circle red-bg color-circle--small"></span>
              <span className="color-circle marine-blue-bg color-circle--small"></span>
              <span className="color-circle pastel-orange-bg color-circle--small"></span>
              <span className="color-circle black-bg color-circle--small"></span>
            </span>
          </section>
        </li>
      )
  }
}

export default SuggestedProduct