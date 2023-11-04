import React from 'react'

const GenericFormTitle = ({title,content}) => {
  return (
 
<div className="mx-auto max-w-2xl text-center mt-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        
         {content}
        </p>
      </div>
  )
}

export default GenericFormTitle