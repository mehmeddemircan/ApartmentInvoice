import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormButton from "../button/FormButton";
import { AddOrder } from "../../redux/actions/OrderAction";
import SuccessResult from "../results/SuccessResult";
import JoinButton from "../button/JoinButton";
import { useNavigate } from "react-router-dom";
const GiveOrderForm = () => {
  const auth = useSelector((state) => state.auth);
  const [userId, setUserId] = useState("");
  const addOrder = useSelector((state) => state.order.addOrder);
  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth]);
  const dispatch = useDispatch();
  const [orderContent, setOrderContent] = useState("");
  const handleGiveOrder = () => {
    dispatch(AddOrder({ userId, orderContent }));
  };
  const navigate = useNavigate();
  return (
    <Fragment>
      {addOrder.success ? (
        <SuccessResult
          resultMessage="Başarıli şekilde sipariş verdiniz"
          buttonComponent={
            <>
              <JoinButton
                buttonName="Siparişlerime git"
                onClick={() => navigate("/my-orders")}
                className="text-white bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              />
              ,
              <JoinButton
                buttonName="Tekrar Sipariş ver"
                // onClick={handlePayDonateReset}
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              />
            </>
          }
        />
      ) : (
        <div className="bg-white px-6 py-2 sm:py-32 lg:px-8">
          <h2>Give Order Page</h2>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-3 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="Sipariş İçeriği"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2.5">
                  <textarea
                    rows={8}
                    value={orderContent}
                    onChange={(e) => setOrderContent(e.target.value)}
                    type="name"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-1 border-gray-600 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <FormButton title="Sipariş ver" onClick={handleGiveOrder} />
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default GiveOrderForm;
