import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { CreateFlat } from "../../../redux/actions/FlatActions";
const EditFlatModal = ({
  isShowEditFlatModal,
  handleCancelEditFlatModal,
  handleChangeFloor,
  handleAddFlat,
  handleChangeFlatNo,
  handleChangeNumberOfRooms,
  flatNo,
  isEmpty,
  setIsEmpty,
  numberOfRooms,
  floor,
  setFloor,
  handleUpdateFlat

  
}) => {
  return (
    <Modal
      title="Daire Güncelle"
      open={isShowEditFlatModal}
      onCancel={handleCancelEditFlatModal}
      footer={[
        <Button key="back" onClick={handleCancelEditFlatModal}>
          İptal
        </Button>,
        <Button
          key="submit"
          className="btn btn-outline-primary"
          onClick={handleUpdateFlat}
        >
          Güncelle
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
        <Form.Item label="Daire No">
          <InputNumber
            defaultValue={flatNo}
            placeholder="daire no"
            onChange={handleChangeFlatNo}
            className="w-full"
          />
        </Form.Item>
        <Form.Item label="Kaçıncı Kat">
          <InputNumber
            defaultValue={floor}
            placeholder="kaçıncı kat"
            onChange={handleChangeFloor}
            className="w-full"
          />
        </Form.Item>
        <Form.Item label="Genişlik">
          <Select placeholder="genişlik" defaultValue={numberOfRooms} onSelect={handleChangeNumberOfRooms}>
            <Select.Option value="1+0">1+0</Select.Option>
            <Select.Option value="1+1">1+1</Select.Option>
            <Select.Option value="2+1">2+1</Select.Option>
            <Select.Option value="3+1">3+1</Select.Option>
            <Select.Option value="4+1">4+1</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Boş Mu" valuePropName="checked">
          <Switch
            defaultChecked={isEmpty}
            value={isEmpty}
            onChange={(e) => setIsEmpty(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditFlatModal;
