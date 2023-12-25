import React, {useEffect,useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import UserItem from '../components/ListItem/UserItem'
import CustomPagination from '../components/Pagination/CustomPagination'
import UserPopoverContent from '../components/PopoverContent/UserPopoverContent'
import {Popover} from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { AllUser } from '../redux/actions/UserActions'
import LoadingSpinner from '../components/Spinner/LoadingSpinner'
import { ADD_ROLE_TO_USER_RESET, DELETE_USER_RESET } from '../redux/constants/UserConstants'
import {message} from 'antd'
import { AllRole } from '../redux/actions/RoleActions'

const UserPage = () => {

    const getAllUser = useSelector((state) => state.user.getAllUser)
    const addRoleToUser = useSelector((state) => state.user.addRoleToUser)
    const deleteUpdateUser = useSelector((state) => state.user.deleteUpdateUser)
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(4)
    useEffect(() => {
        dispatch(AllUser(pageNumber,pageSize))
        if (deleteUpdateUser.isDeleted) {
            message.success(deleteUpdateUser.message)
            dispatch({type : DELETE_USER_RESET})
        }
        if (addRoleToUser.isAdded) {
            message.success("Başarıyla yetkilendirme verilmiştir")
            dispatch({type : ADD_ROLE_TO_USER_RESET})
        }
    }, [dispatch,pageNumber,pageSize,deleteUpdateUser.isDeleted,addRoleToUser.isAdded])

    useEffect(() => {
      dispatch(AllRole())
    }, [dispatch])
  return (
    <MainLayout>

<div className="w-full mx-auto px-4">
        <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-800 text-xl font-semibold">Tüm Kullanıcılar</h4>
                <p className="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
            </div>
            <Popover placement='bottom' trigger="click" content={<UserPopoverContent />} title="Title">
            <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
            <i class="fa-solid fa-filter"></i>
                Filtrele
            </a>
            </Popover>
        </div>
        <ul className="mt-12 divide-y">
        {getAllUser && getAllUser.success ? (
            getAllUser.users.data.map((item,idx) => (
              <UserItem
                idx={idx}
                item={item}
                
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ul>
    </div>
            
            <CustomPagination />
            
    </MainLayout>
  )
}

export default UserPage




