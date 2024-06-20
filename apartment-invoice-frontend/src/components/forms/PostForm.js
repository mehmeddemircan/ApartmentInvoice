import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { SendPost } from '../../redux/actions/PostAction'
const PostForm = () => {
  const auth = useSelector((state) => state.auth)
  const [userId, setUserId] = useState(auth.user.id)
  const [content, setContent] = useState("")
  const sendPost = useSelector((state) => state.post.sendPost)
  const dispatch = useDispatch()
  useEffect(() => {
    setUserId(auth.user.id)
  }, [auth])
  const handleSendPost = (e) => {
    e.preventDefault()
    dispatch(SendPost({userId,content}))
    if (!sendPost.success) {
      setContent("")
    }
  }
  return (
    <form class="">
    <label for="comment" className='mb-3'>
        Your Post 
      </label>
    <div class="py-2 px-4 mb-4 border-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
     
      <textarea
         value={content}
         onChange={(e) => setContent(e.target.value)}
        id="comment"
        rows="8"
        class="px-0 w-full  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
        placeholder="Write a comment..."
        required
      ></textarea>
    </div>
    <div className='d-flex justify-end'>
    <button
      type="submit"
      class="inline-flex mb-2 items-center py-2.5 px-4 text-xs font-medium text-center bg-dark text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      onClick={handleSendPost}
    >
      Post comment
    </button>
    </div>
  </form>
  )
}

export default PostForm