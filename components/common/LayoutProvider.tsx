"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import InstallModal from "../InstallButon";
import { usePWADetect } from "@/lib/hooks/usePWADetection";

const DashboardLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openInstall, setOpenInstall] = useState(false);
  const { isInstallable, isInstalled, installApp } = usePWADetect();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Open install modal only if app is installable and not already installed
    if (isInstallable && !isInstalled) {
      setOpenInstall(true);
    }
  }, [isInstallable, isInstalled]);

  return (
    <>
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="relative flex-1 transition-all duration-300 ml-0 lg:ml-48 overflow-x-hidden h-screen bg-[#f9fafb]">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="py-6 overflow-y-auto overflow-x-hidden mt-11 relative pb-12 ">
            {children}
          </div>
        </div>
      </div>

      <InstallModal
        open={openInstall}
        onOpenChange={setOpenInstall}
        onInstallClick={installApp}
      />
    </>
  );
};

export default DashboardLayoutProvider;
