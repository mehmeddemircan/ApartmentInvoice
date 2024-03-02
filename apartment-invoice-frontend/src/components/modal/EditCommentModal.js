import { Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import CommentForm from "../forms/comment/CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UpdateActivityComment } from "../../redux/actions/ActivityCommentAction";

const EditCommentModal = ({
  item,
  showEditCommentModal,
  handleCloseEditCommentModal,
}) => {
  const [content, setContent] = useState(item.content);
  const [userId, setUserId] = useState("");
  const [id, setId] = useState(item.id);
  const [activityId, setActivityId] = useState(item.activityId);

  useEffect(() => {
    setActivityId(activityId);
  }, []);

  const auth = useSelector((state) => state.auth);
  const activityCommentUpdateDelete = useSelector(
    (state) => state.activityComment.activityCommentUpdateDelete
  );
  const dispatch = useDispatch();
  const handleUpdateActivityComment = () => {
    dispatch(UpdateActivityComment({ id, userId, activityId, content }));
  };

  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth, auth.user.id]);
  useEffect(() => {
    if (activityCommentUpdateDelete.isUpdated) {
      handleCloseEditCommentModal();
    }
  }, [activityCommentUpdateDelete.isUpdated]);
  return (
    <Fragment>
      <Modal
        centered
        open={showEditCommentModal}
        onOk={handleCloseEditCommentModal}
        onCancel={handleCloseEditCommentModal}
        footer={[
          <button
            className="btn btn-dark rounded-pill"
            onClick={handleUpdateActivityComment}
          >
            Düzenle{" "}
          </button>,
        ]}
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Yorum Düzenle
          </h2>
        </div>
        <CommentForm content={content} setContent={setContent} />
      </Modal>
    </Fragment>
  );
};

export default EditCommentModal;
