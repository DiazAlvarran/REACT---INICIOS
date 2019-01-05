import React, { Component } from 'react';
import './css/Styles.css';

// Components
import Cabecera from './Cabecera';
import Barra_navegacion from './Barra_navegacion';
import Cuerpo from './Cuerpo';

class Container extends Component {
	render() {
		return(
			<div className="Container">
				<Cabecera />
				<Barra_navegacion />
				<Cuerpo />
			</div>
		);
	}
}

export default Container;