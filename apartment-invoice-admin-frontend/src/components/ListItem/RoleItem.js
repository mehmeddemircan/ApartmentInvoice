import React, { Fragment ,useEffect,useState } from 'react'
import { DeleteRole, UpdateRole } from '../../redux/actions/RoleActions'
import { useDispatch, useSelector } from "react-redux";
import EditRoleModal from '../Modal/Role/EditRoleModal';
const RoleItem = ({item}) => {

    const dispatch = useDispatch()

    const handleDeleteRole = (roleId) => {
        dispatch(DeleteRole(roleId))
    }
    const deleteUpdateRole = useSelector((state) => state.role.deleteUpdateRole)
    useEffect(() => {
        if (deleteUpdateRole.isUpdated) {
            handleCancelEditRoleModal()
        }
  }, [deleteUpdateRole.isUpdated])
  const [id, setId] = useState(item.id)
    const [name, setName] = useState(item.name)

    const handleUpdateRole = () => {
        dispatch(UpdateRole({id,name}))
    }

    const [isShowEditRoleModal, setIsShowEditRoleModal] = useState(false)

    const handleShowEditRoleModal = () => {
        setIsShowEditRoleModal(true)
    }

    const handleCancelEditRoleModal = () => {
        setIsShowEditRoleModal(false)
    }

  return (
    <Fragment>
    <li key={item.id} className="py-5 flex items-center justify-between">
           <div className="flex gap-3">
               
               <div>
                   <span className="block text-sm text-gray-700 font-semibold">{item.name} {item.id}</span>
                 
               </div>
           </div>
           <div>
           <a  href={`/blocks/${item.id}/add-new-flat`} className=" me-2 text-sm border rounded-full px-3 py-2 duration-150 bg-black text-white ">Detaylar</a>
           <a onClick={handleShowEditRoleModal} href="javascript:void(0)" className=" text-sm border rounded-lg px-3 py-2 duration-150 bg-blue-600 text-white ">Manage</a>
           <EditRoleModal
           key={item.id} 
               item={item}
               isShowEditRoleModal={isShowEditRoleModal}
               handleCancelEditRoleModal={handleCancelEditRoleModal}
               handleUpdateRole={handleUpdateRole}
               name={name}
               setName={setName}
           />
         
         
           <a onClick={() => handleDeleteRole(item.id)} href="javascript:void(0)" className=" text-sm border rounded-lg px-3 py-2 duration-150 bg-red-600 text-white ms-3">Delete</a>
           </div>
       </li>
</Fragment>
  )
}

export default RoleItem