import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 y-2 m-2 mb-6 bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button