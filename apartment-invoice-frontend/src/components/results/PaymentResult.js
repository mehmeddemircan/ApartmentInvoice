import React from 'react'
import { Button, Result } from 'antd';
import JoinButton from '../button/JoinButton';
import { Navigate, useNavigate } from "react-router-dom";
const PaymentResult = () => {

    const navigate = useNavigate()
  return (
    <Result
    status="success"
    title="Başarılı şekilde ödeme alındı "
    subTitle="Ödeme no :  2017182818828182881 ödeme yaptığınız için teşekkür ederiz iyi günler dileriz "
    extra={[
      <JoinButton buttonName="Anasayfaya dön" onClick={() => navigate('/') } className="text-white bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" />

     

    ]}
  />
  )
}

export default PaymentResult

