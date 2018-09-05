import React from 'react';
import close from '../../svg/close.svg';

class Modal extends React.Component {
  render(){
    return (
    	<div className={this.props.isModalOpen ? "modal" : "display-none"} onClick={this.props.closeModal}>
		  <section className="modal-content">
		    <img src={close} alt="Close button" className="modal__close" onClick={this.props.closeModal} />
		    <img src="./images/sandalia.jpg" className="modal__image" alt="Produto" />
		    <h3 className="modal__title">PRODUTO ADICIONADO COM SUCESSO!</h3>
		    <button className="button modal__button">FINALIZAR COMPRA</button>
		    <span className="modal__link">Continuar Comprando</span>
		  </section>
		</div>
	)
  }
}
export default Modal;