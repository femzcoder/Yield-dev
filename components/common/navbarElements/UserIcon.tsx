import React, { ReactNode, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, LogOut, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import { useParams } from 'next/navigation'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const UserIcon = () => {
    const [open, setOpen] = useState(false); 
    //   const params = useParams()
    //   const currentLang = params?.locale as string;
    const profileList =[
        {
            fullname:'Community'
        },
        {
            fullname:'Builder'
        },

        {
            fullname:'Member'
        },
        {
            fullname:'Merchant'
        },
    ]
    const [activeProfile, setActiveProfile] = useState(profileList[0].fullname);

    const handleProfileClick = (fullname: string) => {
        setActiveProfile(fullname);
    };

  return (

        <Popover>
          <PopoverTrigger >
            <Button onClick={() => setOpen(!open)} variant={'ghost'}>
                <div className="flex-1 primary-button-background rounded-full p-1">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>  
                {
                    open ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.5303 15.5299C12.3897 15.6704 12.1991 15.7493 12.0003 15.7493C11.8016 15.7493 11.6109 15.6704 11.4703 15.5299L5.47032 9.52993C5.32987 9.3893 5.25098 9.19868 5.25098 8.99993C5.25098 8.80118 5.32987 8.61055 5.47032 8.46993H18.5303C18.6708 8.61055 18.7497 8.80118 18.7497 8.99993C18.7497 9.19868 18.6708 9.3893 18.5303 9.52993L12.5303 15.5299Z" fill="#C79438"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.5303 8.47007C12.3897 8.32962 12.1991 8.25073 12.0003 8.25073C11.8016 8.25073 11.6109 8.32962 11.4703 8.47007L5.47032 14.4701C5.32987 14.6107 5.25098 14.8013 5.25098 15.0001C5.25098 15.1988 5.32987 15.3894 5.47032 15.5301H18.5303C18.6708 15.3894 18.7497 15.1988 18.7497 15.0001C18.7497 14.8013 18.6708 14.6107 18.5303 14.4701L12.5303 8.47007Z" fill="#C79438"/>
                    </svg>
                }
                   
            </Button>
          </PopoverTrigger>
          <PopoverContent className='border-none rounded-2xl bg-[#E7E5E4] shadow-lg w-full lg:w-[500px] lg:ml-56 mt-2 !p-1 md:p-3'>
            <ul className="bg-[#FAFAF9] grid gap-2 w-full md:w-full rounded-2xl">
                <div className='grid grid-cols-4'>
                    {
                        profileList.map((profile, index) => (
                            <li key={index} className={`flex flex-col items-center relative gap-2 p-2 hover:bg-[#D6D3D1] cursor-pointer ${(profile.fullname === 'Merchant' || profile.fullname === 'Member') && 'opacity-60'}`} 
                             onClick={() => handleProfileClick('Community')}
                            >
                                {
                                    activeProfile === profile.fullname &&
                                <div className='absolute top-2 right-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 10 9" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.48526 9 9.5 6.98526 9.5 4.5C9.5 2.01472 7.48526 0 5 0C2.51472 0 0.5 2.01472 0.5 4.5C0.5 6.98526 2.51472 9 5 9ZM4.88402 6.31998L7.38398 3.31998L6.61598 2.68002L4.466 5.25948L3.35348 4.14648L2.6465 4.85352L4.1465 6.35352L4.5335 6.74052L4.88402 6.31998Z" fill="#C79438"/>
                                    </svg>
                                </div>
                                }


                                <div className='rounded-full bg-[#EEEEEE] p-1 md:p-2'>
                                    <Avatar>
                                        <AvatarFallback className='text-[#C79438] font-medium'>{profile.fullname.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <span className='text-[14px] md:text-[14px] text-[#2D2D2D] font-medium'>{profile.fullname}</span>
                                <span className={`text-[12px] md:text-sm ${activeProfile === profile.fullname ? 'gradient-text' : ''}`}>{activeProfile === profile.fullname ? 'Active Profile' : 'Switch Profile'}</span>
                            </li>
                        ))
                    }
                </div>
                <div className='flex flex-col items-center w-full gap-2 p-2'>
                    <OtherTabs>
                       <Link href={`/dashboard/settingsandprivacy`} className='flex items-center gap-4'>
                            <div className='rounded-full bg-[#EEEEEE] p-2'>
                                <SettingsIcon color='#C79438' size={24} className="" />
                            </div>
                            
                            <span className='font-medium text-[#2D2D2D]'>Settings & Privacy</span>
                       </Link>
                    </OtherTabs>
                    <OtherTabs>
                        <Link href={`/dashboard/helpandsupport`} className='flex items-center gap-4'>
                            <div className='rounded-full bg-[#EEEEEE] p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C79438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                                {/* <CircleQuestionMark color='#C79438' size={18} className="" /> */}
                            </div>
                            
                            <span className='font-medium text-[#2D2D2D]'>Help & Support</span>
                       </Link>
                    </OtherTabs>
                    <OtherTabs>
                       <div className='flex items-center gap-4'>
                            <div className='rounded-full bg-[#EEEEEE] p-2'>
                                <LogOut color='#C79438' size={24} className="mr-2 rounded-full " />
                            </div>
                            
                            <span className='font-medium text-[#2D2D2D]'>Logout</span>
                       </div>
                    </OtherTabs>
                </div>
            </ul>
          </PopoverContent>
        </Popover>

)}

export default UserIcon

const OtherTabs = ({children}:{children:ReactNode}) => {
    return (
        <div className="flex items-center justify-between gap-4 border-t pt-2 border-[#DDDDDD] w-full">
            {children}
            <ChevronRight size={12}/>
        </div>
    )
    }