import React from 'react'
import {Link} from "react-router-dom";
import './menu.css'

const Menu = () => {
    return (
        <React.Fragment>
            <ul className='menu'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </React.Fragment>

    )
}
export default Menu