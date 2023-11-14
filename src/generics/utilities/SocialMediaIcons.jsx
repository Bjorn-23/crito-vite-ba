import React from 'react'
import { Link } from 'react-router-dom'

const SocialMediaIcons = ({linkClass, url, iconClass}) => {

  return (
    <Link className={linkClass} to={url} target="_blank" rel="noreferrer"><i className={iconClass}></i></Link >
  )
}

export default SocialMediaIcons 
