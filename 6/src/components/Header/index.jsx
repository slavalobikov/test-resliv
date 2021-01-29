import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
                <NavLink className={s.link} activeClassName={s.active} exact to={'/'}> Главная</NavLink>
                <NavLink className={s.link} activeClassName={s.active} to={'/employees'}> Сотрудники</NavLink>

        </header>
    );
};

export default Header;