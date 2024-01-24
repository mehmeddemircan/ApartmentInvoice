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
import FaqSegment from "../components/faq/FaqSegment";
import HomeCtaSection1 from "../components/CTASections/HomeCtaSection1";
import HomeCtaSection2 from "../components/CTASections/HomeCtaSection2";
import HomeCtaSection3 from "../components/CTASections/HomeCtaSection3";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <MetaTitle title="Anasayfa" name="anasayfa" content="anasayfa" />
   

      <HomeSection />
      <HomeCtaSection1 />
      <HomeCtaSection2 />
      <video className="h-full w-full rounded-lg" controls>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <FaqSegment />
      <HomeCtaSection3 />
    </MainLayout>
  );
};

export default HomePage;
