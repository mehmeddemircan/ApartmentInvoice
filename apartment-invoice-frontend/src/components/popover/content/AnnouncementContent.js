import React, { Fragment } from "react";
import { Menu, Badge, List } from "antd";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../spinner/LoadingSpinner";
import moment from "moment";
import "moment/locale/tr"; // Türkçe dil desteği için
import TextIconEmptyResult from "../../results/TextIconEmptyResult";

moment.locale("tr"); // Türkçe dilini kullan
const AnnouncementContent = () => {
  const getAllAnnouncement = useSelector(
    (state) => state.announcement.getAllAnnouncement
  );

  return (
    <Fragment>
      <List
        style={{ width: 540, height: 540, overflowY: "auto", borderRadius: 17 }}
        YitemLayout="horizontal"
      >
        {getAllAnnouncement && getAllAnnouncement.success ? getAllAnnouncement.announcements.data.length === 0 ? <TextIconEmptyResult /> :  (
          getAllAnnouncement.announcements.data.map((item, idx) => (
            <List.Item
              className="w-full p-3"
              actions={[
                <div className="text-right">
                  {moment(item.datePosted).format("Do MMMM")}
                </div>,
              ]}
            >
              <List.Item.Meta
                title={<div className="w-full">{item.title}</div>}
                description={<div clas>{item.content}</div>}
              />
            </List.Item>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </List>
    </Fragment>
  );
};

export default AnnouncementContent;
