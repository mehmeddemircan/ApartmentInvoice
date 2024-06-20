import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useSelector, useDispatch } from "react-redux";
import { GetAllOrder } from "../redux/actions/OrderActions";
import { Tabs, List ,Badge} from "antd";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import EmptyResult from "../components/Results/EmptyResult";
import OrderItem from "../components/ListItem/OrderItem";
import {
  DELETE_ORDER_RESET,
  UPDATE_ORDER_STATUS_RESET,
} from "../redux/constants/OrderConstants";
const { TabPane } = Tabs;
const OrderPage = () => {
  const getAllOrder = useSelector((state) => state.order.getAllOrder);
  const orderUpdateStatusDelete = useSelector(
    (state) => state.order.orderUpdateStatusDelete
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllOrder());
    if (orderUpdateStatusDelete.isUpdated) {
      dispatch({ type: UPDATE_ORDER_STATUS_RESET });
    }
    if (orderUpdateStatusDelete.isDeleted) {
      dispatch({ type: DELETE_ORDER_RESET });
    }
  }, [
    dispatch,
    orderUpdateStatusDelete.isUpdated,
    orderUpdateStatusDelete.isDeleted,
  ]);

  return (
    <MainLayout>
      <div>OrderPage</div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane key="1" tab={<><Badge className="" count={getAllOrder.success && getAllOrder.orders.data.filter((order) => order.orderStatus === 1)
                .length}><span className="me-3">Beklemede Olanlar</span></Badge></>}>
          <>
            {getAllOrder && getAllOrder.success ? (
              getAllOrder.orders.data.filter((order) => order.orderStatus === 1)
                .length === 0 ? (
                <EmptyResult />
              ) : (
                <List YitemLayout="horizontal">
                  {getAllOrder.orders.data
                    .filter((order) => order.orderStatus === 1)
                    .map((item, idx) => (
                      <OrderItem item={item} />
                    ))}
                </List>
              )
            ) : (
              <LoadingSpinner />
            )}
          </>
        </TabPane>
        <TabPane key="2" tab={<><Badge className="" count={getAllOrder.success && getAllOrder.orders.data.filter((order) => order.orderStatus === 2)
                .length}><span className="me-3">Kabul Edilenler</span></Badge></>}>
          <>
            {getAllOrder && getAllOrder.success ? (
              getAllOrder.orders.data.filter((order) => order.orderStatus === 2)
                .length === 0 ? (
                <EmptyResult />
              ) : (
                <List YitemLayout="horizontal">
                  {getAllOrder.orders.data
                    .filter((order) => order.orderStatus === 2)
                    .map((item, idx) => (
                      <OrderItem item={item} />
                    ))}
                </List>
              )
            ) : (
              <LoadingSpinner />
            )}
          </>
        </TabPane>
        <TabPane key="3" tab={<><Badge className="" count={getAllOrder.success && getAllOrder.orders.data.filter((order) => order.orderStatus === 3)
                .length}><span className="me-3">Reddedilenler</span></Badge></>}>
          <>
            {getAllOrder && getAllOrder.success ? (
              getAllOrder.orders.data.filter((order) => order.orderStatus === 3)
                .length === 0 ? (
                <EmptyResult />
              ) : (
                <List YitemLayout="horizontal">
                  {getAllOrder.orders.data
                    .filter((order) => order.orderStatus === 3)
                    .map((item, idx) => (
                      <OrderItem item={item} />
                    ))}
                </List>
              )
            ) : (
              <LoadingSpinner />
            )}
          </>
        </TabPane>
      </Tabs>
    </MainLayout>
  );
};

export default OrderPage;
