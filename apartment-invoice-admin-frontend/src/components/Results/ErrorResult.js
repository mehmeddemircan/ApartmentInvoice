import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Result, Typography } from "antd";
import "./ErrorResult.css";
const { Paragraph, Text } = Typography;

const ErrorResult = ({ title, subTitle, extra }) => (
  <div className="my-4 d-flex flex-row justify-content-center align-items-center">
    <Result status="error" title={title} subTitle={subTitle} extra={extra}>
      <div className="desc">
        <Paragraph className="text-xl">
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            The content you submitted has the following error:
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your
          account has been frozen. <a>Thaw immediately &gt;</a>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your
          account is not yet eligible to apply. <a>Apply Unlock &gt;</a>
        </Paragraph>
      </div>
    </Result>
  </div>
);
export default ErrorResult;
