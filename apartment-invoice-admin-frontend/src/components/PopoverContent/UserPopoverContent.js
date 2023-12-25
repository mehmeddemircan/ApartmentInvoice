import React, { Fragment, useEffect } from 'react'
import { Select, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { AllRole } from '../../redux/actions/RoleActions';
const {Option} = Select ; 
const UserPopoverContent = () => {

    const getAllRole  = useSelector((state) => state.role.getAllRole)

    const handleSelect = (value) => {
        alert(value)
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
        <button className='bg-black text-white rounded-full w-24 mt-4 h-8'>Uygula</button>
       </div>
    </Fragment>
  )
}

export default UserPopoverContent