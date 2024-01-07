import React, { Fragment, useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Descriptions, Tooltip,message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFlat, UpdateFlat } from "../../redux/actions/FlatActions";
import EditFlatModal from "../Modal/Flat/EditFlatModal";
import { useParams } from "react-router-dom";
import { UPDATE_FLAT_RESET } from "../../redux/constants/FlatConstants";
import FlatDescription from "../Descriptions/FlatDescription";
import {Popconfirm} from 'antd'
import AddUserToFlatModal from "../Modal/Flat/AddUserToFlatModal";
const FlatItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteUpdateFlat = useSelector((state) => state.flat.deleteUpdateFlat)
  const handleDeleteFlat = (flatId) => {
    dispatch(DeleteFlat(flatId));
  };
  let { blockNo } = useParams();

  const handleChangeNumberOfRooms = (value) => {
    setNumberOfRooms(value);
    // Do something with the selected value
  };

  const handleChangeFloor = (value) => {
    setFloor(value);
  };
  const handleChangeFlatNo = (value) => {
    setFlatNo(value);
  };

  const [id, setId] = useState(item.id)
  const [isEmpty, setIsEmpty] = useState(item.isEmpty)
  const [numberOfRooms, setNumberOfRooms] = useState(item.numberOfRooms)
  const [floor, setFloor] = useState(item.floor)
  const [flatNo, setFlatNo] = useState(item.flatNo)
  const [blockId, setBlockId] = useState(blockNo)



  const handleUpdateFlat = () => {
    dispatch(UpdateFlat({id,isEmpty,numberOfRooms,floor,flatNo,blockId}))
  }
  

  const [isShowEditFlatModal, setIsShowEditFlatModal] = useState(false);

  const handleShowEditFlatModal = () => {
    setIsShowEditFlatModal(true);
  };

  const handleCancelEditFlatModal = () => {
    setIsShowEditFlatModal(false);
  };

  useEffect(() => {
    if (deleteUpdateFlat.isUpdated) {
      handleCancelEditFlatModal()
    }
  }, [deleteUpdateFlat.isUpdated])

  const confirm = (itemId) => {
    dispatch(DeleteFlat(itemId));
  };

  const [isShowAddUserToFlatModal, setIsShowAddUserToFlatModal] = useState(false)
  const handleShowAddUserToFlatModal = () => {
    setIsShowAddUserToFlatModal(true)
  }

  const handleCloseAddUserToFlatModal =() => {
    setIsShowAddUserToFlatModal(false)
  }
  return (
    <Fragment>
      <Card
        hoverable
        style={{
          width: 350,
          border: "1px solid rgb(221,221,221)",
        }}
        title={<a>{item.flatNo} .Daire</a>}
        extra={
          <div className="flex  justify-end items-center">
            <Tooltip placement="topLeft" title="Kullanıcı Ekle">
              <button className="btn btn-sm btn-primary rounded-full me-2 " onClick={handleShowAddUserToFlatModal}>
                Kullanıcı Ekle
              </button>
            </Tooltip>
            <AddUserToFlatModal 
              isShowAddUserToFlatModal={isShowAddUserToFlatModal}
              handleCancelEditFlatModal={handleCancelEditFlatModal}
            />
            <Tooltip placement="topLeft" title="Edit">
              <button className="btn btn-sm " onClick={handleShowEditFlatModal}>
                <EditOutlined  />
              </button>
            </Tooltip>
            <EditFlatModal
              isShowEditFlatModal={isShowEditFlatModal}
              handleCancelEditFlatModal={handleCancelEditFlatModal}
              id={id}
              isEmpty={isEmpty}
              setIsEmpty={setIsEmpty}
              floor={floor}
              setFloor={setFloor}
              flatNo={flatNo}
              setFlatNo={setFlatNo}
              blockId={blockId}
              setBlockId={setBlockId}
              handleUpdateFlat={handleUpdateFlat}
              numberOfRooms={numberOfRooms}
              setNumberOfRooms={setNumberOfRooms}
              handleChangeNumberOfRooms={handleChangeNumberOfRooms}
              handleChangeFloor={handleChangeFloor}
              handleChangeFlatNo={handleChangeFlatNo}

            />
             <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(item.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip placement="topLeft" title="Delete">
              <button
                className="btn btn-sm "
              
              >
                <i class="fa-solid fa-x "></i>
              </button>
            </Tooltip>
            </Popconfirm>
          </div>
        }
        className="my-3"
      >
        <FlatDescription item={item}/>
      </Card>
    </Fragment>
  );
};

export default FlatItem;
