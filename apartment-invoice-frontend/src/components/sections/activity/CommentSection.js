import React, { Fragment, useEffect, useState } from "react";

import CommentButton from "../../button/CommentButton";
import CommentModal from "../../modal/CommentModal";
import CommentItem from "../../listıtem/CommentItem";
import CustomPagination from "../../pagination/CustomPagination";

const CommentSections = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleShowCommentModal = () => {
    setShowCommentModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };

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

      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CustomPagination />
    </Fragment>
  );
};

export default CommentSections;
