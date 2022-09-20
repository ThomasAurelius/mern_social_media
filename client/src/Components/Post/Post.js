import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { likePost }  from '../../api/PostsRequest'

import './Post.css'


const Post = ({data}) => {
  console.log("data"  + data)
  const {user} = useSelector((state) => state.authReducer.authData);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);


  const handleLike = () => {
    setLiked(!liked);
    likePost(data._id, user._id)
    liked? setLikes(likes - 1) : setLikes(likes + 1)
  }

  return (
    <div className='Post'>
      <img src={data.img ? process.env.REACT_APP_PUBLIC_FOLDER + data.img : ""} alt="" />

      <div className="postReact">
         <img src={liked?Like: NotLike} alt="Like Icon" style={{ cursor: "pointer" }} onClick={handleLike}/>
         <img src={Comment} alt="comment icon" />
         <img src={Share} alt="share icon" />
      </div>
      <span>{likes} likes</span>
      <div className="detail">
         <span><strong>{data.name}</strong></span>
         <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default Post