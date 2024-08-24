import React from 'react';
import { MdMenu, MdMenuOpen, MdPerson, MdKeyboardArrowDown } from "react-icons/md";

function Header({ toggleSidebar, isSidebarOpen, pageTitle }) {
  return (
    <header>
      <div className="custom-container mb-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button 
            type="button" 
            className="btn-icon me-3"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <MdMenuOpen /> : <MdMenu />}
          </button>
          <h2 className="mb-0">{pageTitle}</h2>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <MdPerson className='me-1 fs-5' /><span className="d-none d-sm-inline">Admin</span><MdKeyboardArrowDown className='ms-1 fs-5'/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><button className="dropdown-item" type="button">Edit Profile</button></li>
              <li><button className="dropdown-item" type="button">Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
