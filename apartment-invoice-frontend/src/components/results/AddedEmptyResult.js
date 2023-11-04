import { Empty } from 'antd'
import React, { Fragment } from 'react'


const AddedEmptyResult = ({title,content,children}) => {


  return (
   <Fragment>
     <section class="py-4 bg-neutral-50 overflow-hidden">
     <Empty className='mb-3' />
   
    <div class="container px-4 mx-auto">
       
      <div class="max-w-md mx-auto text-center">
        <h2 class="font-heading mb-3 text-2xl font-semibold">{title}</h2>
        <p class="mb-7 text-neutral-500">{content}</p>
      
          {children}
      </div>
    </div>
  </section>
   </Fragment>
  )
}

export default AddedEmptyResult