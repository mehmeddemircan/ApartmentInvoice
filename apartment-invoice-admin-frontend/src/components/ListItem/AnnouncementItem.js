import React, { Fragment, useState } from "react";
import { List,Popconfirm } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  DeleteAnnouncement,
  UpdateAnnouncement,
} from "../../redux/actions/AnnouncementActions";
import EditAnnoucementModal from "../Modal/Annoucement/EditAnnoucementModal";
import { useEffect } from "react";

const AnnouncementItem = ({ item }) => {
  const deleteUpdateAnnouncement = useSelector(
    (state) => state.announcement.deleteUpdateAnnouncement
  );
  const dispatch = useDispatch();
  const handleDeleteAnnouncement = (value) => {
    dispatch(DeleteAnnouncement(value));
  };

  const [isShowEditAnnouncementModal, setIsShowEditAnnouncementModal] =
    useState(false);

  const handleShowEditAnnouncementModal = () => {
    setIsShowEditAnnouncementModal(true);
  };

  const handleCloseEditAnnouncementModal = () => {
    setIsShowEditAnnouncementModal(false);
  };

  useEffect(() => {
    if (deleteUpdateAnnouncement.isUpdated) {
      handleCloseEditAnnouncementModal();
    }
  }, [deleteUpdateAnnouncement.isUpdated]);


  const confirm = (itemId) => {
    dispatch(DeleteAnnouncement(itemId));
  };
  return (
    <Fragment>
      <List.Item
        actions={[
          <a key="list-loadmore-edit" className="me-3" onClick={handleShowEditAnnouncementModal}>
            Düzenle
          </a>,

          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(item.id)}
            okText="Yes"
            cancelText="No"
          >
            <a
              href="javascript:void(0)"
              style={{ color: 'red' }}
            >
              <i class="fa-solid fa-trash " ></i>
            </a>
          </Popconfirm>,
        ]}
      >
        <List.Item.Meta
          title={
            <a href="https://ant.design">
              {item.title}
              {item.id}
            </a>
          }
          description={item.content}
        />
      </List.Item>
      <EditAnnoucementModal
        item={item}
        isShowEditAnnouncementModal={isShowEditAnnouncementModal}
        handleCloseEditAnnouncementModal={handleCloseEditAnnouncementModal}
      />
    </Fragment>
  );
};

export default AnnouncementItem;
