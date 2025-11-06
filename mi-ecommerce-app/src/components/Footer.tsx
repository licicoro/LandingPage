import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <h4>Contacto</h4>
                <p>Email: contacto@mi-ecommerce.com</p>
                <p>Teléfono: +123 456 7890</p>
            </div>
            <div>
                <h4>Enlaces</h4>
                <ul>
                    <li><a href="/politicas">Políticas de Privacidad</a></li>
                    <li><a href="/terminos">Términos y Condiciones</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;