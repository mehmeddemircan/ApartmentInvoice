import React from "react";
import MainLayout from "../layouts/MainLayout";
import EmptyResult from "../components/results/EmptyResult";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import SubscriptionCard from "../components/card/SubscriptionCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AllSubscription } from "../redux/actions/SubscriptionAction";
const SubscriptionsPage = () => {
  const getAllSubscription = useSelector(
    (state) => state.subscription.getAllSubscription
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllSubscription());
  }, [dispatch]);
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

export default SubscriptionsPage;
