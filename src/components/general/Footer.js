import React from 'react';
import facebook from '../../svg/facebook.svg';
import instagram from '../../svg/instagram.svg';
import pinterest from '../../svg/pinterest.svg';
import certified from '../../svg/certified.svg';
import ebit from '../../svg/ebit.svg';
import whiteLogo from '../../svg/white-logo.svg';

class Footer extends React.Component {
  render(){
    return (
        <footer className="footer">
          <section className="links">
            <div className="external-links">
              <ul className="links__social-media">
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={instagram} alt="Instagram" /></li>
                <li><img src={pinterest} alt="Pinterest" /></li>
              </ul>

              <ul className="links__certifications">
                <li><img src={certified} alt="Security Certification" /></li>
                <li><img src={ebit} alt="Prize for best store" /></li>
              </ul>
            </div>

            <ul className="links__group">
              <li className="links__group--title">INSTITUCIONAL</li>
              <li>A Marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>

            <ul className="links__group">
              <li className="links__group--title">INFORMAÇÕES</li>
              <li>Formas de Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li>Cuidados com o Produto</li>
            </ul>

            <ul className="links__group">
              <li className="links__group--title">CONHEÇA</li>
              <li>Franquias e Multimarcas</li>
              <li>Trabalhe com a Gente</li>
              <li>Procon</li>
            </ul>
          </section>

          <section className="newsletter">
            <h5 className="newsletter__title">ASSINE NOSSA NEWS</h5>
            <label className="newsletter__label">Nome</label>
            <input id="name" className="newsletter__input" />
            <label className="newsletter__label">E-mail</label>
            <input id="email" className="newsletter__input" type="email" />
            <button className="newsletter__button">Enviar</button>
          </section>

          <section className="address">
            <span>
            <span>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</span>
            <span>Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</span>
            <span>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</span>
            </span>

            <img src={whiteLogo} className="white" alt="Logo" />
          </section>
        </footer>
      )
  }
}
export default Footer;