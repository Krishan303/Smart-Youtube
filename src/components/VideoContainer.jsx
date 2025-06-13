import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utility/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const selector = useSelector((state) => state?.app?.searchValue);

  useEffect(() => {
    getVideos();
  },[]
)

// useEffect(() => {
//   // console.log(selector);
  
// },[selector])

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_API);
    const json = await data?.json();
    console.log(json.items);
    if(json.items){
    setVideos(json?.items);
    }
    // var videoName = json?.items?.snippet?.title
    // console.log(videoName)
  }
  return (
    <>
    {selector.length < 3 ? (
    <div className='flex flex-wrap justify-evenly'>
      {videos.map((video) => (
         <Link className='' to={"/watch?v="+ video?.id}><VideoCard info = {video}/></Link>
      ))}
    </div>
    )
    :
    <div>
      {videos
      .filter((video) => video?.snippet?.title?.toLowerCase().includes(selector.toLowerCase()))
       .map((video) =>  
         (<Link className='' to={"/watch?v="+ video?.id}><VideoCard info = {video}/></Link>)
      )}
    </div>
  }
  </>
  )
}

export default VideoContainer