import React, { Fragment } from 'react'

const CommentForm = ({content,setContent}) => {


  return (
    <Fragment>
        <form class="">
        <div class="py-2 px-4 mb-4 border-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          
          <textarea
          defaultValue={content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="comment"
            rows="8"
            class="px-0 w-full  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
       
      </form>
    </Fragment>
  )
}

export default CommentForm