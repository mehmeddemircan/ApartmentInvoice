import React from "react";
import { Breadcrumb } from "antd";
const GeneralBreadCrumb = ({ items }) => {
  return <Breadcrumb className="px-3 pt-2" items={items} />;
};

export default GeneralBreadCrumb;
