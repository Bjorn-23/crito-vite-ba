import React from 'react'

const FormError = (props) => {
  
  return (
    <div className="error">
        {props.children}
    </div>
  )
}

export default FormError