import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//Hidden at sizes larger than 991px
const MobileNavSection = () => {

    const [menu, setMenu] = useState(false)
    const openNav = () => {
        setMenu(!menu)
    }

    return (
        <div className='mobile-nav-wrapper'>
            <div className={(menu ? 'overlay' : 'overlay hide-overlay' )}>

                <div className="overlay-content">
                    <NavLink tabIndex="-1" to="/">Home</NavLink>
                    <NavLink tabIndex="-1" to="/services">Services</NavLink>
                    <NavLink tabIndex="-1" to="/news">News</NavLink>
                    <NavLink className="btm-border" tabIndex="-1" to="/contact" >Contact</NavLink>
                </div>

            </div>

            <button className="btn-mobile-nav" onClick={(openNav)}>
                { menu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </button>
        </div>
    )
}

export default MobileNavSection