import React from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
    return (
        <nav className={ classes.nav }>
            <div className={ `${ classes.item } ${ classes.active }` }>
                <NavLink to='/profile' activeClassName={ classes.active }>Profile</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/dialog' activeClassName={ classes.active }>Messages</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/news' activeClassName={ classes.active }>News</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/music' activeClassName={ classes.active }>Music</NavLink>
            </div>
            <div className={ classes.item }>
                <NavLink to='/setting' activeClassName={ classes.active }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar