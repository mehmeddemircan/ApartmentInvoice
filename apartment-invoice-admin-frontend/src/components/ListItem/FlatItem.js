import React, { Fragment } from 'react'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import { Card, Descriptions, Tooltip } from "antd";
  import {useDispatch, useSelector} from 'react-redux'
import { DeleteFlat } from '../../redux/actions/FlatActions';
const FlatItem = ({item}) => {

    const dispatch = useDispatch()

    const handleDeleteFlat = (flatId) => {
        dispatch(DeleteFlat(flatId))
    }
  return (
    <Fragment>
    <Card
      hoverable
      style={{
        width: 350,
        border: "1px solid rgb(221,221,221)",
      }}
      title={item.flatNo}
      extra={
        <div className='flex  justify-end items-center'>
            <Tooltip placement="topLeft" title="Edit">
          <button
            className="btn btn-sm "
           
             onClick={handleDeleteFlat}
          >
           <EditOutlined className='me-5' />
          </button>
        </Tooltip>
         <Tooltip placement="topLeft" title="Delete">
         <button
           className="btn btn-sm "
          
           onClick={() => handleDeleteFlat(item.id)}
         >
           <i class="fa-solid fa-x "></i>
         </button>
       </Tooltip>
        </div>
      }
      className="my-3"
      
    >
     
    </Card>
  </Fragment>
  )
}

export default FlatItem