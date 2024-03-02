import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UpdateSubscription } from "../../../redux/actions/SubscriptionActions";
import moment from "moment";
const EditSubscriptionModal = ({
  item,
  showEditSubscriptionModal,
  handleCloseEditSubscriptionModal,
}) => {
  const [id, setId] = useState(item.id);
  const [amount, setAmount] = useState("");
  const [subscriptionDate, setSubscriptionDate] = useState("");

  const handleDateChange = (date, dateString) => {
    setSubscriptionDate(dateString);
  };

  const dispatch = useDispatch();
  const handleUpdateSubscription = () => {
    dispatch(UpdateSubscription({ id, amount, subscriptionDate }));
  };
  const defaultDate = moment(item.subscriptionDate, "YYYY-MM");
  const deleteUpdateSubscription = useSelector(
    (state) => state.subscription.deleteUpdateSubscription
  );
  useEffect(() => {
    handleCloseEditSubscriptionModal();
  }, [deleteUpdateSubscription.isUpdated]);

  return (
    <Modal
      centered
      title="Block Ekle"
      open={showEditSubscriptionModal}
      onCancel={handleCloseEditSubscriptionModal}
      footer={[
        <Button key="back" onClick={handleCloseEditSubscriptionModal}>
          İptal
        </Button>,
        <Button
          key="submit"
          className="btn btn-outline-primary"
          onClick={handleUpdateSubscription}
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
            defaultValue={item.amount}
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

export default EditSubscriptionModal;
