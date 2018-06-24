import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

//Stateless function component
const Header = () => {
    return (
        <header className="main-header">
            <div className="header-wrap">

                <div className="header__title">
                    <Link to="/"><img src={logo} className="header__title--logo" alt="logo" /></Link>
                    <p className="header__title--name">Welcome to React</p>
                </div>

                <nav className="header__menu">
                    <a className="header__menu--item" href="">Contact</a>
                    <a className="header__menu--item" href="">About</a>
                </nav>


            </div>
        </header>
    )
}


export default Header;