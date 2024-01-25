import { Form, Input, Upload ,Modal,message,DatePicker,Switch} from "antd";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import ImgCrop from "antd-img-crop";
import moment from "moment";
import {useDispatch, useSelector} from 'react-redux'
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import { AddActivity } from "../../../redux/actions/ActivityActions";
const AddActivityModal = ({isShowAddActivityModal,handleCloseAddActivityModal}) => {

    const addActivity = useSelector((state) => state.activity.addActivity)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [capacity, setCapacity] = useState(0)
    const [isActive, setIsActive] = useState(true)
    const [image, setImage] = useState("");
    const [images, setImages] = useState("")
    const [imageLength, setImageLength] = useState(0);
    const [imageFiles, setImageFiles] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
       if (addActivity.isAdded) {
        handleCloseAddActivityModal()
       }
    }, [addActivity.isAdded])

    const handleAddActivity = async  () => {
        
       dispatch(AddActivity({title,description,date,capacity,isActive,images}))
    }

  

// Function to convert an image file to base64

  const handleDateChange = (date, dateString) => {
    setDate(dateString);
  };
  const defaultDate = moment(date, "YYYY-MM-DD");
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
    <Modal
      title="Add Meal Modal"
      centered
      open={isShowAddActivityModal}
      onOk={handleAddActivity}
      onCancel={handleCloseAddActivityModal}
    >
      <Form
      className="mx-auto"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
    >
        {image}
      <Form.Item
        name="title"
        label="Title"
        className="mt-3"
        // rules={[
        //   {
        //     type: "name",
        //     message: "The input is not valid E-mail!",
        //   },
        //   {
        //     required: true,
        //     message: "Please input your E-mail!",
        //   },
        // ]}
      >
        <Input
          type="text"
          placeholder="type meal title..."
           value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
     
      <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Input.TextArea
            //   defaultValue={content}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              showCount
              maxLength={200}
              style={{ height: "150px" }}
            />
          </Form.Item>
          <Form.Item name="datePosted" label="DatePicker">
            <DatePicker
              defaultValue={date != "" ? defaultDate : moment()}
              format="YYYY-MM-DD"
              onChange={handleDateChange}
            />
          </Form.Item>
      <Form.Item
        name="stock"
        label="Kapasite"

        //  rules={[
        //    {
        //      required: true,
        //      message: "Missing quantity name",
        //    },
        //  ]}
      >
        <Input
          type="number"
        //   defaultValue={stock}
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        //   placeholder="capacity"
        />
      </Form.Item>
      <Form.Item   label="Aktif mi" valuePropName="checked">
          <Switch
          defaultChecked={isActive}
            checked={isActive}
           onChange={(checked) => setIsActive(checked)}  
          />
    </Form.Item>
       {imageLength}
      <Form.Item name="images" label="Thumbnail Image">
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
    </Form>
    </Modal>
  )
}

export default AddActivityModal