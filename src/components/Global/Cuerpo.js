import React, { Component } from 'react';
import './css/Styles.css';

// Components
import Contenido_cuerpo from './Contenido_cuerpo';
import Barra_lateral from './Barra_lateral';

class Cuerpo extends Component {
	render() {
		return (
			<div className="Cuerpo">
				<Contenido_cuerpo />
				<Barra_lateral />
			</div>
		);
	}
}

export default Cuerpo;