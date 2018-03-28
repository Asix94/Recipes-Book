import React, { Component } from 'react'
import './index.css'
import logo from '../../logo.png'

class Footer extends Component {
    render() {
        return (
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={logo} alt="" className="logo-footer" />
                            </div>
                            <div className="col-md-2">
                                Navegacion
        <ul>
                                    <li><a className="ancor-footer" href="">Home</a></li>
                                    <li><a className="ancor-footer" href="">Categorias</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                Sitemap
        <ul>
                                    <li><a className="ancor-footer" href="">Contactanos</a></li>
                                    <li><a className="ancor-footer" href="">Sobre Nosotros</a></li>
                                    <li><a className="ancor-footer" href="">Terminos y Condiciones</a></li>
                                    <li><a className="ancor-footer" href="">Politica de Cookies</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <p className="description">Tu aplicación perfecta de recetas recipe-book,
                                  tu propio libro de recetas. Registrate y encuentra tu perfecta receta o encuentrala en minutos</p>
                            </div>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer