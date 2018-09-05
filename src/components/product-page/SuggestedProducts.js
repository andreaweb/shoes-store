import React from 'react';
import SuggestedProduct from './SuggestedProduct.js';
import Pagination from '../general/Pagination.js';

class SuggestedProducts extends React.Component {
	constructor(props){
		super(props);
	}
  render(){
  	return (
  		<section className="suggested-products">
            <h3 className="suggested-products__title">QUEM VIU VIU TAMBÉM</h3>
            <ul>
             {  
             	this.props.products.map(
             		(product,key) => 
             			<SuggestedProduct img={product.img} 
             				key={key}
             				price={product.price}
             				updateBag={this.updateShoppingBag} 
             				changeActiveProduct={() => this.props.changeActiveProduct(key)}
             			/> 
             	)
             }
            </ul>
            <Pagination />
          </section>
        )
  }
}
export default SuggestedProducts;