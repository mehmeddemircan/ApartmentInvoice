import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { DeleteActivity } from "../../redux/actions/ActivityActions";
import EditActivityModal from "../Modal/Activity/EditActivityModal";
const ActivityCard = ({ item }) => {
  const navigate = useNavigate();

  const [isShowEditActivityModal, setIsShowEditActivityModal] = useState(false);
  const handleShowEditActivityModal = () => {
    setIsShowEditActivityModal(true);
  };

  const handleCloseEditActivityModal = () => {
    setIsShowEditActivityModal(false);
  };

  const dispatch = useDispatch();

  const handleDeleteActivity = (activityId) => {
    dispatch(DeleteActivity(activityId));
  };

  return (
    <div className="my-3 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row hover:shadow-lg hover:translate-y-[-4px] relative">
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
          <a href={`/activities/${item.id}/details`} className="underline">
            Details
          </a>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex space-x-2">
        <a onClick={handleShowEditActivityModal} className="underline">
          <FaEdit />
        </a>
        <EditActivityModal 
            item={item}
            isShowEditActivityModal={isShowEditActivityModal}
            handleCloseEditActivityModal={handleCloseEditActivityModal}
        />
        <a onClick={() => handleDeleteActivity(item.id)} className="underline">
          <FaTimes />
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
