import React from "react";
import { useSelector } from "react-redux";
import ActivityCommentItem from "../../listıtem/ActivityCommentItem";
import EmptyResult from "../../results/EmptyResult";
import LoadingSpinner from "../../spinner/LoadingSpinner";
const ActivityCommentTabSegment = () => {
  const getActivityCommentsByUser = useSelector(
    (state) => state.activityComment.getActivityCommentsByUser
  );

  return (
    <>
       {getActivityCommentsByUser && getActivityCommentsByUser.success ?    getActivityCommentsByUser.userActivityComments.data.length === 0 ? (
          <EmptyResult />
        ) : 
           ( getActivityCommentsByUser.userActivityComments.data.map((item, idx) => (
              <ActivityCommentItem idx={idx} item={item} />
            ))
          ) : (
            <LoadingSpinner />
          )}
    </>
  );
};

export default ActivityCommentTabSegment;
