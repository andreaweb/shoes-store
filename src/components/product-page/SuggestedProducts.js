import React from 'react';
import SuggestedProduct from './SuggestedProduct.js';
import Pagination from '../general/Pagination.js';

class SuggestedProducts extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
			products: [
				{	name: "Bolsa Alcinha",
					img: "./images/bolsa.jpg",
					price: "R$ 99,99"
				},
				{
					name: "Rasteirinha Brilhosa",
					img: "./images/rasteirinha.jpg",
					price: "R$ 19,99"
				},
				{
					name: "Sandália Tira Dedo",
					img: "./images/sandalia.jpg",
					price: "R$ 55,20"
				},
				{
					name: "Carteira de Couro",
					img: "./images/carteira.jpg",
					price: "R$ 89,99"
				}
			] 
		}
	}
  render(){
  	return (
  		<section className="suggested-products">
            <h3 className="suggested-products__title">QUEM VIU VIU TAMBÉM</h3>
            <ul>
             {  
             	this.state.products.map(
             		(product,key) => 
             			<SuggestedProduct img={product.img} price={product.price} /> 
             	)
             }
            </ul>
            <Pagination />
          </section>
        )
  }
}
export default SuggestedProducts;