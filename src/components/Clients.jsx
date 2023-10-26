import React from 'react'
import img_paperz from '../assets/img/clients/paperz.svg'
import img_dorfus from '../assets/img/clients/dorfus.svg'
import img_martino from '../assets/img/clients/martino.svg'
import img_square from '../assets/img/clients/square.svg'
import img_gobona from '../assets/img/clients/gobona.svg'

const Clients = () => {
  return (
    <section className="clients">
        <div id="client-container" className="container grid-container">
            <img className="client-img cl1" src={img_paperz} alt="paperz Logotype" />
            <img className="client-img cl2" src={img_dorfus} alt="dorfus Logotype" />
            <img className="client-img cl3" src={img_martino} alt="martino Logotype" />
            <img className="client-img cl4" src={img_square} alt="square Logotype" />
            <img className="client-img cl5" src={img_gobona} alt="gobona Logotype" />
        </div>
    </section>
  )
}

export default Clients