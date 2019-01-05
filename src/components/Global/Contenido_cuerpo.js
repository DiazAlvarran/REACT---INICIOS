import React, { Component } from 'react';
import './css/Styles.css';
import Heartbleed from './images/Heartbleed.png';

class Contenido_cuerpo extends Component {
	render() {
		return(
			<main className="Contenido_cuerpo">
				<nav clasName="Navegacion_cuerpo">
					<ul>
						<li className="Lista_horizontal">Inicio</li>
						<li className="Lista_horizontal">Seguridad</li>
					</ul>
				</nav>
				<article className="Articulo">
					<header className="Art_titulo1">
						<h1 className="Titulo_articulo">Cómo protegerse de Heartbleed</h1>
					</header>
					<figure className="Figure_tema">
						<img src={Heartbleed} className="Img_tema" />
					</figure>
					<p>
						Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
					</p>
					<footer>Escrito por Jorge Victor Diaz Alvarran</footer>
				</article>
			</main>
		);
	}
}

export default Contenido_cuerpo;