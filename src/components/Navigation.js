import React from 'react';
import search from '../svg/search.svg';
import bag from '../svg/bag.svg';

class Navigation extends React.Component {
  render(){
    return (
      <nav className="main-menu">
        <section className="main-menu__login">
          <span>Entrar</span><span> | </span><span className="mq-display-block">Cadastrar-se</span>
        </section>
        <ul className="main-menu__navigation">
          <li>SAPATOS</li>
          <li>BOLSAS</li>
          <li>ACESSÓRIOS</li>
          <li>OFF</li>
        </ul>
        <section className="main-menu__search">
          <img className="main-menu__search__input-icon" src={search} />
          <input className="main-menu__search__input-field" placeholder="Busca" />
          <div>
            <img src={bag} />
            {this.props.bag}
          </div>
        </section>
      </nav>
    )
  }
}
export default Navigation;