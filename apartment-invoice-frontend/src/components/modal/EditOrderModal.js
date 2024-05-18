import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import {useSelector,useDispatch} from 'react-redux'
import { UpdateOrder } from "../../redux/actions/OrderAction";
const EditOrderModal = ({item,showEditOrderModal , handleCloseEditOrderModal}) => {

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const handleUpdateOrder = () => {
        dispatch(UpdateOrder({id,userId,orderContent,orderStatus}))
    }
    const [id, setId] = useState(item.id)
    const [userId, setUserId] = useState(auth.user.id)
    const [orderContent, setOrderContent] = useState(item.orderContent)
    const [orderStatus, setOrderStatus] = useState(item.orderStatus)
  return (
    <Fragment>
      <Modal
        centered
        open={showEditOrderModal}
        onOk={handleCloseEditOrderModal}
        onCancel={handleCloseEditOrderModal}
        footer={[
          <button
            className="btn btn-dark rounded-pill"
            onClick={handleUpdateOrder}
          >
            Düzenle{" "}
          </button>,
        ]}
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Yorum Düzenle
          </h2>
        </div>
        <form class="">
          <div class="py-2 px-4 mb-4 border-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
              defaultValue={orderContent}
              value={orderContent}
              onChange={(e) => setOrderContent(e.target.value)}
              id="comment"
              rows="8"
              class="px-0 w-full  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditOrderModal;
