import React, { Fragment, useEffect, useState } from "react";

import CommentButton from "../../button/CommentButton";
import CommentModal from "../../modal/CommentModal";
import CommentItem from "../../listıtem/CommentItem";
import CustomPagination from "../../pagination/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import EmptyResult from "../../results/EmptyResult";
import LoadingSpinner from "../../spinner/LoadingSpinner";
const CommentSections = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleShowCommentModal = () => {
    setShowCommentModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };
    
  const getActivityComments = useSelector((state) => state.activityComment.getActivityComments)
  return (
    <Fragment>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-100 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Yorumlar
        </span>
      </div>

      <div className="d-flex flex-row justify-end my-3">
        <CommentButton handleShowCommentModal={handleShowCommentModal} />
        <CommentModal
          showCommentModal={showCommentModal}
          handleCloseCommentModal={handleCloseCommentModal}
        />
      </div>
      {getActivityComments && getActivityComments.success ? (
        getActivityComments.activityComments.data.length === 0 ? (
          <EmptyResult />
        ) : (
          getActivityComments.activityComments.data.map((item) => (
            <CommentItem item={item} />
          ))
        )
      ) : (
        <LoadingSpinner />
      )}
    
    </Fragment>
  );
};

export default CommentSections;
