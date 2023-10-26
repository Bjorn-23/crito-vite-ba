import React from 'react'

import img_LinesSubscribe from '../assets/img/subscribe/design.svg'

const Subscribe = () => {
  return (
<section className="subscribe">
        <div className="container">
            <div className="flex-wrapper">
                <div className="left">
                    <h2 className="subscribe-title">Get Updates By Signing Up</h2>
                </div>
                <div className="right">
                    
                    <form id="sub-form" method="get" action="form-results.html">
                        <input type="email" className="email" name="email" id="sub-email" autoComplete="on" placeholder="username@domain.com"
                            required></input>
                        <button type="submit" className="submit btn-yellow">Subscribe<i
                                className="fa-regular fa-arrow-up-right"></i></button>
                    </form>
                </div>
            </div>
        </div>

        <img className="design-lines-right" src={img_LinesSubscribe}
            alt="squiggly lines that look like they're drawn by a pencil" />

    </section>

  )
}

export default Subscribe