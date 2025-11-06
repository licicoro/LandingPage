import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo para los estilos del Header

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Mi E-commerce</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/cart">Carrito</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca de</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;