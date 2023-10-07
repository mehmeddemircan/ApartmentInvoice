import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomeSection from "../components/sections/home/HomeSection";
import MetaTitle from "../meta/MetaTitle";
import SuccessResult from "../components/results/SuccessResult";
import FormButton from "../components/button/FormButton";
import { useNavigate } from "react-router-dom";
import EmptyResult from "../components/results/EmptyResult";
import ErrorResult from "../components/results/ErrorResult";
import AddedEmptyResult from "../components/results/AddedEmptyResult";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <MetaTitle title="Anasayfa" name="anasayfa" content="anasayfa" />
      <h2>home page</h2>
    
      <HomeSection />
    </MainLayout>
  );
};

export default HomePage;
