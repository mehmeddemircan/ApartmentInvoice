import React, { Fragment, useState } from "react";
import { Space, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AddRoleToUser } from "../../redux/actions/UserActions";
const { Option } = Select;
const AuthorizationContent = ({ item }) => {
  const [userId, setUserId] = useState(item.id);
  const [operationClaimId, setOperationClaimId] = useState(0);
  const dispatch = useDispatch();
  const handleSelect = (value) => {
    setOperationClaimId(value);
  };

  const handleAddRoleToUser = () => {
    dispatch(AddRoleToUser(userId,operationClaimId));
  };

  const getAllRole = useSelector((state) => state.role.getAllRole);

  return (
    <Fragment>
      <Space wrap>
        <Select
          style={{
            width: 240,
          }}
          allowClear
          placeholder="yetki seçiniz"
          onSelect={handleSelect}
        >
          {getAllRole &&
            getAllRole.roles.data.map((role, index) => (
              <Option key={index} value={role.id}>
                {role.name}
              </Option>
            ))}
        </Select>
      </Space>
      <div className="flex justify-end">
        <button
          className="bg-black text-white rounded-full w-24 mt-4 h-8"
          onClick={handleAddRoleToUser}
        >
          Uygula 
        </button>
      </div>
    </Fragment>
  );
};

export default AuthorizationContent;
