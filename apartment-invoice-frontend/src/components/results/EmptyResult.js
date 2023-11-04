import React from "react";
import { Empty } from "antd";
const EmptyResult = () => {
  return (
    <div
      className="my-4 d-flex flex-row justify-content-center align-items-center"
    >
      <Empty
        description={<h4  className="text-xl">Maalesef herhangi bir kayıt bulamadık</h4>}
        image="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg&ga=GA1.1.421753172.1680698139&semt=ais"
        imageStyle={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default EmptyResult;
