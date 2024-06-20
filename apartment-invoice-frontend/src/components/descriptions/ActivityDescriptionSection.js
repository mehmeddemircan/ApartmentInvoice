import React, { Fragment, useState, useEffect } from "react";
import JoinButton from "../button/JoinButton";
import ActivityParticipantsModal from "../modal/ActivityParticipantsModal";
import { useDispatch, useSelector } from "react-redux";
const ActivityDescriptionSection = ({
  getSingleActivity,
  handleJoinActivity,
  handleLeaveFromActivity,
}) => {
  const [showActivityParticipantsModal, setShowActivityParticipantsModal] =
    useState(false);

  const handleShowActivityParticipantsModal = () => {
    setShowActivityParticipantsModal(true);
  };

  const handleCloseActivityParticipantsModal = () => {
    setShowActivityParticipantsModal(false);
  };

  const checkUserActivity = useSelector(
    (state) => state.activity.checkUserActivity
  );
  const [userActivityId, setUserActivityId] = useState();

  useEffect(() => {
    if (checkUserActivity.success && checkUserActivity.userActivity.data != null) {
      setUserActivityId(checkUserActivity.userActivity.data.id);
    }
  }, [checkUserActivity,checkUserActivity.userActivity.data]);

  const handleUserActivityFunction = () => {
    if (
      checkUserActivity.success &&
      checkUserActivity.userActivity.data != null
    ) {
      handleLeaveFromActivity(userActivityId);
    } else {
      handleJoinActivity();
    }
  };

  return (
    <Fragment>
      <div className="border-b border-gray-200 pb-6">
        <h1
          className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
        >
          {getSingleActivity.success && getSingleActivity.activity.data.title}
        </h1>
        <div className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="mt-4">
          <JoinButton
            onClick={handleUserActivityFunction}
            buttonName={
              checkUserActivity.success &&
              checkUserActivity.userActivity.data != null
                ? "Etkinlikten Ayrıl"
                : "Etkinliğe katıl"
            }
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          />
          <JoinButton
            onClick={handleShowActivityParticipantsModal}
            buttonName="Katılımcıları göster"
            className="text-white bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          />

          <ActivityParticipantsModal
            showActivityParticipantsModal={showActivityParticipantsModal}
            handleCloseActivityParticipantsModal={
              handleCloseActivityParticipantsModal
            }
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ActivityDescriptionSection;
