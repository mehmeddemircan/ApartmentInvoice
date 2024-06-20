import React, { useState } from "react";
import { Button, Modal } from "antd";
const EditBlockModal = ({
  item,
  handleCancelEditBlockModal,
  isShowEditBlockModal,
  handleUpdateBlock,
  name,
  setName,
}) => {
  return (
    <Modal
      centered
      title="Block Güncelle"
      open={isShowEditBlockModal}
      onCancel={handleCancelEditBlockModal}
      footer={[
        <Button key="back" onClick={handleCancelEditBlockModal}>
          İptal
        </Button>,
        <Button
          key="submit"
          className="btn btn-outline-primary"
          onClick={handleUpdateBlock}
        >
          Güncelle
        </Button>,
      ]}
    >
      <div class="mb-6">
        <input
          type="text"
          id="large-input"
          placeholder="block adi"
          class="block w-full p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={item.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default EditBlockModal;
