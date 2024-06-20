import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  AllComplain,
  AllComplainWithPagination,
} from "../redux/actions/ComplainActions";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import CustomPagination from "../components/Pagination/CustomPagination";
const ComplainsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllComplain());
  }, [dispatch]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  useEffect(() => {
    dispatch(AllComplainWithPagination(pageNumber, pageSize));
  }, [dispatch, pageNumber, pageSize]);

  const getAllComplain = useSelector((state) => state.complain.getAllComplain);
  const getAllComplainWithPage = useSelector(
    (state) => state.complain.getAllComplainWithPage
  );

  return (
    <MainLayout>
      <h3 className="text-left">Tüm Şikayetler</h3>
      <List
        style={{ width: 540, height: 540, overflowY: "auto", borderRadius: 17 }}
        YitemLayout="horizontal"
      >
        {getAllComplainWithPage && getAllComplainWithPage.success ? (
          getAllComplainWithPage.complains.data.map((item, idx) => (
            <List.Item className="w-full p-3">
              <List.Item.Meta
                title={<div className="w-full">{item.subject}</div>}
                description={<div clas>{item.messageContent}</div>}
              />
            </List.Item>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </List>

      <CustomPagination
        onChange={(page) => setPageNumber(page)}
        current={pageNumber}
        defaultCurrent={1}
        pageSize={pageSize}
        total={getAllComplain.success && getAllComplain.complains.data.length}
      />
    </MainLayout>
  );
};

export default ComplainsPage;
