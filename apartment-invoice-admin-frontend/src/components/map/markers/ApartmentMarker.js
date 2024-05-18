import { Button, Descriptions, Image, Popover, Tooltip } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteApartment } from "../../../redux/actions/ApartmentActions";
import { Link } from "react-router-dom";
const ApartmentMarker = ({ apartment }) => {
  const dispatch = useDispatch();
  const handleDeleteApartment = (apartmentId) => {
    dispatch(DeleteApartment(apartmentId));
  };
  return (
    <Popover
      overlayStyle={{
        maxWidth: "320px",
      }}
      trigger={"hover"}
      title={
        <>
          <Descriptions
            title={
              <div className="d-flex justify-content-between">
                <h6>Apartman Bilgileri</h6>
                <i
                  class="fa-solid fa-x"
                  onClick={() => handleDeleteApartment(apartment.id)}
                ></i>
              </div>
            }
            layout="horizontal"
          >
            <Descriptions.Item className="d-block ">
              <Image width={300} height={100} src={apartment?.images} />
            </Descriptions.Item>
            <Descriptions.Item className="d-block py-0" label="Apartman ismi">
              <p className="d-inline-flex ">{apartment.name}</p>
            </Descriptions.Item>
            <Descriptions.Item className="d-block py-0" label="Address">
              <p className="d-inline-flex ">{apartment.address}</p>
            </Descriptions.Item>
            <Descriptions.Item className="d-block py-1" label="Latitude">
              {apartment.latitude}
            </Descriptions.Item>

            <Descriptions.Item className="d-block py-1 " label="Longitude">
              {apartment.longitude}
            </Descriptions.Item>
          </Descriptions>
          <div className="d-flex justify-end align-items-center ">
            <Link to={`/apartments/${apartment.id}/details`}>
              <button
                type="button"
                className="rounded-pill block w-100 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Detaylar
              </button>
            </Link>
          </div>
        </>
      }
    >
      <Button type="default" icon={<i class="fa-solid fa-building"></i>} />
    </Popover>
  );
};

export default ApartmentMarker;
