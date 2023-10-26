import React from 'react'

const SectionTitle = ({orangeText, title}) => {
  return (
    <>
      <p className="orange-txt">{orangeText}</p>
      <h2 className="services-title">{title}</h2>
    </>
  )
}

export default SectionTitle