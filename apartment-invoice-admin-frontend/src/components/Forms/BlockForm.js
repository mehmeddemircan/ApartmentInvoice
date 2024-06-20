import React, { Fragment } from 'react'

const BlockForm = () => {
  return (
   <Fragment>
     <div class="mb-6">
    <label
      for="large-input"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     Blok Adı
    </label>
    <input
      type="text"
      id="large-input"
      class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
   </Fragment>
  )
}

export default BlockForm