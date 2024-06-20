import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddSubsriptionModal from "../components/Modal/Subscription/AddSubcriptionModal";
import { useDispatch, useSelector } from "react-redux";
import { AllSubscription } from "../redux/actions/SubscriptionActions";
import {
  ADD_SUBSCRIPTION_RESET,
  DELETE_SUBSCRIPTION_RESET,
  UPDATE_SUBSCRIPTION_RESET,
} from "../redux/constants/SubscriptionConstants";
import { message } from "antd";
import SubscriptionCard from "../components/Card/SubscriptionCard";
import EmptyResult from "../components/Results/EmptyResult";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const SubscriptionPage = () => {
  const [showAddSubscriptionModal, setShowAddSubscriptionModal] =
    useState(false);

  const handleShowAddSubscriptionModal = () => {
    setShowAddSubscriptionModal(true);
  };

  const handleCloseAddSubscriptionModal = () => {
    setShowAddSubscriptionModal(false);
  };
  const dispatch = useDispatch();
  const getAllSubscription = useSelector(
    (state) => state.subscription.getAllSubscription
  );
  const addSubscription = useSelector(
    (state) => state.subscription.addSubscription
  );
  const deleteUpdateSubscription = useSelector(
    (state) => state.subscription.deleteUpdateSubscription
  );

  useEffect(() => {
    dispatch(AllSubscription());
    if (addSubscription.isAdded) {
      message.success(addSubscription.message);
      handleCloseAddSubscriptionModal();
      dispatch({ type: ADD_SUBSCRIPTION_RESET });
    }
    if (deleteUpdateSubscription.isDeleted) {
      message.success(deleteUpdateSubscription.message);
      dispatch({ type: DELETE_SUBSCRIPTION_RESET });
    }
    if (deleteUpdateSubscription.isUpdated) {
      message.success(deleteUpdateSubscription.message);
      dispatch({ type: UPDATE_SUBSCRIPTION_RESET });
    }
  }, [
    dispatch,
    addSubscription.isAdded,
    deleteUpdateSubscription.isDeleted,
    deleteUpdateSubscription.isUpdated,
  ]);

  return (
    <MainLayout>
      <div className="max-w-8xl mx-auto px-2">
        <div className="items-start justify-between sm:flex">
          <div>
            <h4 className="text-gray-800 text-xl font-semibold">Aidatlar</h4>
            <p className="mt-2 text-gray-600 text-base sm:text-sm">
              Give your team members access to manage the system.
            </p>
          </div>
          <button
            onClick={handleShowAddSubscriptionModal}
            href="javascript:void(0)"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Yeni Aidat
          </button>
          <AddSubsriptionModal
            showAddSubscriptionModal={showAddSubscriptionModal}
            handleCloseAddSubscriptionModal={handleCloseAddSubscriptionModal}
          />
        </div>
        <div>
          <h2 class="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">
            Pricing
          </h2>
          <p class="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Get started on our free plan and upgrade when you are ready.
          </p>
        </div>
        <div class="mt-24 container space-y-12 lg:space-y-0 ">
          {getAllSubscription && getAllSubscription.success ? (
            getAllSubscription.subscriptions.data.length === 0 ? (
              <EmptyResult />
            ) : (
              <div className="d-flex flex-row justify-between align-items-center flex-wrap gap-x-2  gap-y-5">
                {getAllSubscription.subscriptions.data.map((item, idx) => (
                  <SubscriptionCard key={idx} item={item} />
                ))}
              </div>
            )
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default SubscriptionPage;
