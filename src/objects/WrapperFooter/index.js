import React from "react";
import './styles.css';

import Institutional from "../../components/Institutional";
import LogoPataReal from "../../components/Logo";

const WrapperFooter = () => (
    <footer className="footer">
       <Institutional title="Quem somos" link="quemsomos.js"/>
       <Institutional title="Endereço" link="endereco.js"/>
       <Institutional title="Como surgimos" link="comosurgimos.js"/> 
       <LogoPataReal />      
    </footer>
)

export default WrapperFooter