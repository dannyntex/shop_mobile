import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../static/logo.png'
import './Header.css'
const Header = () => {
    return (
        <nav className="containerHeader">
            <Link to="/">
                {' '}
                <img src={logo} alt="Shop MObile" />
            </Link>
        </nav>
    )
}
export default Header
