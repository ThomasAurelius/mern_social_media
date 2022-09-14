import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div className='RightSide'>
      <div className="navIcons">
         <img src={Home} alt="Home icon" />
         <UilSetting />
         <img src={Noti} alt="Notification icon" />
         <img src={Comment} alt="Comment icon" />
      </div>
    
      <TrendCard />

      <button className="button r-button" onClick={()=> setShowModal(true)}>Share</button>
      <ShareModal
        showModal={showModal}
        setShowModal={setShowModal}
        />
    </div>
  )
}

export default RightSide