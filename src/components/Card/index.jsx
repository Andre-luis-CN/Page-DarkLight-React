import React from "react";
import './style.css';

const Card = (props) => (
    <div id="cards" className={props.temaEscuro ? 'cards-escuro' : 'cards-claro'}>
        <p className="primeiro-paragrafo">{props.data}</p>
        <h3 >{props.titulo}</h3>
        <p className="segundo-paragrafo">{props.empresa}</p>
        <p >{props.paragrafo}</p>
    </div>
)

export default Card;