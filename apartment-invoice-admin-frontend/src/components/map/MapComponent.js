import React, { Fragment, useEffect, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import SearchMapButton from "./SearchMapButton";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";
import ApartmentMarker from "./markers/ApartmentMarker";
import CreateApartmentMarker from "./markers/CreateApartmentMarker";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import {
  ADD_APARTMENT_RESET,
  DELETE_APARTMENT_RESET,
} from "../../redux/constants/ApartmentConstants";
import { toast } from "react-toastify";
import {
  AllApartment,
  GetApartmentByCity,
} from "../../redux/actions/ApartmentActions";
import { message } from "antd";
import FiltersButtonApartmentContent from "../PopoverContent/FiltersButtonApartmentContent";
import FiltersButton from "../button/FiltersButton";
import { AllCity } from "../../redux/actions/CityActions";
const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  const getAllApartment = useSelector(
    (state) => state.apartment.getAllApartment
  );

  const getApartmentByCity = useSelector((state) => state.apartment.getApartmentByCity)

  const deleteUpdateApartment = useSelector(
    (state) => state.apartment.deleteUpdateApartment
  );
  const addApartment = useSelector((state) => state.apartment.addApartment);
  const [marker, setMarker] = useState(null);
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState(defaultProps.center);
  const [zoom, setZoom] = useState(defaultProps.zoom);
  const [selectedCity, setSelectedCity] = useState(0);

  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllCity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(AllApartment());
    if (addApartment.success) {
      setMarker(null);
      message.success("Başarılı şekilde apartman eklendi ");
      dispatch({ type: ADD_APARTMENT_RESET });
    }
    if (deleteUpdateApartment.isDeleted) {
      message.success(deleteUpdateApartment.message);
      dispatch({ type: DELETE_APARTMENT_RESET });
    }
  }, [dispatch, addApartment.success, deleteUpdateApartment.isDeleted]);
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(latLng.lat);
    console.log(latLng.lng);
    setAddress(value);
    setCenter(latLng);

    if (address.length > 20) {
      setZoom(13);
    } else {
      setZoom(10);
    }

    mapRef.current?.panTo(latLng);
  };

  const onMapClick = (event) => {
    setMarker({
      lat: event.lat,
      lng: event.lng,
    });
  };
  useEffect(() => {
    if (address === "") {
      setCenter(defaultProps.center);
      setZoom(defaultProps.zoom);
    }
  }, [address]);

  const handleMapChange = ({ center }) => {
    setCenter(center);

    if (address && address.length < 20) {
      setZoom(13);
    }
    if (address.length > 20) {
      setZoom(15);
    }
  };

  const handleAddCityChange = (value) => {

    setSelectedCity(value);
  
  };

  useEffect(() => {
    dispatch(GetApartmentByCity(selectedCity));
  }, [dispatch, selectedCity]);

  return (
    <Fragment>
      <div className="container my-3">
        <div className="d-flex flex-row justify-content-end">
          <SearchMapButton
            address={address}
            setAddress={setAddress}
            handleSelect={handleSelect}
          />
          <FiltersButton
            title={"Apartman Filtrele"}
            content={
              <FiltersButtonApartmentContent
                selectedCity={selectedCity}
                handleAddCityChange={handleAddCityChange}
              />
            }
          >
            Apartman Filtrele
          </FiltersButton>

       
        </div>
      </div>

      <div className="container-fluid" style={{ height: "100vh" }}>
        <GoogleMapReact
          center={center}
          zoom={zoom}
          onChange={handleMapChange}
          onClick={onMapClick}
        >
          {
            selectedCity != undefined && selectedCity != 0   ? 
               (
                getApartmentByCity.filterApartments.data.map((apartment) => (
                  <ApartmentMarker
                  apartment={apartment}
                  key={apartment.id}
                  lat={apartment.latitude}
                  lng={apartment.longitude}
                />
                ))
              )
                :
           
              getAllApartment.success &&
              getAllApartment.apartments.data.map((apartment) => (
                <ApartmentMarker
                  apartment={apartment}
                  key={apartment.id}
                  lat={apartment.latitude}
                  lng={apartment.longitude}
                />
              ))
            
            }

      

      

          {marker && (
            <CreateApartmentMarker lat={marker.lat} lng={marker.lng} />
          )}
        </GoogleMapReact>
      </div>
    </Fragment>
  );
};

export default MapComponent;
