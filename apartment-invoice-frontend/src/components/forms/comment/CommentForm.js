import React, { Fragment } from 'react'

const CommentForm = ({text,setText}) => {
  return (
    <Fragment>
        <form class="">
        <div class="py-2 px-4 mb-4 border-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" class="sr-only">
            Your comment
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="comment"
            rows="8"
            class="px-0 w-full  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
    </Fragment>
  )
}

export default CommentForm