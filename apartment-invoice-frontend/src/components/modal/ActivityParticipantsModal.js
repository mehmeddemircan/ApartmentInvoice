import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import CommentForm from '../forms/comment/CommentForm'

const ActivityParticipantsModal = ({showActivityParticipantsModal,handleCloseActivityParticipantsModal}) => {

  return (
    <Fragment>
        <Modal
      centered
      open={showActivityParticipantsModal}
      onOk={handleCloseActivityParticipantsModal}
      onCancel={handleCloseActivityParticipantsModal}
      footer={[
        <button
          className="btn btn-dark rounded-pill"
          onClick={handleCloseActivityParticipantsModal}
        >
          Gönder
        </button>,
      ]}
    >
    
    </Modal>
    </Fragment>
  )
}

export default ActivityParticipantsModal