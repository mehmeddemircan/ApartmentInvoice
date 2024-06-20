import React from "react";
import { Button, Result } from "antd";
import JoinButton from "../button/JoinButton";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DONATE_RESET } from "../../redux/constants/PaymentConstants";
const DonateResult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handlePayDonateReset = () => {
    dispatch({ type: DONATE_RESET });
  };

  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <JoinButton
          buttonName="Anasayfaya dön"
          onClick={() => navigate("/")}
          className="text-white bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        />,
        <JoinButton
          buttonName="Tekrar bağış yap"
          onClick={handlePayDonateReset}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        />,
      ]}
    />
  );
};

export default DonateResult;
