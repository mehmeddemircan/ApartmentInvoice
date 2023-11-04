import React from 'react'
import MainLayout from '../layouts/MainLayout'
import BillTable from '../components/table/BillTable'
import GeneralBreadCrumb from '../components/breadcrumb/GeneralBreadCrumb'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
const BillPage = () => {
  return (
   <MainLayout>
    <GeneralBreadCrumb 
        items={[
            {
              href: '',
              title: <HomeOutlined />,
            },
            {
              href: '',
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: 'Application',
            },
          ]}
    />
    <BillTable />
   </MainLayout>
  )
}

export default BillPage