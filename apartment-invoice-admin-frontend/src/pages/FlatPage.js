import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FlatModal from "../components/Modal/Flat/FlatModal";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { AllFlatByBlock } from "../redux/actions/FlatActions";
const FlatPage = () => {

    let { blockNo } = useParams();
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(AllFlatByBlock(blockNo))
    }, [dispatch,blockNo])

    const [isShowFlatModal, setIsShowFlatModal] = useState(false)

    const handleShowFlatModal = () => {
        setIsShowFlatModal(true)
    }

    const handleCancelFlatModal =() => {
        setIsShowFlatModal(false)
    }
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
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default FlatPage;
