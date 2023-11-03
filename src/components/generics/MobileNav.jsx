import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const MobileNav = () => {

    const [menu, setMenu] = useState(false)
    console.log(menu)

    const openNav = () => {
        setMenu(!menu)
    }

    return (
        <div className='mobile-nav-wrapper'>
            <div className={(menu ? 'overlay' : 'overlay hide-btn' )}>

                <div className="overlay-content">
                    <NavLink tabIndex="-1" to="/">Home</NavLink>
                    <NavLink tabIndex="-1" to="/news">News</NavLink>
                    <NavLink tabIndex="-1" to="/services">Articles</NavLink>
                    <NavLink tabIndex="-1" to="/contact" >Contact</NavLink>
                </div>

            </div>

            <button className="btn-mobile-nav" onClick={(openNav)}><i className="fa-solid fa-bars"></i></button>
        </div>
    )
}

export default MobileNav