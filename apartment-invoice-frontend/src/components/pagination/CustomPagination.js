import { Pagination } from 'antd';
import React from 'react'

const CustomPagination = ({ onChange, current, total, pageSize }) => {
  return (
    <div className='container mx-auto'>
        <div className='d-flex flex-row justify-content-end mb-4 mt-2'>
        <Pagination
         onChange={onChange}
        defaultCurrent={1}
        current={current}
        total={total}
        pageSize={pageSize}
      />
    </div>
    </div>
   
  )
}

export default CustomPagination