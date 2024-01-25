import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { CreateFlat } from "../../../redux/actions/FlatActions";
const FlatModal = ({
  isShowFlatModal,
  handleCancelFlatModal,
  handleChangeFloor,
  handleAddFlat,
  handleChangeFlatNo,
  handleChangeNumberOfRooms,
  flatNo,
  isEmpty,
  setIsEmpty,
  numberOfRooms,
  floor,
}) => {
  return (
    <Modal
      title="Daire Ekle"
      open={isShowFlatModal}
      onCancel={handleCancelFlatModal}
      footer={[
        <Button key="back" onClick={handleCancelFlatModal}>
          İptal
        </Button>,
        <Button
          key="submit"
          className="btn btn-outline-primary"
          onClick={handleAddFlat}
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
        <Form.Item label="Daire No">
          <InputNumber
            placeholder="daire no"
            onChange={handleChangeFlatNo}
            className="w-full"
          />
        </Form.Item>
        <Form.Item label="Kaçıncı Kat">
          <InputNumber
            placeholder="kaçıncı kat"
            onChange={handleChangeFloor}
            className="w-full"
          />
        </Form.Item>
        <Form.Item label="Genişlik">
          <Select placeholder="genişlik" onSelect={handleChangeNumberOfRooms}>
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

export default FlatModal;
