import React from 'react'
import { Breadcrumb } from 'antd';
const GeneralBreadCrumb = ({items}) => {
  return (
    <Breadcrumb
    className='px-3 mb-5'
    items={items}
  />
  )
}

export default GeneralBreadCrumb


