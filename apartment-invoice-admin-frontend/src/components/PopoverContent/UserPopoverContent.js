import React, { Fragment, useEffect, useState } from 'react'
import { Select, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { AllRole } from '../../redux/actions/RoleActions';
import { GetUserByRole } from '../../redux/actions/UserActions';
const {Option} = Select ; 
const UserPopoverContent = ({pageNumber,pageSize}) => {

    const getAllRole  = useSelector((state) => state.role.getAllRole)
    const [operationClaimId, setOperationClaimId] = useState(0)
   
    const handleSelect = (value) => {
        setOperationClaimId(value)
    }

    const dispatch = useDispatch()

    const handleSelectUsersByRole = () => {
      dispatch(GetUserByRole(pageNumber,pageSize,operationClaimId))
    }

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

       <div className='flex justify-end'>
        <button className='bg-black text-white rounded-full w-24 mt-4 h-8' onClick={handleSelectUsersByRole} >Uygula </button>
       </div>
    </Fragment>
  )
}

export default UserPopoverContent