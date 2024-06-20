import React, { useEffect ,useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import PostForm from '../components/forms/PostForm'
import { AllPost, AllPostWithPage, SendPost } from '../redux/actions/PostAction'
import {useDispatch,useSelector} from 'react-redux'
import LoadingSpinner from '../components/spinner/LoadingSpinner'
import {message } from 'antd'
import { DELETE_POST_RESET, SEND_POST_RESET, UPDATE_POST_RESET } from '../redux/constants/PostConstants'
import PostItem from '../components/listıtem/PostItem'
import CustomPagination from '../components/pagination/CustomPagination'

const PostsPage = () => {
  const dispatch = useDispatch()
  const getAllPost = useSelector((state) => state.post.getAllPost)
  const getAllPostWithPage = useSelector((state) => state.post.getAllPostWithPage)
  const sendPost = useSelector((state) => state.post.sendPost)
  const postUpdateDelete = useSelector((state) => state.post.postUpdateDelete)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  useEffect(() => {
   dispatch(AllPost())
  }, [dispatch,sendPost.isAdded,postUpdateDelete.isDeleted])
  useEffect(() => {
    dispatch(AllPostWithPage(pageNumber,pageSize))
    if (sendPost.isAdded) {
      message.success(sendPost.message);
      dispatch({ type: SEND_POST_RESET });
    }
    if (postUpdateDelete.isUpdated) {
      message.success(postUpdateDelete.message);
      dispatch({ type: UPDATE_POST_RESET });
    }
    if (postUpdateDelete.isDeleted) {
      message.success(postUpdateDelete.message);
      dispatch({ type: DELETE_POST_RESET });
    }
  }, [dispatch,pageNumber,pageSize,sendPost.isAdded,postUpdateDelete.isUpdated,postUpdateDelete.isDeleted])
  return (
    <MainLayout>
     <PostForm />
    
    {getAllPostWithPage && getAllPostWithPage.success  ? getAllPostWithPage.posts.data.map((item) => (
      <PostItem item={item} />
     )) : <LoadingSpinner /> } 
         <CustomPagination
        onChange={(page) => setPageNumber(page)}
        current={pageNumber}
        defaultCurrent={1}
        pageSize={pageSize}
         total={getAllPost.success && getAllPost.posts.data.length}
      />
    </MainLayout>
  )
}

export default PostsPage
