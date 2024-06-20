import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
  Card,
} from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
const AnnouncementForm = ({
  title,
  setTitle,
  userId,
  content,
  setContent,
  datePosted,
  setDatePosted,
  handleDateChange,
  handleAddAnnouncement,
  isShowEditAnnouncementModal,
}) => {
  const [form] = Form.useForm();
  const addAnnouncement = useSelector(
    (state) => state.announcement.addAnnouncement
  );
  const handleReset = () => {
    form.resetFields();
  };
  useEffect(() => {
    if (addAnnouncement.isAdded) {
      handleReset();
    }
  }, [addAnnouncement.isAdded]);
  const defaultDate = moment(datePosted, "YYYY-MM-DD");
  return (
    <div className="flex flex-row justify-center">
      <Card
        title={isShowEditAnnouncementModal ? "" : "Duyuru Ekle"}
        bordered={true}
        className="w-full"
      >
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          layout="horizontal"
          style={{
            maxWidth: "100%",
          }}
        >
          <Form.Item name="title" label="Title">
            <Input
              defaultValue={title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea
              defaultValue={content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              showCount
              maxLength={200}
              style={{ height: "150px" }}
            />
          </Form.Item>
          <Form.Item name="datePosted" label="DatePicker">
            <DatePicker
              defaultValue={datePosted != "" ? defaultDate : moment()}
              format="YYYY-MM-DD"
              onChange={handleDateChange}
            />
          </Form.Item>

          {!isShowEditAnnouncementModal && (
            <div className="flex justify-end ">
              <Button
                className="text-center  bg-black text-white rounded-full w-24"
                onClick={handleAddAnnouncement}
              >
                Yayınla
              </Button>
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default AnnouncementForm;
