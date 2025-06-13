import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info ?? {};
    const {channelTitle, title, thumbnails} = snippet ?? {};

  
  return (
    <div>
    <div className='w-72 m-2 rounded-lg'>
        <img className=' rounded-lg' alt='thumbnail' src={thumbnails?.high?.url}></img>
        <ul>
            <li className='font-bold my-1'>{title}</li>
            <li className='font-light text-sm'>{channelTitle}</li>
            <li className='font-light text-sm'>{statistics?.viewCount} views</li>
        </ul>
    </div>
    </div>
  )
}

export default VideoCard