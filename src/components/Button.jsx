import React from 'react'

const Button = ({color, changeQuote}) => {
  return (
    <div className="btn-flex">
        <button className={'btn ' + color} onClick={changeQuote}></button>
    </div>
  )
}

export default Button