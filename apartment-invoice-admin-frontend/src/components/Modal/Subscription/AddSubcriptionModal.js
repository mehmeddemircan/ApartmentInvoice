import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import {useDispatch,useSelector} from 'react-redux'
import { CreateSubscription } from "../../../redux/actions/SubscriptionActions";
const AddSubsriptionModal = ({
  handleCloseAddSubscriptionModal,
  showAddSubscriptionModal,
}) => {
  const [amount, setAmount] = useState("");
  const [subscriptionDate, setSubscriptionDate] = useState("")
  const handleDateChange = (date, dateString) => {
    setSubscriptionDate(dateString);
  };
  const dispatch = useDispatch()
  const handleAddSubscription = () => {
    dispatch(CreateSubscription({amount,subscriptionDate}))
  }

  return (
    <Modal
      centered
      title="Block Ekle"
      open={showAddSubscriptionModal}
      onCancel={handleCloseAddSubscriptionModal}
      footer={[
        <Button key="back" onClick={handleCloseAddSubscriptionModal}>
          İptal
        </Button>,
        <Button
          key="submit"
          className="btn btn-outline-primary"
          onClick={handleAddSubscription}
        >
          Ekle
        </Button>,
      ]}
    >
      <Form
        className="mx-auto"
        style={{
          maxWidth: 600,
        }}
        layout="vertical"
      >
        <Form.Item name="amount" label="Fiyat">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="aidat fiyat"
          />
        </Form.Item>

        <Form.Item name="month" label="Ay">
          <DatePicker onChange={handleDateChange} picker="month" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSubsriptionModal;
