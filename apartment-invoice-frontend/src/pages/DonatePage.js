import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PaymentSection from '../components/sections/payment/PaymentSection'

const DonatePage = () => {
  return (
    <MainLayout>
       <PaymentSection buttonTitle="Bağış yap" title="Apartman için bağış yapma" content="apartmanımız için bağış yaparak katkıda bulunabilirsiziniz " isDonate={true}  />
    </MainLayout>
  )
}

export default DonatePage