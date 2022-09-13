import React from 'react'
import './TrendCard.css'

import { TrendData } from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className='TrendCard'>
      <h3>Trends for you</h3>
      {TrendData.map((trend) => (
         <div className="trend" key={trend.id}>
            <span>{trend.name}</span>
            <span>{trend.shares}k Shares</span>
         </div>
      ))}

    </div>
  )
}

export default TrendCard