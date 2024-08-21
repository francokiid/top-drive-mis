import React from 'react'
import logo from '../../assets/images/top_drive_logo.png';
import '../../styles/preloader.css';

function PreLoader() {
  return (
    <div className='preloader'>
      <img src={logo} className='logo' alt='Top Drive logo'/>
      <h1>Top Drive MIS</h1>
      <a></a>
    </div>
  )
}

export default PreLoader