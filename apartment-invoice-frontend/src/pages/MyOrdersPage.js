import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOrder, GetMyOrders } from "../redux/actions/OrderAction";
import EmptyResult from "../components/results/EmptyResult";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import { message, Tag, List } from "antd";
import { ADD_ORDER_RESET, DELETE_ORDER_RESET, UPDATE_ORDER_RESET } from "../redux/constants/OrderConstants";
import EditOrderModal from "../components/modal/EditOrderModal";
const MyOrdersPage = () => {
  const getMyOrders = useSelector((state) => state.order.getMyOrders);
  const addOrder = useSelector((state) => state.order.addOrder);
  const orderDeleteUpdate = useSelector((state) => state.order.orderDeleteUpdate)
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth]);
  useEffect(() => {
    dispatch(GetMyOrders(userId));
    if (addOrder.isAdded) {
      dispatch({ type: ADD_ORDER_RESET });
    }
    if(orderDeleteUpdate.isDeleted)
    {
      message.success(orderDeleteUpdate.message)
      dispatch({type : DELETE_ORDER_RESET})
    }
    if (orderDeleteUpdate.isUpdated) {
      handleCloseEditOrderModal()
      message.success(orderDeleteUpdate.message)
      dispatch({type : UPDATE_ORDER_RESET})
    }
  }, [dispatch, userId, addOrder.isAdded,orderDeleteUpdate.isDeleted,orderDeleteUpdate.isUpdated]);

  const handleDeleteOrder = (orderId) => {
    dispatch(DeleteOrder(orderId))
  }


  const [showEditOrderModal, setShowEditOrderModal] = useState(false)

  const handleShowEditOrderModal = () => {
    setShowEditOrderModal(true)
  }

  const handleCloseEditOrderModal = () => {
    setShowEditOrderModal(false)
  }


  return (
    <MainLayout>
      <h2>my orders page</h2>
      <List YitemLayout="horizontal">
        {getMyOrders && getMyOrders.success ? (
          getMyOrders.myOrders.data.length === 0 ? (
            <EmptyResult />
          ) : (
            getMyOrders.myOrders.data.map((item, idx) => (
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
                  <a class="block my-1  py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleShowEditOrderModal}>
                    <i class="fa-solid fa-pen-to-square me-2"></i>{" "}
                    <a>Düzenle</a>
                  </a>,
                  <EditOrderModal 
                        item ={item}
                        showEditOrderModal={showEditOrderModal}
                        handleCloseEditOrderModal={handleCloseEditOrderModal}
                  />,
                  <a
                    class="block my-1 py-2 pe-2 ps-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                     onClick={() => handleDeleteOrder(item.id)}
                  >
                    <i class="fa-solid fa-trash me-2"></i>
                    <a>Sil</a>
                  </a>,
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
            ))
          )
        ) : (
          <LoadingSpinner />
        )}
      </List>
    </MainLayout>
  );
};

export default MyOrdersPage;



