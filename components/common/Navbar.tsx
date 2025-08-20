"use client"

import React from 'react'
import { NavbarButton } from '../OtherButtons'
import Image from 'next/image';
// import { useChatbot } from '../chatbot/Chatbot';
import UserIcon from './navbarElements/UserIcon';
// import ActivityLog from './navbarElements/ActivityLog';
// import { NotificationPopover } from './navbarElements/Notification';
// import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
// import { settingUrl } from '@/app/dashboard/settingsandprivacy/page';

import SubscribeButton from '../EnablePushButton';


interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  // const chatbot = useChatbot();
  const router = useRouter();
  const pathname = usePathname();

  const pageHeaderEnum= [
    {
      route: '/dashboard/settingsandprivacy',
      title: 'Settings & Privacy'
    },
    {
      route: '/dashboard/helpandsupport',
      title: 'Help & Support'
    },
    {
      route: `/dashboard/helpandsupport/helpcomponent/feedback`,
      title: 'Feedback'
    },
    {
      route: `/dashboard/helpandsupport/helpcomponent/resource`,
      title: 'Resource'
    },
    {
      route: `/dashboard/settingsandprivacy/settingscomponent/profile`,
      title: 'Profile'
    },
    {
      route: `/dashboard/settingsandprivacy/settingscomponent/particulars`,
      title: 'Particulars'
    },
    {
      route: `/dashboard/settingsandprivacy/settingscomponent/password`,
      title: 'Password'
    },
    {
      route: `/dashboard/settingsandprivacy/settingscomponent/subscription`,
      title: 'Subscription'
    },
    {
      route: `/dashboard/settingsandprivacy/settingscomponent/policy`,
      title: 'Policy'
    },

  ]

  return (
    <div className="flex h-[60px] fixed w-full lg:w-[83%] xl:w-[86%] 2xl:w-[90%] items-center justify-between bg-base-100 shadow-lg px-3 md:px-6 py-1 bg-[#fff] border-[#D6D3D1] border-b z-[45]">
      {
        pageHeaderEnum.find((item) => item.route === pathname)?.title ? (
          <div className='flex items-center gap-2'>
            <button onClick={() => router.back()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8.19167 5C6.43884 6.2963 4.86454 7.81065 3.50761 9.50473C3.39121 9.65006 3.33301 9.82503 3.33301 10M8.19167 15C6.43884 13.7037 4.86454 12.1893 3.50761 10.4953C3.39121 10.3499 3.33301 10.175 3.33301 10M3.33301 10H16.6663" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <span className="text-[14px] font-normal">
            {pageHeaderEnum.find((item) => item.route === pathname)?.title}
          </span>          
          </div>

        ):
        <div className='flex items-center'>
          <div className="flex-none ">
              <button onClick={toggleSidebar} className="btn btn-square btn-ghost lg:hidden border border-[#D6D3D1] rounded-full p-[6px]">
                <Image
                  className=""
                  src="/icons/hamburger.png"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </button>
          </div>
          <div>
              <UserIcon/>           
          </div>

        </div>        
        }  


        <div className="flex items-center gap-2">
            <SubscribeButton/>
            <NavbarButton type='button' handleClick={() => {}} iconUrl={"/icons/search-icon.svg"} />
            <NavbarButton type='button' handleClick={() => {}} iconUrl={"/icons/notificationbell.svg"} />
            <NavbarButton type='button' handleClick={() => {}} iconUrl={"/icons/activity.svg"} />
            {/* <NotificationPopover/> */}
            {/* <ActivityLog/> */}
            
            <NavbarButton type='button' handleClick={() => {}} iconUrl={"/icons/message.svg"} />
        </div>
    </div>
  ) 
} 

export default Navbar