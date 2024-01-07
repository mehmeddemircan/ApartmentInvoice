import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FlatModal from "../components/Modal/Flat/FlatModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllFlatByBlock, CreateFlat } from "../redux/actions/FlatActions";
import FlatItem from "../components/ListItem/FlatItem";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import EmptyResult from "../components/Results/EmptyResult";
import { message } from "antd";
import {
  ADD_FLAT_RESET,
  DELETE_FLAT_RESET,
  UPDATE_FLAT_RESET,
} from "../redux/constants/FlatConstants";
const FlatPage = () => {
  const getAllFlat = useSelector((state) => state.flat.getAllFlat);
  const deleteUpdateFlat = useSelector((state) => state.flat.deleteUpdateFlat);
  const addFlat = useSelector((state) => state.flat.addFlat);
  let { blockNo } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllFlatByBlock(blockNo));
  }, [dispatch, blockNo, addFlat.isAdded, deleteUpdateFlat.isDeleted]);
  useEffect(() => {
    if (addFlat.isAdded) {
      message.success(addFlat.message);
      handleCancelFlatModal();
      dispatch({ type: ADD_FLAT_RESET });
    }
    if (deleteUpdateFlat.isDeleted) {
      message.success(deleteUpdateFlat.message);
      dispatch({ type: DELETE_FLAT_RESET });
    }

    if (deleteUpdateFlat.isUpdated) {
      message.success(deleteUpdateFlat.message);

      dispatch({ type: UPDATE_FLAT_RESET });
    }
  }, [
    dispatch,
    addFlat.isAdded,
    deleteUpdateFlat.isDeleted,
    deleteUpdateFlat.isUpdated,
  ]);

  const handleAddFlat = () => {
    dispatch(CreateFlat({ flatNo, isEmpty, numberOfRooms, floor, blockId }));
  };
  const [isShowFlatModal, setIsShowFlatModal] = useState(false);

  const handleShowFlatModal = () => {
    setIsShowFlatModal(true);
  };

  const handleCancelFlatModal = () => {
    setIsShowFlatModal(false);
  };

  const [blockId, setBlockId] = useState(blockNo);
  const [flatNo, setFlatNo] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [floor, setFloor] = useState("");

  const handleChangeNumberOfRooms = (value) => {
    setNumberOfRooms(value);
    // Do something with the selected value
  };

  const handleChangeFloor = (value) => {
    setFloor(value);
  };
  const handleChangeFlatNo = (value) => {
    setFlatNo(value);
  };
  return (
    <MainLayout>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2>Daireler </h2>
        </div>
        <div>
          <button
            href="javascript:void(0)"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
            onClick={handleShowFlatModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Yeni Daire
          </button>
          <FlatModal
            isShowFlatModal={isShowFlatModal}
            handleCancelFlatModal={handleCancelFlatModal}
            handleAddFlat={handleAddFlat}
            flatNo={flatNo}
            setFlatNo={setFlatNo}
            isEmpty={isEmpty}
            setIsEmpty={setIsEmpty}
            floor={floor}
            setFloor={setFloor}
            numberOfRooms={numberOfRooms}
            setNumberOfRooms={setNumberOfRooms}
            handleChangeFloor={handleChangeFloor}
            handleChangeFlatNo={handleChangeFlatNo}
            handleChangeNumberOfRooms={handleChangeNumberOfRooms}
          />
        </div>
      </div>
      <div>
        {getAllFlat && getAllFlat.success ? (
          getAllFlat.flats.data.length === 0 ? (
            <EmptyResult />
          ) : (
            <div className="mt-12 flex justify-between items-center gap-3 flex-wrap">
              {getAllFlat.flats.data.map((item) => (
                <FlatItem key={item.id} item={item} />
              ))}
            </div>
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </MainLayout>
  );
};

export default FlatPage;
