import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import CommentForm from '../forms/comment/CommentForm'

const CommentModal = ({showCommentModal,handleCloseCommentModal}) => {
    const [text, setText] = useState("")
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
          onClick={handleCloseCommentModal}
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
       <CommentForm text={text} setText={setText} /> 
    </Modal>
    </Fragment>
  )
}

export default CommentModal