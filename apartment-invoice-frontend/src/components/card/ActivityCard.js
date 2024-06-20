import React, { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ActivityCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        onClick={() => navigate(`/activities/${item.id}/details`)}
        class="my-3 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row hover:shadow-lg hover:translate-y-[-4px]"
      >
        <img
          class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          src={item.images}
          alt=""
        />
        <div class="flex flex-col justify-start p-6">
          <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {item.title}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
           {item.description}
          </p>
          <div className="d-inline-flex justify-between">
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
            <a href="#" className="underline">
              Details
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActivityCard;
