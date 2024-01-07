import React, { useEffect } from 'react'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'
import BackTopButton from '../components/floatbutton/BackTopButton'
import { AllAnnouncement } from '../redux/actions/AnnouncementAction'
import {useDispatch} from 'react-redux'
const MainLayout = (props) => {

  const dispatch = useDispatch() ; 

  useEffect(() => {
    dispatch(AllAnnouncement())
  }, [dispatch])

  return (
   <>
   <MainHeader />
        <div className="bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        {props.children}  
        </div>
        <BackTopButton />
        <MainFooter />
 </> 
  )
}

export default MainLayout