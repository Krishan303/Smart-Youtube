import React from 'react'

const Comment = ({data}) => {
    const {name, comment} = data;
  return (
    <div className='flex'>
        <img className='w-10 h-10'src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user-img'></img>
        <div className='mx-2'>
        <span className='font-bold'>{name}</span>
        <p>{comment}</p>
        </div>
    </div>
  )
}

export default Comment