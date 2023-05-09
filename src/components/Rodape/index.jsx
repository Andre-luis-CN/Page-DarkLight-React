import React from "react";
import './style.css';

import logo from '../../assets/logo.png';
import face from '../../assets/facebook.png';
import tt from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import dribble from '../../assets/dribble.png';
import behance from '../../assets/behance.png';
import google from '../../assets/google-plus.png';

const Rodape = (props) => (
    <footer className={props.temaEscuro ? 'footer-escuro' : 'footer-claro'}>
        <div className="container-rodape">
            <img src={logo} alt="logo" />
            <p id="text-rodape" className={props.temaEscuro ? 'text-rodape-escuro' : 'text-rodape-claro'}>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas
            </p>
            <div className="social">
                <img src={face} alt="Facebook" />
                <img src={tt} alt="Twitter" />
                <img src={linkedin} alt="Linkedin" />
                <img src={dribble} alt="Dribble" />
                <img src={behance} alt="Behance" />
                <img src={google} alt="Google Plus" />
            </div>
            <p id="copyrignt" className={props.temaEscuro ? 'copyrignt-escuro' : 'copyrignt-claro'}>Copyright 2023 <span>André Luis Coelho do Nascimento</span></p>
        </div>
    </footer>
)

export default Rodape;