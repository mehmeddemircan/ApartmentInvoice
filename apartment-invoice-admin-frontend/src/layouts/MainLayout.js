import React from 'react'


import MainHeader from '../components/Header/MainHeader'
import MainFooter from '../components/Footer/MainFooter'

const MainLayout = (props) => {
  return (
   <>
   <MainHeader />
        <div className="bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        {props.children}  
        </div>
    
        <MainFooter />
 </> 
  )
}

export default MainLayout