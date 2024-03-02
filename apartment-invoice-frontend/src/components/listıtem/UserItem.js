import React, { Fragment } from "react";


const UserItem = ({ item, idx }) => {


  return (
    <Fragment>
      <li key={idx} className="py-3 flex items-start justify-between">
        <div className="flex gap-3">
          <div>
            <span className="block text-sm text-gray-700 font-semibold">
              {item.firstName} {item.lastName}{" "}
              
            </span>
            {/* <span className="block text-sm text-gray-600">{item.email}</span> */}
          </div>
        </div>

    
      </li>
    </Fragment>
  );
};

export default UserItem;
