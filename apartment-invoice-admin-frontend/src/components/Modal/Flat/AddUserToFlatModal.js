import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input, InputNumber, Select, Switch } from "antd";

import { useDispatch, useSelector } from "react-redux";

const AddUserToFlatModal = ({
  isShowAddUserToFlatModal,
  handleCloseAddUserToFlatModal,
}) => {
  const dispatch = useDispatch();

  const handleAddUserToFlat = () => {
    dispatch();
  };

  return (
    <Modal
      title="Kullanici Ekle"
      open={isShowAddUserToFlatModal}
      onCancel={handleCloseAddUserToFlatModal}
      footer={[
        <Button key="back" onClick={handleCloseAddUserToFlatModal}>
          İptal
        </Button>,
        <Button
          key="submit"
          className="btn btn-outline-primary"
          onClick={handleAddUserToFlat}
        >
          Onayla
        </Button>,
      ]}
    >
      <Form
        className="mt-6"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Kullanici">
          <Select placeholder="kullanici">
            <Select.Option value="1+0">1+0</Select.Option>
            <Select.Option value="1+1">1+1</Select.Option>
            <Select.Option value="2+1">2+1</Select.Option>
            <Select.Option value="3+1">3+1</Select.Option>
            <Select.Option value="4+1">4+1</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserToFlatModal;
