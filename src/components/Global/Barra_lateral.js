import React, { Component } from 'react';
import './css/Styles.css';

import Html5 from './images/html5.png';

class Barra_lateral extends Component {
	render() {
		return(
			<aside className="Barra_lateral">
				<div className="Caja_sigueme">
					<h3 className="Sigueme">Sígueme</h3>
				</div>
				<div className="Iconos">
					<i className="fab fa-facebook-square"></i>
					<i className="fab fa-twitter-square"></i>
					<i className="fab fa-google-plus-square"></i>
				</div>
				<div className="Caja_curso">
					<h3 className="Curso">Curso online de HTML</h3>
				</div>
				<figure className="Figure_html5">
					<img src={Html5} className="Imagen_html5" />
				</figure>
				<div className="Caja_categoria">
					<h3 className="Categoria">Contenido por categoría</h3>
				</div>
				<div className="Lista_categoria">
					<ul>
						<li className="Lista_vertical">- Desarrollo (5)</li>
						<li className="Lista_vertical">- Desarrollo web (7)</li>
					</ul>
				</div>
			</aside>
		);
	}
}

export default Barra_lateral;