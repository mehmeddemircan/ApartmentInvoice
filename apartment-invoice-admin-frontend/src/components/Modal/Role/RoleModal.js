import React from 'react'
import { Button, Modal } from "antd";
const RoleModal = ({isShowRoleModal,handleCancelShowRoleModal,handleAddRole,name,setName}) => {
  return (
    <Modal
      centered
      title="Block Ekle"
      open={isShowRoleModal}
        onCancel={handleCancelShowRoleModal}
      footer={[
        <Button key="back" onClick={handleCancelShowRoleModal}>
          İptal 
        </Button>,
        <Button key="submit" className="btn btn-outline-primary" onClick={handleAddRole}>
          Ekle
        </Button>
       
      ]}
    >
      <div class="mb-6">
        <input
          type="text"
          id="large-input"
          placeholder="rol adi"
          class="block w-full p-3 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </div>
    </Modal>
  )
}

export default RoleModal