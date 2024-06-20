import React, { Fragment, useEffect, useState } from 'react'
import EditBlockModal from '../Modal/Block/EditBlockModal'
import {useDispatch, useSelector} from 'react-redux'
import { DeleteBlock, UpdateBlock } from '../../redux/actions/BlockActions'
const BlockItem = ({item}) => {
   const dispatch = useDispatch()
    const deleteUpdateBlock = useSelector((state) => state.block.deleteUpdateBlock)
    const handleDeleteBlock = (blockId) => {
        dispatch(DeleteBlock(blockId))
      }
      const handleUpdateBlock = () => {
        dispatch(UpdateBlock({id,name}))
      }

      useEffect(() => {
            if (deleteUpdateBlock.isUpdated) {
                handleCancelEditBlockModal()
            }
      }, [deleteUpdateBlock.isUpdated])
      const [isShowEditBlockModal, setIsShowEditBlockModal] = useState(false);
      const [id, setId] = useState(item.id)
      const [name, setName] = useState(item.name)
      const handleShowEditBlockModal = () => {
        setIsShowEditBlockModal(true);
      };
    
      const handleCancelEditBlockModal = () => {
        setIsShowEditBlockModal(false);
      };
    
  return (
    <Fragment>
         <li key={item.id} className="py-5 flex items-center justify-between">
                <div className="flex gap-3">
                    
                    <div>
                        <span className="block text-sm text-gray-700 font-semibold">{item.name}</span>
                      
                    </div>
                </div>
                <div>
                <a  href={`/blocks/${item.id}/add-new-flat`} className=" me-2 text-sm border rounded-full px-3 py-2 duration-150 bg-black text-white ">Detaylar</a>
                <a onClick={handleShowEditBlockModal} href="javascript:void(0)" className=" text-sm border rounded-lg px-3 py-2 duration-150 bg-blue-600 text-white ">Manage</a>
                <EditBlockModal
                key={item.id} 
                    item={item}
                    isShowEditBlockModal={isShowEditBlockModal}
                    handleCancelEditBlockModal={handleCancelEditBlockModal}
                    handleUpdateBlock={handleUpdateBlock}
                    name={name}
                    setName={setName}
                />
                
                <a onClick={() => handleDeleteBlock(item.id)}  href="javascript:void(0)" className=" text-sm border rounded-lg px-3 py-2 duration-150 bg-red-600 text-white ms-3">Delete</a>
                </div>
            </li>
    </Fragment>
  )
}

export default BlockItem