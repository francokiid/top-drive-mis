import React from 'react';
import { MdAdd, MdFilterAlt, MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch, BsSortDown } from "react-icons/bs";

const Layout = ({ title, children }) => {
  return (
    <div className="custom-container">
      <div className="d-flex justify-content-between align-items-center">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark" type="submit"><BsSearch/></button>
        </form>

        <div className='d-flex'>
          <button type="button" className="btn btn-outline-secondary mx-3">
            <span className="d-none d-sm-inline">Filter</span><MdFilterAlt className='ms-1 fs-5' />
          </button>

          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="d-none d-sm-inline">Sort by</span><MdKeyboardArrowDown className='ms-1 fs-5'/>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                <li><a className="dropdown-item" href="#">Dropdown link</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-outline-secondary me-3"><BsSortDown className='fs-5'/></button>
          </div>

          <button type="button" className="btn btn-dark">
            <span className="d-none d-sm-inline">New</span><MdAdd className='fs-5' />
          </button>
        </div>
      </div>

      {children}

      <nav className='d-flex justify-content-center'>
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
