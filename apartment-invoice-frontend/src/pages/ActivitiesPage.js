import React from "react";
import MainLayout from "../layouts/MainLayout";
import ActivityCard from "../components/card/ActivityCard";
import CustomPagination from "../components/pagination/CustomPagination";

const ActivitiesPage = () => {
  return (
    <MainLayout>
      <h4 className="text-xl mb-4 text-center">Etkinlikler</h4>
      <hr />
      <div className="d-flex flex-wrap gap-4 justify-center align-center">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
     
    </MainLayout>
  );
};

export default ActivitiesPage;
