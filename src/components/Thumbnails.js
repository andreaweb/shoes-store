import React from 'react';
import play from '../svg/play.svg';
import caretUp from '../svg/caret-up.svg';
import caretDown from '../svg/caret-down.svg';

class Thumbnails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      picsLength: 4,
      selectedThumbnail: 0
    }
  }

  selectThumbnail = (key) => {
    this.setState({selectedThumbnail: key})
  }

  moveSelectedThumbnail = (val) => {
    let nextThumbnail = this.state.selectedThumbnail+val;
    let totalThumbnails = this.state.picsLength;

    if(nextThumbnail < totalThumbnails && nextThumbnail > 0){
      this.setState({selectedThumbnail: nextThumbnail})
    }else if(nextThumbnail < 0){
      this.setState({selectedThumbnail: totalThumbnails-1})
    }else{
      this.setState({selectedThumbnail: 0})
    }
  }
  render(){
    return (
      <div className="main-product__thumbnails">
        <section className="main-product__thumbnails__video">
          <span>Vídeo</span>
          <img src={play} />
        </section>

        <button 
          onClick={(val) => this.moveSelectedThumbnail(-1)}
          className="main-product__thumbnails__button main-product__thumbnails__button--link-up"
        >
          <img src={caretUp} />
        </button>

        {[...Array(this.state.picsLength)].map(
          (e,key) => 
          <img 
            src="./images/sandalia.jpg"
            key={key}
            onClick={() => this.selectThumbnail(key)}
            className={key == this.state.selectedThumbnail 
              ? "main-product__thumbnails__thumbnail main-product__thumbnails__thumbnail--active"
              : "main-product__thumbnails__thumbnail"
            } 
          />
        )}
        
        <button 
          onClick={(val) => this.moveSelectedThumbnail(1)}
          className="main-product__thumbnails__button main-product__thumbnails__button--link-down"
        >
          <img src={caretDown} />
        </button>
      </div>
    )
  }
}
export default Thumbnails;