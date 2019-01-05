import React, { Component } from 'react';
import persona from './images/persona.png';
import './css/Styles.css';

class Cabecera extends Component {
	render() {
		return(
			<header className="Cabecera">
				<figure className="Figura_titulo">
					<img src={persona} className="Img_titulo" />
				</figure>
				<h1 className="Titulo_cabecera">Jorge Victor Diaz Alvarran</h1>
				<h2 className="Subtitulo_cabecera">Desarrollo web, maquetacion HTML, y desarrollo Backend con Nodejs</h2>
			</header>
		);
	}
}

export default Cabecera;