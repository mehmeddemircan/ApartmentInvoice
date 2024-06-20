import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input, InputNumber, Select, Switch } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { AllUser } from "../../../redux/actions/UserActions";
import { useEffect } from "react";

const AddUserToFlatModal = ({
  isShowAddUserToFlatModal,
  handleCloseAddUserToFlatModal,
  handleChangeUser,
  handleAddUserToFlat
}) => {
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(AllUser())
}, [dispatch])


  const getAllUser = useSelector((state) => state.user.getAllUser)

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
          Ekle
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
          <Select onSelect={handleChangeUser} placeholder="kullanici">
            {getAllUser && getAllUser.success && getAllUser.users.data.map((item) => (
                 <Select.Option value={item.id}>{item.email}</Select.Option>
               
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserToFlatModal;
