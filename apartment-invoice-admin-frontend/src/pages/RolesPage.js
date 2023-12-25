import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useDispatch, useSelector } from "react-redux";
import { AllRole, CreateRole } from '../redux/actions/RoleActions';
import RoleModal from '../components/Modal/Role/RoleModal';
import { ADD_ROLE_RESET, DELETE_ROLE_RESET, UPDATE_ROLE_RESET } from '../redux/constants/RoleConstants';
import {message} from 'antd'
import RoleItem from '../components/ListItem/RoleItem';
import LoadingSpinner from '../components/Spinner/LoadingSpinner';
import EmptyResult from '../components/Results/EmptyResult';
const RolesPage = () => {
    const getAllRole  = useSelector((state) => state.role.getAllRole)
    const dispatch = useDispatch()
    const [isShowRoleModal, setIsShowRoleModal] = useState(false)
    const addRole = useSelector((state)=> state.role.addRole)
    const deleteUpdateRole = useSelector((state) => state.role.deleteUpdateRole)
    const handleShowRoleModal = () => {
        setIsShowRoleModal(true)
    }

    const handleCancelShowRoleModal = () => {
        setIsShowRoleModal(false)
    }

    useEffect(() => {
      dispatch(AllRole())
      if (addRole.isAdded) {
        message.success(addRole.message)
        handleCancelShowRoleModal()
        dispatch({type : ADD_ROLE_RESET})
      }
      if (deleteUpdateRole.isUpdated) {
        message.success(deleteUpdateRole.message)
        dispatch({type:UPDATE_ROLE_RESET})
      }
      if (deleteUpdateRole.isDeleted) {
        message.success(deleteUpdateRole.message)
        dispatch({type : DELETE_ROLE_RESET}) 
      }
    }, [dispatch,addRole.isAdded,deleteUpdateRole.isDeleted,deleteUpdateRole.isUpdated])

    const [name, setName] = useState("")
    const handleAddRole = () => {
        dispatch(CreateRole({name}))
    }

    

  return (
    <MainLayout>

<div className="w-full mx-auto px-4">
        <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-800 text-xl font-semibold">Tüm Kullanıcılar</h4>
                <p className="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
            </div>
            <button
            onClick={handleShowRoleModal}
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
            Yeni Rol
          </button>
          <RoleModal 
            isShowRoleModal={isShowRoleModal}
            handleCancelShowRoleModal={handleCancelShowRoleModal}
            handleAddRole={handleAddRole}
            name={name}
            setName={setName}
          />
        </div>
        <ul className="mt-12 divide-y">
        {getAllRole && getAllRole.success ?  (
            getAllRole.roles.data.length === 0 ? (
              <EmptyResult />
            ) : (
            getAllRole.roles.data.map((item) => (
              <RoleItem
                key={item.id}
                item={item}
               
              />
            ))
          )
          ) : (
            <LoadingSpinner />
          )}  
        </ul>
    </div>


    </MainLayout>
  )
}

export default RolesPage