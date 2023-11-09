import React from 'react'
import img_paperz from '@assets/img/clients/paperz.svg'
import img_dorfus from '@assets/img/clients/dorfus.svg'
import img_martino from '@assets/img/clients/martino.svg'
import img_square from '@assets/img/clients/square.svg'
import img_gobona from '@assets/img/clients/gobona.svg'

const ClientsSection = () => {

  const clients = [
    { name: 'paperz', src: `${img_paperz}`, class: 'client-img, cl1', alt: 'paperz logotype' },
    { name: 'dorfus', src: `${img_dorfus}`, class: 'client-img, cl2', alt: 'dorfus logotype' },
    { name: 'martino', src: `${img_martino}`, class: 'client-img, cl3', alt: 'martino logotype' },
    { name: 'square', src: `${img_square}`, class: 'client-img, cl4', alt: 'square logotype' },
    { name: 'gobona', src: `${img_gobona}`, class: 'client-img, cl5', alt: 'gobona logotype' },
  ]

  return (
    <section className="clients">
      <div id="client-container" className="container grid-container">

        {
          clients.map((clients, index) => (
            <img key={clients.name} src={clients.src} className={clients.class} alt={clients.alt} />
          ))
        }

      </div>
    </section>
  )
}

export default ClientsSection