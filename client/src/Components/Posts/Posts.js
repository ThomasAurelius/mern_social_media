import React from 'react'
import './Posts.css'
import Post from '../Post/Post'

import { PostsData } from '../../Data/PostsData'

const Posts = () => {
  return (
    <div className='Posts'>
      {PostsData.map((post, id) => (
        <Post key={id} id={id} post={post} />
      ))}
    
    </div>
  )
}

export default Posts