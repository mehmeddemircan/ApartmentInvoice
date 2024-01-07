import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AnnouncementForm from "../components/Forms/AnnouncementForm";
import EmptyResult from "../components/Results/EmptyResult";
import { Avatar, List } from "antd";
import { message } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAnnouncement,
  AllAnnouncements,
  AllAnnouncementsWithPage,
} from "../redux/actions/AnnouncementActions";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import AnnouncementItem from "../components/ListItem/AnnouncementItem";
import {
  ADD_ANNOUNCEMENT_RESET,
  DELETE_ANNOUNCEMENT_RESET,
  UPDATE_ANNOUNCEMENT_RESET,
} from "../redux/constants/AnnouncementConstants";
import CustomPagination from "../components/Pagination/CustomPagination";
import AnnouncementDrawer from "../components/Drawer/AnnouncementDrawer";
const AnnouncementPage = () => {
  const auth = useSelector((state) => state.auth);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const getAllAnnouncement = useSelector(
    (state) => state.announcement.getAllAnnouncement
  );
  const getAllAnnouncementWithPage = useSelector(
    (state) => state.announcement.getAllAnnouncementWithPage
  );
  const addAnnouncement = useSelector(
    (state) => state.announcement.addAnnouncement
  );
  const deleteUpdateAnnouncement = useSelector(
    (state) => state.announcement.deleteUpdateAnnouncement
  );
  const [userId, setUserId] = useState(auth.user.id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const handleDateChange = (date, dateString) => {
    setDatePosted(dateString);
  };
  const dispatch = useDispatch();

  const handleAddAnnouncement = () => {
    dispatch(AddAnnouncement({ userId, title, content, datePosted }));
  };
  useEffect(() => {
    dispatch(AllAnnouncements());
  }, [dispatch, addAnnouncement.isAdded, deleteUpdateAnnouncement.isDeleted]);
  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth]);
  useEffect(() => {
    dispatch(AllAnnouncementsWithPage(pageNumber, pageSize));
    if (addAnnouncement.isAdded) {
      message.success(addAnnouncement.message);
      dispatch({ type: ADD_ANNOUNCEMENT_RESET });
    }
    if (deleteUpdateAnnouncement.isDeleted) {
      message.success(deleteUpdateAnnouncement.message);
      dispatch({ type: DELETE_ANNOUNCEMENT_RESET });
    }
    if (deleteUpdateAnnouncement.isUpdated) {
      message.success(deleteUpdateAnnouncement.message);
      dispatch({ type: UPDATE_ANNOUNCEMENT_RESET });
    }
  }, [
    dispatch,
    addAnnouncement.isAdded,
    deleteUpdateAnnouncement.isDeleted,
    deleteUpdateAnnouncement.isUpdated,
    pageNumber,
    pageSize,
  ]);

  const [isOpenAnnouncementDrawer, setIsOpenAnnouncementDrawer] =
    useState(false);

  const handleOpenAnnouncementDrawer = () => {
    setIsOpenAnnouncementDrawer(true);
  };
  const handleCloseAnnouncementDrawer = () => {
    setIsOpenAnnouncementDrawer(false);
  };

  return (
    //Design yapılacak filter eklenecek ve title olacak , drawer olacak ,pagination eklenecek
    <MainLayout>
      <AnnouncementForm
        userId={userId}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        datePosted={datePosted}
        setDatePosted={setDatePosted}
        handleDateChange={handleDateChange}
        handleAddAnnouncement={handleAddAnnouncement}
      />
      {getAllAnnouncementWithPage && getAllAnnouncementWithPage.success ? (
        getAllAnnouncementWithPage.announcements.data.length === 0 ? (
          <EmptyResult />
        ) : (
          <>
            <div className="my-10 flex flex-row justify-between items-center">
              <h1 class="text-5xl font-extrabold dark:text-white">
                Flowbite
                <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">
                  This is secondary text
                </small>
              </h1>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleOpenAnnouncementDrawer}
              >
                Filter <i class="fa-solid fa-filter"></i>
              </button>

              <AnnouncementDrawer
                isOpenAnnouncementDrawer={isOpenAnnouncementDrawer}
                handleCloseAnnouncementDrawer={handleCloseAnnouncementDrawer}
              />
            </div>
            <hr />
            <br />
            <List itemLayout="horizontal" className="my-5">
              {getAllAnnouncementWithPage.announcements.data.map((item) => (
                <AnnouncementItem key={item.id} item={item} />
              ))}
            </List>

            <CustomPagination
              onChange={(page) => setPageNumber(page)}
              current={pageNumber}
              defaultCurrent={1}
              pageSize={pageSize}
              total={
                getAllAnnouncement.success &&
                getAllAnnouncement.announcements.data.length
              }
            />
          </>
        )
      ) : (
        <LoadingSpinner />
      )}
    </MainLayout>
  );
};

export default AnnouncementPage;
