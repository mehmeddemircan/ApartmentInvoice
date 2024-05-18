import React, { Fragment, useEffect, useState ,useRef} from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { DeleteApartment, GetApartmentDetails } from "../redux/actions/ApartmentActions";
import ApartmentMarker from "../components/map/markers/ApartmentMarker";
import { useNavigate, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import ApartmentDetailMarker from "../components/map/markers/ApartmentDetailMarker";
import { Button, Descriptions, Image, Tooltip } from "antd";
import GeneralBreadCrumb from "../components/breadcrumb/GeneralBreadCrumb";
import EditApartmentModal from "../components/Modal/Apartment/EditApartmentModal";
import { LeftOutlined } from "@ant-design/icons";
import {message} from 'antd'
import { UPDATE_APARTMENT_RESET } from "../redux/constants/ApartmentConstants";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import NotFoundResult from "../components/Results/NotFoundResult";
const ApartmentDetailPage = () => {
  const navigate = useNavigate();

  const defaultProps = {
    center: {
      lat: 39,
      lng: 36,
    },
    zoom: 6,
  };

  const [center, setCenter] = useState(defaultProps.center);
  const [zoom, setZoom] = useState(defaultProps.zoom);
  const mapRef = useRef();
  const handleSelect = async () => {
    const latLng = {
      lat : apartment?.latitude,
      lng : apartment?.longitude
    }
 
    setCenter(latLng);
    setZoom(12)
   

    mapRef.current?.panTo(latLng);
  };




  const [showEditApartmentModal, setShowEditApartmentModal] = useState(false);

  const handleShowEditApartmentModal = () => {
    setShowEditApartmentModal(true);
  };

  const handleCloseEditApartmentModal = () => {
    setShowEditApartmentModal(false);
  };

  let { apartmentId } = useParams();
  const getApartmentDetails = useSelector(
    (state) => state.apartment.getApartmentDetails
  );
  const deleteUpdateApartment = useSelector((state) => state.apartment.deleteUpdateApartment)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetApartmentDetails(apartmentId));
    if (deleteUpdateApartment.isUpdated) {
      message.success(deleteUpdateApartment.message)
      handleCloseEditApartmentModal()
      dispatch({type : UPDATE_APARTMENT_RESET })
    }
  }, [dispatch, apartmentId,deleteUpdateApartment.isUpdated]);

  const [apartment, setApartment] = useState({});

  useEffect(() => {
    handleSelect()
    if (getApartmentDetails.success) {
      setApartment(getApartmentDetails.apartment.data);
    
    }
  }, [getApartmentDetails, getApartmentDetails.success]);

  const handleDeleteApartment = (value) => {
    dispatch(DeleteApartment(value))
    navigate('/NotFoundResult',{replace : true })
  }

  return (
    <MainLayout>
    <div className="d-flex justify-between align-items-center">
      <div className="d-inline-flex">
        <Tooltip title="Geri git">
          <button
            onClick={() => navigate("/")}
            className="btn rounded-pill btn-light  "
            shape="circle"
          >
            <LeftOutlined />
          </button>
        </Tooltip>
        <GeneralBreadCrumb
          items={[
            {
              title: "Home",
            },
            {
              title: <a href="">Application Center</a>,
            },
            {
              title: <a href="">Application List</a>,
            },
            {
              title: "An Application",
            },
          ]}
        />
      </div>
     <div className="d-inline-flex gap-x-2">
     <button
        type="button"
        className="rounded-pill block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleShowEditApartmentModal}
      >
        Güncelle
      </button>
      <button
        type="button"
        className="rounded-pill block  rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handleDeleteApartment(apartmentId)}
      >
        Sil 
      </button>
     </div>
      <EditApartmentModal
        showEditApartmentModal={showEditApartmentModal}
        handleCloseEditApartmentModal={handleCloseEditApartmentModal}
        apartment={apartment}
      />
    </div>

    {getApartmentDetails &&
    getApartmentDetails.loading &&
    !getApartmentDetails.success ? (
      <LoadingSpinner />
    ) : (
      <>
        <div className="md:flex items-start justify-center py-4 2xl:px-20 md:px-6 px-4">
          <Fragment>
            <div className="col-md-7">
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) =>
                    console.log(
                      `current index: ${current}, prev index: ${prev}`
                    ),
                }}
              >
                <div class="grid grid-cols-1 md:grid-cols-1">
                  <div class="d-flex">
                    <div>
                      <Image
                        width={700}
                        height={300}
                        class="rounded-lg"
                        src={apartment?.images}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Image.PreviewGroup>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-200 pb-6">
                <h1
                  className="
            lg:text-2xl
            text-xl
            font-semibold
            lg:leading-6
            leading-7
            text-gray-800
            mt-2
          "
                >
                  {apartment.name}
                </h1>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
                <Descriptions className="mt-3" layout="horizontal">
                  <Descriptions.Item
                    className="d-block py-0"
                    label={<a className="text-dark">Apartman ismi</a>}
                  >
                    <p className="d-inline-flex ">{apartment.name}</p>
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-block py-0"
                    label={<a className="text-dark">Address</a>}
                  >
                    <p className="d-inline-flex ">{apartment.address}</p>
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-block py-1"
                    label={<a className="text-dark">Enlem</a>}
                  >
                    {apartment.latitude}
                  </Descriptions.Item>

                  <Descriptions.Item
                    className="d-block py-1 "
                    label={<a className="text-dark">Boylam</a>}
                  >
                    {apartment.longitude}
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </Fragment>
        </div>

        <div className="container" style={{ height: "70vh" }}>
          <GoogleMapReact center={center} zoom={zoom}>
            {getApartmentDetails.loading ? (
              <LoadingSpinner />
            ) : (
              getApartmentDetails.success && (
                <ApartmentDetailMarker
                  apartment={apartment}
                  key={apartment.id}
                />
              )
            )}
          </GoogleMapReact>
        </div>
      </>
    )}
    </MainLayout>
  );
};

export default ApartmentDetailPage;
