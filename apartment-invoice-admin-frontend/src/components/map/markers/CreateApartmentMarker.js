import React, { useState } from "react";

import { Button, Tooltip } from "antd";
import AddApartmentModal from "../../Modal/Apartment/AddApartmentModal";

const CreateApartmentMarker = ({ lat, lng, marker }) => {
  const [showAddApartmentModal, setShowAddApartmentModal] = useState(false);

  const handleShowAddApartmentModal = () => {
    setShowAddApartmentModal(true);
  };

  const handleCloseAddApartmentModal = () => {
    setShowAddApartmentModal(false);
  };

  return (
    <Tooltip
      placement="topLeft"
      title={showAddApartmentModal ? "" : "Apartment Ekle"}
    >
      <Button
        style={{ position: "fixed" }}
        type="ghost"
        icon={
          <i class="fa-sharp fa-solid fa-location-dot text-danger fs-4"></i>
        }
        onClick={handleShowAddApartmentModal}
      ></Button>

      <AddApartmentModal
        marker={marker}
        lat={lat}
        lng={lng}
        showAddApartmentModal={showAddApartmentModal}
        handleCloseAddApartmentModal={handleCloseAddApartmentModal}
      />
    </Tooltip>
  );
};

export default CreateApartmentMarker;
