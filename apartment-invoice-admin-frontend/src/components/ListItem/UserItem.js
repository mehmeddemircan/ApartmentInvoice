import React, { Fragment } from "react";
import { Popover } from "antd";
import AuthorizationContent from "../PopoverContent/AuthorizationContent";
import { Button, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../../redux/actions/UserActions";
const UserItem = ({ item, idx }) => {
  const dispatch = useDispatch();
  const confirm = (userId) => {
    dispatch(DeleteUser(userId));
  };

  return (
    <Fragment>
      <li key={idx} className="py-5 flex items-start justify-between">
        <div className="flex gap-3">
          <div>
            <span className="block text-sm text-gray-700 font-semibold">
              {item.firstName} {item.lastName}{" "}
              <a className="ms-3">(sdadasdsasdadsadasds)</a>
            </span>
            <span className="block text-sm text-gray-600">{item.email}</span>
          </div>
        </div>

        <div>
          <Popover
            content={<AuthorizationContent item={item} />}
            trigger="click"
            placement="bottom"
            title="yetki ver"
          >
            <a
              href="javascript:void(0)"
              className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100"
            >
              Yetki ver
            </a>
          </Popover>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(item.id)}
            okText="Yes"
            cancelText="No"
          >
            <a
              href="javascript:void(0)"
              className=" text-sm border rounded-lg px-3 py-2 duration-150 bg-red-600 text-white ms-3"
            >
              Delete
            </a>
          </Popconfirm>
        </div>
      </li>
    </Fragment>
  );
};

export default UserItem;
