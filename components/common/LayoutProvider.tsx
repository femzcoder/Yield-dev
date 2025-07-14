"use client"

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import TabBar from './TabBar'

const DashboardLayoutProvider = ({ children }: { children: React.ReactNode }) => {
      const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
        <div className="flex">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`relative flex-1 transition-all duration-300 ml-0 lg:ml-48  overflow-x-hidden h-screen bg-[f4f4f4]`}>
              <Navbar toggleSidebar={toggleSidebar}/>
              <div className="py-6 overflow-y-auto overflow-x-hidden mt-11 relative pb-12 ">
                {children}
              </div>
              {/* <TabBar/> */}
            </div>           
          </div>
  )
}

export default DashboardLayoutProvider