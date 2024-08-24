import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';
import Dashboard from './components/admin/Dashboard';
import Courses from './components/admin/Courses';
import Users from './components/admin/Users';

const getPageTitle = (path) => {
  const segments = path.replace(/^\/|\/$/g, '').split('/');

  const title = (segments.length === 0 || (segments.length === 1 && segments[0] === ''))
    ? 'DASHBOARD'
    : segments.map(segment => segment.toUpperCase()).join(' ');

  return title;
};

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="main d-flex p-4">
      {isSidebarOpen && (
        <div className="left-wrapper col-md-auto me-4">
          <Sidebar />
        </div>
      )}
      <div className={`right-wrapper col ${!isSidebarOpen ? 'full-width' : ''}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} pageTitle={pageTitle} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
