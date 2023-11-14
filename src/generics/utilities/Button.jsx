import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({type, url, title}) => {

    const getButtonClassName = () => {
        switch(type) {
            case "yellow":
                return 'btn-yellow btn-main'
            case 'black':
                return 'btn-black btn-main'
            case 'transparentFat':
                return 'btn-transparent-fat btn-main'
            case 'team':
                return 'btn-yellow btn-team btn-main'
            case 'submit':
                return 'btn-yellow btn-main btn-submit'
            default:
                return 'btn-transparent btn-main'
        }

    }
  return (
    <Link className={getButtonClassName()} to={url}>{title}<i className="fa-regular fa-arrow-up-right"></i></Link>
  )
}

export default Button