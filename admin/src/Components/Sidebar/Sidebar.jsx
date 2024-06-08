import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <h4 className=''>add pro</h4>
            </div>
        </Link>
        <Link to={'/listproducts'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <h4 className=''>pro list</h4>
            </div>
        </Link>


    </div>
  )
}

export default Sidebar