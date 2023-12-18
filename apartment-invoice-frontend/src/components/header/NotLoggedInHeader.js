

import React from 'react'

import { useTranslation } from "react-i18next";
export const PhoneNotLoggedInHeader = ({handleShowLoginModal}) => {
  const {t} = useTranslation()
    return (
       
        <a
        href="#"
        className="text-sm font-semibold leading-6 text-dark  hover:text-green-400 me-4"
        onClick={handleShowLoginModal}
      >
       {t('header.login')}
      </a>
    )
  }
  

export const NotLoggedInHeader = ({handleShowLoginModal}) => {
  const {t} = useTranslation()
  return (
    
    <a
    href="#"
    className="text-sm font-semibold leading-6 text-dark  hover:text-green-400 me-4"
    onClick={handleShowLoginModal}
  >
{t('header.login')}
  </a>

  )
}
