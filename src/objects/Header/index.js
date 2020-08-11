import React from 'react';
import LogoPataReal from '../../components/Logo'
import Menu from '../../components/Menu';
import './styles.css';

const Header = () => (
    <header className="header">
    <LogoPataReal /> 
    <Menu />
   </header>
)

export default Header