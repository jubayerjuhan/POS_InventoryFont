import React from 'react'
import { BsFillHouseFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => {
  const navigate = useNavigate()
  const sidebarItems = [
    { name: 'Dashboard', icon: <BsFillHouseFill size={30} />, },
    { name: 'Products', icon: <BsFillHouseFill size={30} /> },
    { name: 'Expense', icon: <BsFillHouseFill size={30} /> },
    { name: 'Users', icon: <BsFillHouseFill size={30} /> },
    { name: 'Settings', icon: <BsFillHouseFill size={30} /> },
    { name: 'Purchase', icon: <BsFillHouseFill size={30} /> },
  ]
  return (

    <div className='sidebar__wrapper'>
      <div className='sidebar__header'>
        <div className='sidebar__header-logo'>
          <img src="https://png.pngitem.com/pimgs/s/491-4918258_your-logo-here-horizontal-transparent-graphic-design-hd.png" alt="" />
        </div>
      </div>
      {sidebarItems.map((item, index) => (
        <Link to={`/${item.name.toLowerCase()}`}>
          <div className='sidebar__nav' key={index} >
            {item.icon}
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar