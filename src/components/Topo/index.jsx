import React from "react";
import './style.css';

import logo from '../../assets/logo.png';

import light from '../../assets/sun.png';
import dark from '../../assets/moon.png';

const Topo = (props) =>
(
    <header className={props.temaEscuro ? 'header-escuro' : 'header-claro'}>
        <div className="container-topo ">
            <img className="img-topo-logo" src={logo} alt="Imagem do logo" />
            <button id="btn-topo" className={props.temaEscuro ? 'btn-topo-escuro' : 'btn-topo-claro'} onClick={props.clickAlterarCor}>
                <img className="img-dark-light" src={props.temaEscuro ? light : dark} alt={props.temaEscuro ? 'icon light' : 'icon dark'} />
            </button>
        </div>
    </header>
)

export default Topo;