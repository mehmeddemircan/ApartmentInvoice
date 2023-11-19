

import React from 'react'


export const PhoneNotLoggedInHeader = ({handleShowLoginModal}) => {
    return (
       
        <a
        href="#"
        className="text-sm font-semibold leading-6 text-dark  hover:text-green-400 me-4"
        onClick={handleShowLoginModal}
      >
        Log in 
      </a>
    )
  }
  

export const NotLoggedInHeader = ({handleShowLoginModal}) => {
  return (
    
    <a
    href="#"
    className="text-sm font-semibold leading-6 text-dark  hover:text-green-400 me-4"
    onClick={handleShowLoginModal}
  >
    Log in 
  </a>

  )
}
