import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import BlockForm from "../components/Forms/BlockForm";
import BlockModal from "../components/Modal/Block/BlockModal";
import { AllBlock, CreateBlock, DeleteBlock } from "../redux/actions/BlockActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import BlockItem from "../components/ListItem/BlockItem";
import { message } from "antd";
import { ADD_BLOCK_RESET, DELETE_BLOCK_RESET, UPDATE_BLOCK_RESET } from "../redux/constants/BlockConstants";
const BlockPage = () => {
  const dispatch = useDispatch();
  const getAllBlock = useSelector((state) => state.block.getAllBlock);
  const addBlock = useSelector((state) => state.block.addBlock);
  const deleteUpdateBlock = useSelector((state) => state.block.deleteUpdateBlock);
  useEffect(() => {
    dispatch(AllBlock());
    if (addBlock.isAdded) {
      message.success(addBlock.message);
      handleCancelBlockModal();
      dispatch({ type: ADD_BLOCK_RESET });
    }
    if (deleteUpdateBlock.isDeleted) {
      message.success(deleteUpdateBlock.message);
      dispatch({ type: DELETE_BLOCK_RESET });
    }
    if (deleteUpdateBlock.isUpdated) {
      message.success(deleteUpdateBlock.message);
      dispatch({ type: UPDATE_BLOCK_RESET });
    }
  }, [dispatch, addBlock.isAdded,deleteUpdateBlock.isDeleted,deleteUpdateBlock.isUpdated]);

  const [isShowBlockModal, setIsShowBlockModal] = useState(false);

  const handleShowBlockModal = () => {
    setIsShowBlockModal(true);
  };

  const handleCancelBlockModal = () => {
    setIsShowBlockModal(false);
  };

  const [name, setName] = useState("");
  const handleAddBlock = () => {
    dispatch(CreateBlock({ name }));
  };

  return (
    <MainLayout>
      <div className="max-w-8xl mx-auto px-2">
        <div className="items-start justify-between sm:flex">
          <div>
            <h4 className="text-gray-800 text-xl font-semibold">Bloklar</h4>
            <p className="mt-2 text-gray-600 text-base sm:text-sm">
              Give your team members access to manage the system.
            </p>
          </div>
          <button
            onClick={handleShowBlockModal}
            href="javascript:void(0)"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
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
            Yeni Block
          </button>
          <BlockModal
            isShowBlockModal={isShowBlockModal}
            handleCancelBlockModal={handleCancelBlockModal}
            handleAddBlock={handleAddBlock}
            name={name}
            setName={setName}
          />
        </div>
        <ul className="mt-12 divide-y">
          {getAllBlock && getAllBlock.success ? (
            getAllBlock.blocks.data.map((item) => (
              <BlockItem
                key={item.id}
                item={item}
               
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ul>
      </div>
    </MainLayout>
  );
};

export default BlockPage;
