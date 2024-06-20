import React, { Fragment, useState } from "react";
import CommentModal from "../../modal/CommentModal";
import { useDispatch, useSelector } from "react-redux";
import { DeleteActivityComment } from "../../../redux/actions/ActivityCommentAction";
import EditCommentModal from "../../modal/EditCommentModal";

const CommentSettingsContent = ({ item }) => {
  const [showEditCommentModal, setShowEditCommentModal] = useState(false);

  const handleShowEditCommentModal = () => {
    setShowEditCommentModal(true);
  };
  const handleCloseEditCommentModal = () => {
    setShowEditCommentModal(false);
  };
  const activityCommentUpdateDelete = useSelector(
    (state) => state.activityComment.activityCommentUpdateDelete
  );
  const dispatch = useDispatch();
  const handleDeleteActivityCommentItem = (id) => {
    dispatch(DeleteActivityComment(id));
  };

  return (
    <Fragment>
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconHorizontalButton"
      >
        <li onClick={handleShowEditCommentModal}>
          <a class="block my-1  py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <i class="fa-solid fa-pen-to-square me-2"></i> <a>Düzenle</a>
          </a>
        </li>
        <EditCommentModal
          item={item}
          showEditCommentModal={showEditCommentModal}
          handleCloseEditCommentModal={handleCloseEditCommentModal}
        />
        <li>
          <a
            class="block my-1 py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleDeleteActivityCommentItem(item.id)}
          >
            <i class="fa-solid fa-trash me-2"></i>
            <a>Sil</a>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block my-1 py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <i class="fa-solid fa-circle-exclamation me-2"></i>Sikayet Et
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default CommentSettingsContent;
