import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.svg';
const Header = () => (
    <div className="header">
        <img src={logoUrl} alt="Dish" />
    </div>
)
export default Header;
