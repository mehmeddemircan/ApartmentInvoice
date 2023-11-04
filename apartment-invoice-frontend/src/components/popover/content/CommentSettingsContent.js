import React, { Fragment, useState } from "react";
import CommentModal from "../../modal/CommentModal";



const CommentSettingsContent = ({comment,handleDeleteProjectComment}) => {

    const [showCommentModal, setShowCommentModal] = useState(false)

    const handleShowEditCommentModal = () => {
        setShowCommentModal(true)
    }
    const handleCloseCommentModal = () => {
        setShowCommentModal(false)
    }

  return (
    <Fragment>
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconHorizontalButton"
      >
        <li onClick={handleShowEditCommentModal}>
          <a
           
            class="block my-1  py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <i class="fa-solid fa-pen-to-square me-2"></i> <a>Düzenle</a>
          </a>
        </li>
        <CommentModal
            comment={comment} 
            showCommentModal={showCommentModal}
            handleCloseCommentModal={handleCloseCommentModal}
        />
        <li onClick={() => handleDeleteProjectComment(comment._id)}>
          <a
         
            class="block my-1 py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
