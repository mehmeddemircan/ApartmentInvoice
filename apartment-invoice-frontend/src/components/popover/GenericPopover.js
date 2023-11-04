import { Popover } from "antd";
import React, { Fragment } from "react";

const GenericPopover = ({ content, children }) => {
  return (
    <Fragment>
      <Popover placement="bottom" trigger={"click"} content={content}>
        {children}
      </Popover>
    </Fragment>
  );
};

export default GenericPopover;
