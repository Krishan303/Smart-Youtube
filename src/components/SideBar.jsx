import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const toggleValue = useSelector((state) => state?.app?.isMenuOpen)
    const isWatchTrue = useSelector((state) => state?.app?.isWatchPage)
    if(isWatchTrue) return null; 
  return (
    <div>
        {toggleValue ?
        (
        <ul className='m-5'>
            <Link to={'/'}>
            <li>
                <img src='https://cdn-icons-png.flaticon.com/128/25/25694.png' alt="home-icon" className='h-8 m-2'></img>
                <span>Home</span>
            </li>
            </Link>
            <li>
                <img src='https://img.icons8.com/?size=512&id=ot8QhAKun4rZ&format=png'alt='shorts-icon' className='h-8 m-2'></img>
                <span>Shorts</span>
            </li>
            <li>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4tIWRcb8bnO0QltGJZ5zDvmRZbFhX6ByMg&s' alt='subscription-icon' className='h-8 m-2'></img>
                <span>Subscriptions</span>
            </li>
        </ul>
        )
        :
        (
        <div className='shadow-md h-[100vh]'>
        <ul className='my-10 mx-5'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        <ul className='my-10 mx-5'>
            <li>History</li>
            <li>PlayList</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
        </ul>
        </div>
        )}
    </div>
  )
}

export default SideBar