import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './css/main.css'

class Carousel extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            autoplay: true,
            nextArrow: 0,
            prevArrow: 0
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="fondo01 fondo">
                            <h1 className="title">Recipe Book</h1>
                            <h6>Crea tus nuevas recetas con recipe-book</h6>
                            <NavLink to="/" className="square-button">visita el menu</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="fondo02 fondo">
                            <h2>New Categories</h2>
                            <h6>encuentra millones de recetas dentro de nuestras categorias</h6>
                            <NavLink to="/category" className="square-button">ir a nuestras categorias</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="fondo03 fondo">
                            <h2>New Collections</h2>
                            <h6>descubre las collectiones de recetas</h6>
                            <NavLink to="/" className="square-button">ir a nuestras colecciones</NavLink>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Carousel