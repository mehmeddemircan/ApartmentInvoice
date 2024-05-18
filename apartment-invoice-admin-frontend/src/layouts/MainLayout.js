import React, { useState } from 'react'


import MainHeader from '../components/Header/MainHeader'
import MainFooter from '../components/Footer/MainFooter'
import ShowMapButton from '../components/floatbutton/ShowMapButton';
import MapComponent from '../components/map/MapComponent';

const MainLayout = (props) => {
  const [showMap, setShowMap] = useState(false);

  const handleToggleShowMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
   <>
   <MainHeader />
   {showMap ? (
        <>
          <MapComponent />
        </>
      ) : (
        <div className="bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">{props.children}</div>
      )}
      <ShowMapButton
        handleToggleShowMap={handleToggleShowMap}
        showMap={showMap}
      />
       
    
        <MainFooter />
 </> 
  )
}

export default MainLayout