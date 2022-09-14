import React from 'react'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'

import './Post.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'

const Post = ({post}) => {
  return (
    <div className='Post'>
      <img src={post.img} alt="" />

      <div className="postReact">
         <img src={post.liked?Like: NotLike} alt="Like Icon" />
         <img src={Comment} alt="comment icon" />
         <img src={Share} alt="share icon" />
      </div>
      <span>{post.likes} likes</span>
      <div className="detail">
         <span><strong>{post.name}</strong></span>
         <span>{post.desc}</span>
      </div>
    </div>
  )
}

export default Post