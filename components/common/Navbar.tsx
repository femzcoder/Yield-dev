"use client"

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavbarButton } from '../OtherButtons'
import Image from 'next/image';
import { useChatbot } from '../chatbot/Chatbot';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const chatbot = useChatbot();

  return (
    <div className="flex fixed w-full lg:w-[86%] 2xl:w-[90%] items-center justify-between bg-base-100 shadow-sm px-6 py-2 bg-[#FAFAF9] border-[#D6D3D1] border-b z-[9999]">
      <div className='flex items-center space-x-1'>
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
        <div className="flex-1 primary-button-background rounded-full p-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>        
      </div>

        <div className="flex items-center gap-2">
            <NavbarButton type='button' handleClick={() => console.log("Search clicked")} iconUrl={"/icons/searchIcon.png"} />
            <NavbarButton type='button' handleClick={() => console.log("Search clicked")} iconUrl={"/icons/notificationIcon.png"} />
            <NavbarButton type='button' handleClick={() => chatbot.toggle()} iconUrl={"/icons/messageIcon.png"} />
        </div>
    </div>
  ) 
} 

export default Navbar