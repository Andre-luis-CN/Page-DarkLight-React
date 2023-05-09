import React from "react";
import './style.css';
import Card from "../Card";

const SecaoExperiencias = (props) => (
    <section className= {props.temaEscuro ? 'tema-escuro-expe' : 'tema-claro-expe'}>
        <div className="limite-tamanho container-experiencia">
            <div className="container-info-expe">
                <h2 id="title-expe" className={ props.temaEscuro ? 'title-expe-escuro' : 'title-expe-claro' }>Experiências De Trabalho</h2>
                <p id="text-expe" className={ props.temaEscuro ? 'text-expe-escuro' : 'text-expe-claro' }>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className="container-cards">
                <Card temaEscuro = { props.temaEscuro } 
                data = "JUNHO 2012 - 2016"
                titulo = "Web Designer"
                empresa = "Pied Piper StartUp."
                paragrafo = "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card temaEscuro = { props.temaEscuro } 
                data = "AGOSTO 2016 - 2019"
                titulo = "Product Designer"
                empresa = "E Corp."
                paragrafo = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                
                />
                <Card temaEscuro = { props.temaEscuro } 
                data = "FEVEREIRO 2019 - 2021"
                titulo = "Digital Consulting"
                empresa = "Arasaka Inc."
                paragrafo = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </div>
    </section>
)

export default SecaoExperiencias;