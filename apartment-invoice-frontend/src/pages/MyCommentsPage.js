import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import CommentTabs from "../components/tabs/CommentTabs";
import { useDispatch, useSelector } from "react-redux";
import { GetActivityCommentsByUser } from "../redux/actions/ActivityCommentAction";
import { message } from "antd";
import {
  DELETE_ACTIVITY_COMMENT_RESET,
  UPDATE_ACTIVITY_COMMENT_RESET,
} from "../redux/constants/ActivityCommentConstants";
const MyCommentsPage = () => {
  const auth = useSelector((state) => state.auth);
  const activityCommentUpdateDelete = useSelector(
    (state) => state.activityComment.activityCommentUpdateDelete
  );
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetActivityCommentsByUser(userId));
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
    userId,
    activityCommentUpdateDelete.isDeleted,
    activityCommentUpdateDelete.isUpdated,
  ]);

  return (
    <MainLayout>
      <CommentTabs />
    </MainLayout>
  );
};

export default MyCommentsPage;
