import React, { Fragment } from 'react'
import JoinButton from '../button/JoinButton'


const ActivityDescriptionSection = () => {

 
  return (
   <Fragment>
     <div className="border-b border-gray-200 pb-6">
          
              <h1
                className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
              >
                Piknik Etkinliği
              </h1>
              <div className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='mt-4'>
             <JoinButton buttonName="Katıl" />
            </div>
            </div>
           
   </Fragment>
  )
}

export default ActivityDescriptionSection