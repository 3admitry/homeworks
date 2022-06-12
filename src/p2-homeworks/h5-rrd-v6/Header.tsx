import React from 'react'
import {NavLink} from 'react-router-dom'
import { PATH } from './Pages'


function Header() {
    return (
        <div>
             {/*   <NavLink className={navData => navData.isActive ? c.active : c.item} to="/profile">Profile</NavLink>*/}
            <ul>
                <li><NavLink to={PATH.PRE_JUNIOR}>Pre-junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR}>junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink></li>
            </ul>
            
           
           

        </div>
)
}

export default Header
