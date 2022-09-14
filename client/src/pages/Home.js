import React from 'react'
import Profile from '../Components/Profile/Profile'
import './Home.css'
import PostSide from '../Components/PostSide/PostSide'
import RightSide from '../Components/RightSide/RightSide'

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <PostSide />
      <RightSide />
    
    </div>
  )
}

export default Home