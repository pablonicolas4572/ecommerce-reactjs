import React from 'react';

//import mi archivo css
import './styles/NavBar.css';
import Itemlistcontainer from './Itemlistcontainer';
import CartWidget from './CartWidget';

const NavBar = () => {
    //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
    return (
        <header className="header">
            {/* logo de la marca */}

            <CartWidget />


            {/* links de navegación */}
            <nav>
                <Itemlistcontainer></Itemlistcontainer>
            </nav>

        </header>
    );
};

export default NavBar;
