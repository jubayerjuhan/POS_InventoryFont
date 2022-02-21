import React from 'react'
import './minicard.css'

const Minicard = ({ icon, amount, title }) => {
  return (
    <div className='minicard' style={{ backgroundColor: 'red' }}>
      <div>
        <h2>{amount}</h2>
        <h4>{title}</h4>
      </div>
      {icon}
    </div>
  )
}

export default Minicard