import React from 'react';

class Breadcrumb extends React.Component {
  render(){
  	return (
  		<ul className="breadcrumb">
            <li>Home</li>
            <li className="breadcrumb__current-page">Sapatos</li>
          </ul>
        )
  }
}
export default Breadcrumb;