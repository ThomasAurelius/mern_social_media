import React from 'react'
import { useState, useRef } from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const PostShare = () => {
   const [image, setImage] = useState(null)

   const imageRef = useRef()

   const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
         setImage({
            image: URL.createObjectURL(e.target.files[0])
         })
      }
   }

  return (
    <div className='PostShare'>
      <img src={ProfileImg} alt="Profile" />
      <div>
         <input type="text" placeholder="What's happening?" />
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
         <button className='button ps-button' >
            Share
         </button>
         <div style={{display: "none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
         </div>
      </div>
      {image && 
         <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />            
         </div>
      }
      </div>
      
    </div>
  )
}

export default PostShare