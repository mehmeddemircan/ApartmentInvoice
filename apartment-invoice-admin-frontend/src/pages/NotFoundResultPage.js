import React from 'react'
import MainLayout from '../layouts/MainLayout'
import NotFoundResult from '../components/Results/NotFoundResult'

const NotFoundResultPage = () => {
  return (
    <MainLayout>
        <NotFoundResult title={"Her hangi bir kayıt bulunamadı "} description={"Aradığınız kayıt silinmiş gibi görünüyor lütfen ana sayfa dönün veya destek ekiple iletişime geçin "}/>
    </MainLayout>
  )
}

export default NotFoundResultPage