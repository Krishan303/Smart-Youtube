import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Cricket", "Songs", "Dance", "Volleyball", "Books", "Soccer", "React Router", "Finals", "Indian Pop Music"]
  return (
    <div className='flex'>
      {list.map((button ,idx) => (
        <Button key={idx} name={button}/>
      ))}
    </div>
  )
}

export default ButtonList