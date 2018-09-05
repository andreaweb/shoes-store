import React from 'react';
import logo from '../../svg/logo.svg';

class LogoContainer extends React.Component {
  render(){
  	return (
  		<section className="logo-container">
            <img src={logo} alt="logo" />
        </section>
        )
    }
}
export default LogoContainer;