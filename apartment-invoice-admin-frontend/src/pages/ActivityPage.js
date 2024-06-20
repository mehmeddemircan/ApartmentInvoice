import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import AddActivityModal from '../components/Modal/Activity/AddActivityModal'
import ActivityCard from '../components/ListItem/ActivityCard'
import {useDispatch , useSelector} from 'react-redux'
import LoadingSpinner from '../components/Spinner/LoadingSpinner'
import EmptyResult from '../components/Results/EmptyResult'
import { AllActivity } from '../redux/actions/ActivityActions'
import { ADD_ACTIVITY_RESET, DELETE_ACTIVITY_RESET, UPDATE_ACTIVITY_RESET } from '../redux/constants/ActivityConstants'
import {message} from 'antd'
const ActivityPage = () => {

    const [isShowAddActivityModal, setIsShowAddActivityModal] = useState(false)

    const handleShowAddActivityModal = () => {
        setIsShowAddActivityModal(true)
    }

    const handleCloseAddActivityModal = () => {
        setIsShowAddActivityModal(false)
    }
    const getAllActivity = useSelector((state) => state.activity.getAllActivity)
    const deleteUpdateActivity = useSelector((state) => state.activity.deleteUpdateActivity)
    const addActivity = useSelector((state) => state.activity.addActivity)


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(AllActivity())
      if (addActivity.isAdded) {
        message.success(addActivity.message)
        dispatch({type : ADD_ACTIVITY_RESET})
      }
      if (deleteUpdateActivity.isDeleted) {
        message.success(deleteUpdateActivity.message)
        dispatch({type : DELETE_ACTIVITY_RESET})
      }
      if (deleteUpdateActivity.isUpdated) {
        message.success(deleteUpdateActivity.message)
        dispatch({type : UPDATE_ACTIVITY_RESET})
      }
    }, [dispatch,deleteUpdateActivity.isDeleted,deleteUpdateActivity.isUpdated,addActivity.isAdded])

  return (
    <MainLayout>
      <div className="w-full mx-auto px-4">
        <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-800 text-xl font-semibold">Tüm Etkinlikler</h4>
                <p className="mt-2 text-gray-600 text-base sm:text-sm">Burada tüm etkinlikleri görebilirsiniz ve etkinlikleri ekleyebilir silebilir güncelleyebilirsiniz </p>
            </div>
            <button
            onClick={handleShowAddActivityModal}
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
            Yeni Etkinlik
          </button>
          <AddActivityModal
          isShowAddActivityModal={isShowAddActivityModal}
            handleCloseAddActivityModal={handleCloseAddActivityModal}
          />
        </div>
        
      <hr />
      <div className="d-flex flex-wrap gap-4 justify-center align-center mt-5">
      {getAllActivity && getAllActivity.success ? 
            getAllActivity.activities.data.length === 0 ? (
              <EmptyResult />
            ) :(
            getAllActivity.activities.data.map((item) => (
              <ActivityCard
                key={item.id}
                item={item}
               
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
      </div>
    </div>
    </MainLayout>
  )
}

export default ActivityPage