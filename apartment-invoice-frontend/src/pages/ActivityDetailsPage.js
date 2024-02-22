import React, { Fragment, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import GeneralGallery from "../components/gallery/GeneralGallery";
import ActivityDescriptionSection from "../components/descriptions/ActivityDescriptionSection";
import CommentSections from "../components/sections/activity/CommentSection";
import { useParams } from "react-router-dom";

import {useDispatch, useSelector } from 'react-redux'
import { GetSingleActivity } from "../redux/actions/AcitivityAction";
const ActivityDetailsPage = () => {
  let { activityId } = useParams();
  const getSingleActivity = useSelector((state) => state.activity.getSingleActivity)
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(GetSingleActivity(activityId))
  }, [dispatch,activityId])
  return (
    <MainLayout>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
    
        <Fragment>
          <div className="col-md-7">
            <GeneralGallery getSingleActivity={getSingleActivity} />
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <ActivityDescriptionSection getSingleActivity={getSingleActivity} />
          </div>
        </Fragment>
      </div>

      <CommentSections />
    </MainLayout>
  );
};

export default ActivityDetailsPage;
