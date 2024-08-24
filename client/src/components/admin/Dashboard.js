import React from 'react';

function Dashboard() {
  const $pageTitle = 'DASHBOARD';

  return (
    <>
      <div class="card-group shadow">
        <div class="card bg-primary">
          <div class="card-body">
            <span class="card-text">Total Active Students</span>
            <h5 class="card-title">1 255</h5>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated today</small>
          </div>
        </div>
        <div class="card bg-light">
          <div class="card-body">
          <span class="card-text">Total Students</span>
          <h5 class="card-title">12 255</h5>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated today</small>
          </div>
        </div>
        <div class="card bg-light">
          <div class="card-body">
            <span class="card-text">Total Students</span> 
            <h5 class="card-title">Card title</h5>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated today</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
