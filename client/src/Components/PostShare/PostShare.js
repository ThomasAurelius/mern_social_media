import React from 'react'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { uploadImage } from '../../actions/UploadAction.js'
import { uploadPost } from '../../actions/UploadAction.js'

const PostShare = () => {
   const [image, setImage] = useState(null)
   const dispatch = useDispatch()
   const imageRef = useRef()
   const desc = useRef()
   const {user} = useSelector((state) => state.authReducer.authData);
   const loading = useSelector((state) => state.postReducer.loading);

   const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0]
         setImage(img)
      }
   }

   const reset = () => {
      setImage(null)
      imageRef.current.value = null
      desc.current.value = null
   }

   const handleSubmit = (e) => {
      
      e.preventDefault()
      const newPost = {
         userId: user._id,
         desc: desc.current.value,
      }
         if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName
            try {
               dispatch(uploadImage(data))
            } catch (err) {
               console.log(err)
            }
         }
         dispatch(uploadPost(newPost))
         reset()
   }

  return (
    <div className='PostShare'>
      <img src={ProfileImg} alt="Profile" />
      <div className='inputShare'>
         <input type="text" ref= {desc} required placeholder="What's happening?" />
         <div className='postOptions'>
            <div className="options" style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
            >
               <UilScenery />
               Photo
            </div>
            <div className="options" style={{ color: "var(--video)" }}>
               <UilPlayCircle />
               Video
            </div>
            <div className="options" style={{ color: "var(--location)" }}>
               <UilLocationPoint />
               Location
            </div>
            <div className="options" style={{ color: "var(--schedule)" }}>
               <UilSchedule />
               Schedule
            </div>
             
               <>
            <button className='button ps-button' onClick={handleSubmit}
            disabled={loading}
            >
               {loading ? "Uploading" : "Share"}
            </button>
            </>
            <div style={{display: "none"}}>
               <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
            </div>
         </div>
      {image && 
         <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />            
         </div>
      }
      </div>
      
    </div>
  )
}

export default PostShare