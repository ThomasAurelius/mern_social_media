import React, { useEffect } from 'react'
import { getTimelinePosts } from '../../actions/PostAction'
import './Posts.css'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";


const Posts = () => {
  const dispatch = useDispatch()
    const params = useParams()
  const {user} = useSelector((state) => state.authReducer.authData);
  let {posts, loading} = useSelector((state) => state.postReducer);


  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [dispatch, user._id])

  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)

  return (
    <div className='Posts'>
    {loading ? <h1>Loading...</h1> : 
      posts.map((post, id) => (
        <Post key={id} data={post} />
      ))
    }
    </div>
  )
}

export default Posts