import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className="infoHead">
         <h4>Your Info</h4>
         <div>
            <UilPen className="pen" width="2rem" height="1.2rem" />
         </div>
      </div>
      <div className="info">
         <span>Status: </span>
         <span>Active</span>
      </div>
      <div className="info">
         <span>Lives in </span>
         <span>Austin, Tx</span>
      </div>

      <div className="info">
         <span>Works at </span>
         <span>"100Devs"</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard