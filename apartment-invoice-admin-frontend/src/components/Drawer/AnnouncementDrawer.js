import React from 'react'
import {  Drawer } from 'antd';
const AnnouncementDrawer = ({handleCloseAnnouncementDrawer,isOpenAnnouncementDrawer}) => {
  return (

    <Drawer title="Basic Drawer" placement="right" onClose={handleCloseAnnouncementDrawer} open={isOpenAnnouncementDrawer}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
  )
}

export default AnnouncementDrawer