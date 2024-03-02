import { Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import CommentForm from "../forms/comment/CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SendActivityComment } from "../../redux/actions/ActivityCommentAction";
const CommentModal = ({ showCommentModal, handleCloseCommentModal, item }) => {
  let { activityId } = useParams();
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const sendActivityComment = useSelector(
    (state) => state.activityComment.sendActivityComment
  );
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth, auth.user.id]);

  const handleAddActivityComment = () => {
    dispatch(SendActivityComment({ userId, activityId, content }));
  };
  useEffect(() => {
    if (sendActivityComment.isAdded) {
      handleCloseCommentModal();
    }
  }, [sendActivityComment.isAdded]);
  return (
    <Fragment>
      <Modal
        centered
        open={showCommentModal}
        onOk={handleCloseCommentModal}
        onCancel={handleCloseCommentModal}
        footer={[
          <button
            className="btn btn-dark rounded-pill"
            onClick={handleAddActivityComment}
          >
            Gönder{" "}
          </button>,
        ]}
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Yorum Yap
          </h2>
        </div>
        <CommentForm content={content} setContent={setContent} />
      </Modal>
    </Fragment>
  );
};

export default CommentModal;
