import React, { Fragment, useEffect } from "react";
import { List, Tag, Tooltip, Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOrder, UpdateOrderStatus } from "../../redux/actions/OrderActions";
import { useState } from "react";

const OrderItem = ({ item }) => {
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    setOrderId(item.id);
  }, [item]);

  const dispatch = useDispatch();
  const handleAcceptOrder = () => {
    dispatch(UpdateOrderStatus(orderId, 2));
  };

  const handleDejectOrder = () => {
    dispatch(UpdateOrderStatus(orderId, 3));
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(DeleteOrder(orderId))
  }

  return (
    <Fragment>
      <List.Item
        className="w-full p-3"
        actions={[
          <div className="text-right">
            <Tag color={item.orderStatus === 1 ? "#2db7f5" : item.orderStatus === 2 ? "#87d068" :"red"}>
              {item.orderStatus === 1
                ? "Bekleniyor"
                : item.orderStatus === 2
                ? "Kabul Edildi"
                : "Reddedildi"}
            </Tag>
          </div>,

         (item.orderStatus === 3 || item.orderStatus == 1) &&  <button
          className="btn btn-outline-success rounded-pill"
          onClick={handleAcceptOrder}
        >
          Kabul Et
        </button>,
         (item.orderStatus === 2 || item.orderStatus == 1 ) && 
         <button
         className="btn btn-outline-danger rounded-pill"
         onClick={handleDejectOrder}
       >
         Reddet
       </button>,

          item.orderStatus === 3 && (
            <div>
              <Tooltip title="Delete">
                <button className="btn btn-light" onClick={() => handleDeleteOrder(item.id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </Tooltip>
            </div>
          ),
        ]}
      >
        <List.Item.Meta
          title={
            <div className="w-full">
              {item.userFirstName} {item.userLastName}
            </div>
          }
          description={<div clas>{item.orderContent}</div>}
        />
      </List.Item>
    </Fragment>
  );
};

export default OrderItem;
