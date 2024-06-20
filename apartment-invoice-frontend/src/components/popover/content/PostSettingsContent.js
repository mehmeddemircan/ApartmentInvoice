import React, { Fragment, useState } from "react";
import CommentModal from "../../modal/CommentModal";



const PostSettingsContent = ({item,handleDeletePost,showUpdatePost,handleShowUpdatePost}) => {

   

  return (
    <Fragment>
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconHorizontalButton"
      >
        <li  onClick={handleShowUpdatePost}>
          <a
           
            class="block my-1  py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <i class="fa-solid fa-pen-to-square me-2"></i> <a> {showUpdatePost ? "İptal" : "Düzenle"} </a>
          </a>
        </li>
       
        <li onClick={() => handleDeletePost(item.id)}>
          <a
         
            class="block my-1 py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <i class="fa-solid fa-trash me-2"></i>
            <a>Sil</a>
          </a>
        </li>
       
      </ul>
    </Fragment>
  );
};

export default PostSettingsContent;
