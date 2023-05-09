import React from "react";
import './style.css';

import imgBanner from '../../assets/banner.png';

const SecaoBanner = (props) => 
(
    <section>
        <div className="container-banner">
            <div className={ props.temaEscuro ? 'container-img-banner-escuro' : 'container-img-banner-claro' }>
                <img className="img-banner" src={imgBanner} alt="banner" />
            </div>
            <div className="container-text-banner">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding</h1>
                <span>e design digital</span>
            </div>
        </div>
    </section>
)

export default SecaoBanner;