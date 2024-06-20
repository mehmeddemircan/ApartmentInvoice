import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import {useDispatch, useSelector } from 'react-redux'
import { GetMyPosts } from '../redux/actions/UserAction'
import { useState } from 'react'
import PostItem from '../components/listıtem/PostItem'
import LoadingSpinner from '../components/spinner/LoadingSpinner'
import CustomPagination from '../components/pagination/CustomPagination'
import EmptyResult from '../components/results/EmptyResult'
const MyPostsPage = () => {
    const getMyPost = useSelector((state) => state.user.getMyPost)
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [userId, setUserId] = useState("")

    const [pageNumber, setPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    useEffect(() => {
     setUserId(auth.user.id)
    }, [auth.user.id,auth])
    useEffect(() => {
        dispatch(GetMyPosts(pageNumber,pageSize,userId))
    }, [dispatch,userId])


  return (
    <MainLayout>
        <h2 className='text-center fs-3'>Bütün Postlarım</h2>
        {getMyPost && getMyPost.success  ?  getMyPost.myPosts.data.length === 0 ? (
            <EmptyResult />
          )  :  getMyPost.myPosts.data.map((item) => (
      <PostItem item={item} />
     )) : <LoadingSpinner /> } 
         <CustomPagination
        onChange={(page) => setPageNumber(page)}
        current={pageNumber}
        defaultCurrent={1}
        pageSize={pageSize}
         total={getMyPost.success && getMyPost.myPosts.data.length}
      />
    </MainLayout>
  )
}

export default MyPostsPage