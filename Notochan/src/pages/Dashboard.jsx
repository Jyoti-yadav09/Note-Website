import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = ({children}) => {
  return (
    <div className='flex min-h-screen bg-gray-100 text-white'>
      <Sidebar/>
      <main>{children}</main>
    </div>
  )
}

export default Dashboard;
