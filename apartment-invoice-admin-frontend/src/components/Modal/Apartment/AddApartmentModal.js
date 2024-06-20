import { Form,List, Modal, message ,Space,Select,Upload} from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import axios from 'axios'
import Resizer from "react-image-file-resizer";
import ImgCrop from "antd-img-crop";
import { toast } from "react-toastify";
import {
  AllApartment,
  CreateApartment,
} from "../../../redux/actions/ApartmentActions";
import {
  ADD_APARTMENT_RESET,
  DELETE_APARTMENT_RESET,
} from "../../../redux/constants/ApartmentConstants";
const {Option} = Select
const AddApartmentModal = ({
  lat,
  lng,
  showAddApartmentModal,
  handleCloseAddApartmentModal,
}) => {
  const getAllCity = useSelector((state) => state.city.getAllCity)
  const getAllApartment = useSelector(
    (state) => state.apartment.getAllApartment
  );
  const deleteUpdateApartment = useSelector(
    (state) => state.apartment.deleteUpdateApartment
  );
  const addApartment = useSelector((state) => state.apartment.addApartment);
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");
  const [cityId, setCityId] = useState(0)
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [image, setImage] = useState("");
    const [images, setImages] = useState("")
    const [imageLength, setImageLength] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setLatitude(lat.toFixed(6));
    setLongitude(lng.toFixed(6));
  }, [lat, lng]);

  const handleAddNewApartment = () => {
    dispatch(CreateApartment({ latitude, longitude, name, address,cityId ,images }));

    if (addApartment.isAdded) {
      handleCloseAddApartmentModal();
    }
  };

  useEffect(() => {
    setLatitude(latitude);
    setLongitude(longitude);
  }, [longitude, latitude]);
  const handleCityChange = (value) => {
setCityId(value)
  }

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


  const uploadProps = {
    beforeUpload: async (file) => {
      return new Promise(async (resolve, reject) => {
        try {
          // Resize the image
          const uri = await resizeImage(file);
  
          // Create FormData
          const formData = new FormData();
          formData.append('file', file);
  
          // Send the FormData to the server
          const response = await axios.post('https://localhost:7173/api/Cloudinaries/AddImage', formData);
  
          // Handle the server response
          setImages(response.data.url);
          setImageLength(1);
          message.success(`${file.name} file uploaded successfully.`);
          resolve(false); // prevent default antd upload behavior
        } catch (error) {
          console.error(`${file.name} file upload failed.`, error);
          reject(error);
        }
      });
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status === "done") {
        // Handle successful upload
      } else if (status === "error") {
        // Handle upload error
      }
    },
  };
  
  // Function to resize the image
  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });
  };
  return (
    <Fragment>
      <Modal
        centered
        open={showAddApartmentModal}
        
        onCancel={handleCloseAddApartmentModal}
        footer={[
          <div className="d-flex justify-end">
              <button
            type="button"
            className="rounded-pill block w-25 rounded-md bg-gray-500 text-white me-3"
            onClick={handleCloseAddApartmentModal}
          >
          İptal
          </button>
           <button
           type="button"
           className="rounded-pill block w-25 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           onClick={handleAddNewApartment}
         >
         Ekle
         </button>
          </div>
        ]}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">Yeni apartment </h4>
            <div>
              <label for="recipient-name" class="col-form-label">
                Apartman ismi
              </label>
              <input
                type="text"
                class="form-control "
                id="area-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
          onChange={handleCityChange}
        >
          {getAllCity.cities.data.map((city) => (
            <Option value={city.id}>{city.name}</Option>
          ))}
        </Select>
      </Space>
            <div>
              <label for="recipient-name" class="col-form-label">
                Apartman address
              </label>
              <input
                type="text"
                class="form-control "
                id="area-name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
            <label for="recipient-name" class="col-form-label">
                Apartman Foto
              </label>
            <Form.Item name="images" >
        <ImgCrop rotationSlider>
          <Upload
            {...uploadProps}
          
            defaultFileList={image ? [{ url: image, name: "image" }] : []}
            onPreview={onPreview}
            onRemove={() => {
              setImages("");
              setImageLength(0);
            }}
            listType="picture-card"
          >
            {imageLength === 0 && <CameraFilled style={{ fontSize: 30 }} />}
          </Upload>
        </ImgCrop>
      </Form.Item>
              </div>
            <div className="d-flex">
              <div className="me-4 col-5">
                <label for="recipient-name" class="col-form-label">
                  Latitude
                </label>
                <input
                  type="number"
                  class="form-control "
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div className="ms-4 col-5 ">
                <label for="recipient-name" class="col-form-label">
                  Longitude{" "}
                </label>
                <input
                  type="number"
                  class="form-control "
                  id="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <div
              className="my-4"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            ></div>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddApartmentModal;
