import React from 'react';
import caretRight from '../../svg/caret-right.svg';
import caretLeft from '../../svg/caret-left.svg';

class Pagination extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage: 1,
			totalPages: 10
		}
	}
	updatesPage = (val) => {
		let nextPage = this.state.currentPage+val
		let totPages = this.state.totalPages

		if(nextPage <= totPages && nextPage > 0){
	      this.setState({currentPage: nextPage})
	    }else if(nextPage < 1){
	      this.setState({currentPage: totPages})
	    }else{
	      this.setState({currentPage: 1})
	    }
	}
  	render(){
    	return (
	    	<div className="pagination">
	          <img 
				src={caretLeft} 
				onClick={(val) => this.updatesPage(-1)} 
				className="pagination__caret" 
				alt="Previous Page"
	          />
	          <span>{this.state.currentPage} de {this.state.totalPages} </span>
	          <img 
				src={caretRight} 
				onClick={(val) => this.updatesPage(1)} 
				className="pagination__caret"
				alt="Next Page"
	          />
	        </div>
    	)
	}
}
export default Pagination