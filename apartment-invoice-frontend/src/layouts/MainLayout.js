import React from 'react'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'
import BackTopButton from '../components/floatbutton/BackTopButton'

const MainLayout = (props) => {
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