import React from 'react';

class ProductInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colors: [
        {
          colorName: 'Vermelho',
          colorClass: 'red-bg'
        },
        {
          colorName: 'Azul',
          colorClass: 'marine-blue-bg'
        },
        {
          colorName: 'Pastel',
          colorClass: 'pastel-orange-bg'
        },
        {
          colorName: 'Preto',
          colorClass: 'black-bg'
        }
      ],
      selectedColor: 0,
      sizes: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
      selectedSize: 37
    }

  }
  selectSize = (size) => {
    this.setState({selectedSize: size})
  }
  selectColor = (key) => {
    this.setState({selectedColor: key})
  }
  render(){
    return (
      <div className="main-product__info">
        <section className="main-product__info__title">
          <h2 className="product-title">{this.props.product.name}</h2>
          <span>RT 0568 | 03.07.0653</span>
        </section>

        <section className="main-product__info__price">
          <span className="off">{this.props.product.oldPrice}</span>
          <span className="red"> |</span>
          <span className="new-price">{this.props.product.price}</span>
          <span className="parcelas">Ou 6x de R$9,20</span>
        </section>

        <section className="main-product__info__color">
          <div className="margin-bottom">
            <span>Cor: 
              <span className="light-blue"> 
                ({this.state.colors[this.state.selectedColor].colorName})
              </span>
            </span>
          </div>

          {this.state.colors.map(
              (color, key) => 
              <span 
                key={key}
                onClick={() => this.selectColor(key)}
                className={this.state.selectedColor === key 
                            ? color.colorClass + " color-circle color-circle--active"
                            : color.colorClass + " color-circle"
                          }
              />
            )
          }
          
          
        </section>

        <section 
          className={
            this.props.product.type === "shoes" ? "main-product__info__size" : "display-none"
          }
        >
          <div className="margin-bottom margin-top">
            <span>Tamanho: 
              <span className="light-blue"> ({this.state.selectedSize})</span>
            </span> 
            <span className="link link--position">Guia de Medidas</span>
          </div>
          { this.state.sizes.map(
              (size,key) => 
                <span 
                  key={key} 
                  onClick={() => this.selectSize(size)}
                  className={this.state.selectedSize === size
                    ? "size-circle size-circle--active"
                    : "size-circle"
                  }
                >
                  {size}
                </span>
            )
          }
        </section>

        <button 
          className="button" 
          onClick={this.props.updateShoppingBag}
        >
          ADICIONAR À SACOLA
        </button>

        <span className="main-product__info__description">
          Rasteira em atanado soft com tira no dedo e fechamento de fivela. 
          Possui sola sempre na cor do cabedal.
        </span>
      </div>
    )
  }
}
export default ProductInfo;