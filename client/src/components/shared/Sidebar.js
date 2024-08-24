import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSpeedometer, BsCalendar3Range, BsFolder, BsPeople, BsPersonWorkspace, BsCarFront, BsChevronDown, BsChevronUp, BsPersonCircle } from 'react-icons/bs';
import logo from '../../assets/images/top_drive_logo.png';

const NavItem = ({ icon, title, links, isOpen, toggle }) => (
  <div className='nav-item'>
    <Link 
      to='#' 
      className='nav-link d-flex justify-content-between align-items-center px-4 py-3' 
      onClick={toggle}
    >
      <div className='d-flex align-items-center'>
        {icon} {title}
      </div>
      {isOpen ? <BsChevronUp /> : <BsChevronDown />}
    </Link>
    {isOpen && (
      <nav className='nav-submenu'>
        {links.map((link, index) => (
          <Link key={index} to={link.href} className='nav-link px-5 py-2'>
            {link.text}
          </Link>
        ))}
      </nav>
    )}
  </div>
);

function Sidebar() {
  const [isSchedulesOpen, setIsSchedulesOpen] = useState(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);

  return (
    <div className='sidebar d-flex flex-column pt-4 rounded-4 hide-scrollbar bg-gradient-primary shadow'>
      
      <div className='d-flex justify-content-center mb-3'>
        <img src={logo} alt='Logo' className='img-fluid' style={{ maxHeight: '50px' }} />
      </div>

      <nav className='nav flex-column mt-2'>
        <Link to='/' className='nav-link px-4 py-3'>
          <BsSpeedometer className='me-3 fs-5' /> Dashboard
        </Link>
        <NavItem
          icon={<BsCalendar3Range className='me-3 fs-5' />}
          title='Schedules'
          links={[
            { href: '/schedules/pdc', text: 'Practical' },
            { href: '/schedules/tdc', text: 'Theoretical' }
          ]}
          isOpen={isSchedulesOpen}
          toggle={() => setIsSchedulesOpen(!isSchedulesOpen)}
        />
        <Link to='/courses' className='nav-link px-4 py-3'>
          <BsFolder className='me-3 fs-5' /> Courses
        </Link>
        <NavItem
          icon={<BsPeople className='me-3 fs-5' />}
          title='Students'
          links={[
            { href: '/students/pdc', text: 'Practical' },
            { href: '/students/tdc', text: 'Theoretical' }
          ]}
          isOpen={isStudentsOpen}
          toggle={() => setIsStudentsOpen(!isStudentsOpen)}
        />
        <Link to='/instructors' className='nav-link px-4 py-3'>
          <BsPersonWorkspace className='me-3 fs-5' /> Instructors
        </Link>
        <Link to='/vehicles' className='nav-link px-4 py-3'>
          <BsCarFront className='me-3 fs-5' /> Vehicles
        </Link>
        <Link to='/users' className='nav-link px-4 py-3'>
          <BsPersonCircle className='me-3 fs-5' /> Users
        </Link>
      </nav>

      <div className='logout-wrapper p-4 mt-auto'>
        <div className='logout-box p-4 d-flex justify-content-center align-items-center rounded-3 bg-gradient-secondary'>
          <button type='button' className='btn btn-dark'>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;