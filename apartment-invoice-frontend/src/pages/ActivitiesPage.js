import React , {useEffect} from "react";
import MainLayout from "../layouts/MainLayout";
import ActivityCard from "../components/card/ActivityCard";
import CustomPagination from "../components/pagination/CustomPagination";

import {useDispatch, useSelector } from 'react-redux'
import { AllActivity } from "../redux/actions/AcitivityAction";
import EmptyResult from "../components/results/EmptyResult";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
const ActivitiesPage = () => {
  const dispatch = useDispatch()
  const getAllActivity = useSelector((state) => state.activity.getAllActivity)
  
  useEffect(() => {
    dispatch(AllActivity())
  }, [dispatch])

  return (
    <MainLayout>
      <h4 className="text-xl mb-4 text-center">Etkinlikler</h4>
      <hr />
      <div className="d-flex flex-wrap gap-4 justify-center align-center">
      {getAllActivity && getAllActivity.success  ?  getAllActivity.activities.data.length === 0 ? (
            <EmptyResult />
          )  :  getAllActivity.activities.data.map((item) => (
      <ActivityCard item={item} />
     )) : <LoadingSpinner /> } 
      </div>
     
    </MainLayout>
  );
};

export default ActivitiesPage;
