import React, { Fragment } from "react";
import { Empty } from "antd";
const SuccessResult = ({buttonComponent, resultMessage }) => {
  return (
    <div className="my-4 d-flex flex-row justify-content-center align-items-center">
      <Empty
        description={
          <Fragment>
            <h4 className="text-xl mb-4">
          {resultMessage}
            </h4>
            <div>{buttonComponent}</div>
          </Fragment>
        }
        image="https://img.freepik.com/free-vector/tiny-people-standing-near-big-checkmark-team-male-female-characters-finishing-work-with-list-good-job-sign-flat-vector-illustration-done-job-checklist-time-management-concept_74855-21019.jpg?size=626&ext=jpg&ga=GA1.1.421753172.1680698139&semt=ais"
        imageStyle={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default SuccessResult;
