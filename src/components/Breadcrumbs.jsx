import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import img_BreadcrumbSquiggle from '../assets/img/showcase/showcase-squiggle.svg'

const Breadcrumbs = ({url, page}) => {
    return (
        <section className="breadcrumbs">

            <div className="design-lines-breadcrumbs">
                <img src={img_BreadcrumbSquiggle} alt="wavy lines" />
            </div>

            <div className="container">

                <nav style={{bsBreadcrumbDivider: ''}} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item inactive"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><NavLink to={url}>{page}</NavLink></li>
                    </ol>
                </nav>

                <h1 className="services-main-title">{page}</h1>
            </div>

        </section>
    )
}

export default Breadcrumbs