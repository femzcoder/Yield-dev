"use client"

import React from 'react'
import { NavbarButton } from '../OtherButtons'
import Image from 'next/image';
import { useChatbot } from '../chatbot/Chatbot';
import UserIcon from './navbarElements/UserIcon';
import ActivityLog from './navbarElements/ActivityLog';
import { NotificationPopover } from './navbarElements/Notification';
import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { helpUrl } from '@/app/dashboard/helpandsupport/page';
import { settingUrl } from '@/app/dashboard/settingsandprivacy/page';
// import SubscribeButton from '../EnablePushButton';


interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const chatbot = useChatbot();
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
      route: `${helpUrl}/feedback`,
      title: 'Feedback'
    },
    {
      route: `${helpUrl}/resource`,
      title: 'Resource'
    },
    {
      route: `${settingUrl}/profile`,
      title: 'Profile'
    },
    {
      route: `${settingUrl}/particulars`,
      title: 'Particulars'
    },
    {
      route: `${settingUrl}/password`,
      title: 'Password'
    },
    {
      route: `${settingUrl}/subscription`,
      title: 'Subscription'
    },
    {
      route: `${settingUrl}/policy`,
      title: 'Policy'
    },

  ]

  return (
    <div className="flex fixed w-full lg:w-[86%] 2xl:w-[90%] items-center justify-between bg-base-100 shadow-lg px-3 md:px-6 py-2 bg-[#fff] border-[#D6D3D1] border-b z-[45]">
      {
        pageHeaderEnum.find((item) => item.route === pathname)?.title ? (
          <div className='flex items-center gap-2'>
            <button onClick={() => router.back()}><ArrowLeft /></button>
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
            {/* <SubscribeButton/> */}
            {/* <NavbarButton type='button' handleClick={() => console.log("Search clicked")} iconUrl={"/icons/searchIcon.png"} /> */}
            <ActivityLog/>
            <NotificationPopover/>
            <NavbarButton type='button' handleClick={() => chatbot.toggle()} iconUrl={"/icons/messageIcon.png"} />
        </div>
    </div>
  ) 
} 

export default Navbar