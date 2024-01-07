import React from 'react'
import AnnouncementForm from '../../Forms/AnnouncementForm'
import {Modal,Button} from 'antd'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { UpdateAnnouncement } from '../../../redux/actions/AnnouncementActions'
const EditAnnoucementModal = ({item,isShowEditAnnouncementModal,handleCloseEditAnnouncementModal}) => {

        const dispatch = useDispatch()
        const [id, setId] = useState(item.id)
    const [userId, setUserId] = useState(item.userId)
    const [title, setTitle] = useState(item.title)
    const [content, setContent] = useState(item.content)
    const [datePosted, setDatePosted] = useState(item.datePosted)

  
    const handleUpdateAnnouncement = () => {
        dispatch(UpdateAnnouncement({id,userId,title,content,datePosted}))
  }
  return (
    <Modal
    centered
    title="Duyuruyu güncelle"
    open={isShowEditAnnouncementModal}
    onCancel={handleCloseEditAnnouncementModal}
    footer={[
      <Button key="back" onClick={handleCloseEditAnnouncementModal}>
        İptal
      </Button>,
      <Button
        key="submit"
        className="btn btn-outline-primary"
        onClick={handleUpdateAnnouncement}
      >
        Güncelle
      </Button>,
    ]}
  >
    <AnnouncementForm  userId={userId} setContent={setContent} setTitle={setTitle} setDatePosted={setDatePosted} datePosted={datePosted} content={content} title={title} isShowEditAnnouncementModal={isShowEditAnnouncementModal} />
  </Modal>
  )
}

export default EditAnnoucementModal