import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import CommentForm from "../forms/comment/CommentForm";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../listıtem/UserItem";
import LoadingSpinner from "../spinner/LoadingSpinner";
import EmptyResult from "../results/EmptyResult";
const ActivityParticipantsModal = ({
  showActivityParticipantsModal,
  handleCloseActivityParticipantsModal,
}) => {
  const getUsersOfActivity = useSelector(
    (state) => state.activity.getUsersOfActivity
  );

  return (
    <Fragment>
      <Modal
        centered
        open={showActivityParticipantsModal}
        onOk={handleCloseActivityParticipantsModal}
        onCancel={handleCloseActivityParticipantsModal}
        footer={null}
      >
        <div className="w-full mx-auto px-4">
          <div className="items-start justify-between sm:flex">
            <div>
              <h4 className="text-gray-800 text-xl font-semibold">
                Tüm Kullanıcılar
              </h4>
              <p className="mt-2 text-gray-600 text-base sm:text-sm">
                Give your team members access to manage the system.
              </p>
            </div>
          </div>

          {getUsersOfActivity && getUsersOfActivity.success ?    getUsersOfActivity.userActivities.data.length === 0 ? (
          <EmptyResult />
        ) : 
           ( getUsersOfActivity.userActivities.data.map((item, idx) => (
              <UserItem idx={idx} item={item} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </Modal>
    </Fragment>
  );
};

export default ActivityParticipantsModal;
