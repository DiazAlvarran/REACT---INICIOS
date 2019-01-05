import React, { Component } from 'react';
import './css/Styles.css';

class Barra_navegacion extends Component {
	render() {
		return (
			<nav className="Barra_navegacion">
				<ul className="Lista_menu_principal">
					<li className="Lista_horizontal">Inicio</li>
					<li className="Lista_horizontal">Artículos</li>
					<li className="Lista_horizontal">Cursos</li>
					<li className="Lista_horizontal">Contacto</li>
				</ul>
			</nav>
		);
	} 
}

export default Barra_navegacion;