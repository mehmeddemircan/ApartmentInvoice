import { Select, Space } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const { Option } = Select;
const FiltersButtonApartmentContent = ({ handleAddCityChange }) => {
  const getAllCity = useSelector((state) => state.city.getAllCity);
  return (
    <Fragment>
      <Space
        style={{
          width: "300px",
        }}
        direction="vertical"
      >
        <label className="col-form-label">Şehirler</label>

        <Select
          
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select city "
          onChange={handleAddCityChange}
        >
          {getAllCity.cities.data.map((city) => (
            <Option value={city.id}>{city.name}</Option>
          ))}
        </Select>
      </Space>
    </Fragment>
  );
};

export default FiltersButtonApartmentContent;
