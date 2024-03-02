import React, { Fragment } from 'react'

const JoinButton = ({buttonName,className ,onClick}) => {
  return (
    <Fragment>
        <button  type="button" class={className} onClick={onClick} >{buttonName}  </button>
    </Fragment>
  )
}

export default JoinButton