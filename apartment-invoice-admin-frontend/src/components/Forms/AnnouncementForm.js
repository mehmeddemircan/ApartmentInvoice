import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
  Card,
} from "antd";

const AnnouncementForm = () => {
  return (
    <div className="flex flex-row justify-center">
        <Card title="Duyuru Ekle" bordered={true} className="w-full" hoverable>
      <Form
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
        <Form.Item label="Input">
          <Input />
        </Form.Item>

        <Form.Item
          name="intro"
          label="Intro"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={200} style={{height : '150px'}} />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        
         <div className="flex justify-end ">
         <Button className="text-center  bg-black text-white rounded-full w-24">Yayınla</Button>
         </div>
      
      </Form>
    </Card>
    </div>
  );
};

export default AnnouncementForm;
