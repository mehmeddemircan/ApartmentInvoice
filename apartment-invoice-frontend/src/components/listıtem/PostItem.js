import React, { useEffect, useState } from 'react'
import GenericPopover from '../popover/GenericPopover'
import CommentSettingsContent from '../popover/content/CommentSettingsContent'
import {useDispatch,useSelector} from 'react-redux'

import { DeletePost, UpdatePost } from '../../redux/actions/PostAction'
import PostSettingsContent from '../popover/content/PostSettingsContent'
const PostItem = ({item}) => {
    const auth = useSelector((state) => state.auth)
    const postUpdateDelete = useSelector((state) => state.post.postUpdateDelete)
    const [showUpdatePost, setShowUpdatePost] = useState(false)
    const [id, setId] = useState(item.id)
    const [userId, setUserId] = useState(auth.user.id)
    const [content, setContent] = useState(`${item.content}`)

    useEffect(() => {
setUserId(auth.user.id)
setId(item.id)
if (postUpdateDelete.isUpdated) {
    setShowUpdatePost(false)
}
    }, [auth,postUpdateDelete.isUpdated])
    const dispatch = useDispatch(); 
    const handleDeletePost = (postId) => {
        dispatch(DeletePost(postId))
    }

    const handleShowUpdatePost = () => {
        setShowUpdatePost((prev) => !prev)
    }

    const handleUpdatePost = () => {
        dispatch(UpdatePost({id,userId,content}))
    }

  return (
    <article class="p-6 mb-6 text-base border-t bg-white rounded-lg dark:bg-gray-900">
    <footer class="flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
         
          {item.firstName} {item.lastName}
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          <time pubdate datetime="2022-02-08" title="February 8th, 2022">
            Feb. 8, 2022
          </time>
        </p>
      </div>

      <div className="d-inline-flex justify-center gap-x-3">
      {auth && auth.user.id == item.userId && (
        <GenericPopover
          content={
            <PostSettingsContent
              item={item}
              handleDeletePost={handleDeletePost}
              showUpdatePost={showUpdatePost}
              handleShowUpdatePost={handleShowUpdatePost}
            />
          }
        >
          <button
            id="dropdownComment1Button"
            class="inline-flex items-center text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <span class="sr-only">Post settings</span>
          </button>
              
         
        </GenericPopover>
     
      )}
        
      </div>
    </footer>
   {showUpdatePost ? <div class="py-2 px-4 mb-4 border-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
     
     <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
       id="comment"
       rows="8"
       class="px-0 w-full  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
       placeholder="Write a comment..."
       required
     ></textarea>
   </div> :  <p class="text-gray-500 dark:text-gray-400">{item.content}</p>}
 
   <div className='d-flex justify-end align-items-center'>
   {showUpdatePost ? <button
      type="submit"
      class="inline-flex  items-center py-2.5 px-4 text-xs font-medium text-center bg-dark text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      onClick={handleUpdatePost}
    >
     Güncelle 
    </button>: null}
   </div>
  </article>
 
  )
}

export default PostItem