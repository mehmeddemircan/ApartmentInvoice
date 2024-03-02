import React, { Fragment, useEffect , useState} from "react";
import MainLayout from "../layouts/MainLayout";
import GeneralGallery from "../components/gallery/GeneralGallery";
import ActivityDescriptionSection from "../components/descriptions/ActivityDescriptionSection";
import CommentSections from "../components/sections/activity/CommentSection";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { CheckUserActivity, GetSingleActivity, GetUserActivities, JoinActivity, LeaveActivity, joinActivity } from "../redux/actions/AcitivityAction";
import { GetActivityComments } from "../redux/actions/ActivityCommentAction";
import { message } from "antd";
import {
  ADD_ACTIVITY_COMMENT_RESET,
  DELETE_ACTIVITY_COMMENT_RESET,
  UPDATE_ACTIVITY_COMMENT_RESET,
} from "../redux/constants/ActivityCommentConstants";
import { JOIN_ACTIVITY_RESET, LEAVE_ACTIVITY_RESET } from "../redux/constants/ActivityConstants";
const ActivityDetailsPage = () => {
  let { activityId } = useParams();
  const getSingleActivity = useSelector(
    (state) => state.activity.getSingleActivity
  );
  const sendActivityComment = useSelector(
    (state) => state.activityComment.sendActivityComment
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleActivity(activityId));
  }, [dispatch, activityId]);
  const activityCommentUpdateDelete = useSelector(
    (state) => state.activityComment.activityCommentUpdateDelete
  );
  useEffect(() => {
    dispatch(GetActivityComments(activityId));
    if (sendActivityComment.isAdded) {
      message.success(sendActivityComment.message);
      dispatch({ type: ADD_ACTIVITY_COMMENT_RESET });
    }
    if (activityCommentUpdateDelete.isDeleted) {
      message.success(activityCommentUpdateDelete.message);
      dispatch({ type: DELETE_ACTIVITY_COMMENT_RESET });
    }
    if (activityCommentUpdateDelete.isUpdated) {
      message.success(activityCommentUpdateDelete.message);
      dispatch({ type: UPDATE_ACTIVITY_COMMENT_RESET });
    }
  }, [
    dispatch,
    activityId,
    sendActivityComment.isAdded,
    activityCommentUpdateDelete.isDeleted,
    activityCommentUpdateDelete.isUpdated,
  ]);
  const [userId, setUserId] = useState("")
  const auth = useSelector((state) => state.auth)
  useEffect(() => {
    setUserId(auth.user.id)
  }, [auth,auth.user.id])



  const handleJoinActivity = () => {
    dispatch(JoinActivity({userId,activityId}))
  }


  const handleLeaveFromActivity = (userActivityId) => {
    dispatch(LeaveActivity(userActivityId))
  }

  const joinActivity = useSelector((state) => state.activity.joinActivity)
  // useEffect(() => {
   
  // }, [joinActivity.isJoined])
  const leaveActivity = useSelector((state) => state.activity.leaveActivity)


  useEffect(() => {
    dispatch(GetUserActivities(activityId))
    dispatch(CheckUserActivity(activityId,userId))
    if (joinActivity.isJoined) {
      message.success(" Başarıyla etkinliğe katıldınız ")
      dispatch({type : JOIN_ACTIVITY_RESET})
    }
    if (leaveActivity.isLeft) {
      message.success(" Etkinlikten ayrıldınız ")
      dispatch({type: LEAVE_ACTIVITY_RESET})
    }
  }, [dispatch,activityId,userId,joinActivity.isJoined,leaveActivity.isLeft])

  return (
    <MainLayout>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <Fragment>
          <div className="col-md-7">
            <GeneralGallery getSingleActivity={getSingleActivity} />
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <ActivityDescriptionSection handleLeaveFromActivity={handleLeaveFromActivity} handleJoinActivity={handleJoinActivity} getSingleActivity={getSingleActivity} />
          </div>
        </Fragment>
      </div>

      <CommentSections />
    </MainLayout>
  );
};

export default ActivityDetailsPage;
