import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
        <h3 className='nav-heading'>Mahima Chouhan Directory App</h3>
    </div>
    <div className='navigators'>
      <button className='navi-btn' onClick={ ()=> navigate("/")}>Add New Person</button>
      <button className='navi-btn' onClick={ ()=> navigate("/retrieve")}>Retrieve Information</button>
    </div>
    </>
  )
}

export default Navbar