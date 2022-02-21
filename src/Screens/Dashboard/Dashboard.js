import React from 'react'
import Minicard from '../../Components/Minicard/Minicard.js'
import { BiMoney } from 'react-icons/bi'

import './dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar.js'
const Dashboard = () => {
  return (
    <div className='separator'>
      <div>
        <Sidebar />
      </div>
      <div className='smallPadding'>
        <div className='dashboard__card-wrapper'>
          <Minicard icon={<BiMoney size={50} />}
            amount={'$1,000'}
            title={'Total Income'} />
          <Minicard icon={<BiMoney size={50} />}
            amount={'$1,000'}
            title={'Today Gross'} />
          <Minicard icon={<BiMoney size={50} />}
            amount={'$1,000'}
            title={'Payment Method'} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard