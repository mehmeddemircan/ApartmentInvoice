import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

const TextIconEmptyResult = () => {
  return (
    <Result icon={<SmileOutlined />} title="Şu anlık herhangi bir duyuru yok" />
  );
};

export default TextIconEmptyResult;
