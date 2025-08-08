import React, { ReactNode, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
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
    //   const params = useParams()
    //   const currentLang = params?.locale as string;
    const profileList =[
        {
            fullname:'Builder'
        },
        {
            fullname:'Community'
        },
        {
            fullname:'Member'
        },
        {
            fullname:'Merchant'
        },
    ]
    const [activeProfile, setActiveProfile] = useState(profileList[1].fullname);
    const handleProfileClick = (fullname: string) => {
        setActiveProfile(fullname);
    };
  return (

        <Popover>
          <PopoverTrigger >
            <Button variant={'ghost'}>
                <div className="flex-1 primary-button-background rounded-full p-1">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>     
            </Button>
          </PopoverTrigger>
          <PopoverContent className='border-none bg-[#E7E5E4] shadow-lg w-full lg:w-[500px] !p-1'>
         <ul className="bg-[#FAFAF9] grid gap-2 w-full md:w-[400px]">
                <div className='grid grid-cols-4'>
                    {
                        profileList.map((profile, index) => (
                            <li key={index} className="flex flex-col items-center gap-2 p-2 hover:bg-[#D6D3D1] cursor-pointer" onClick={() => handleProfileClick(profile.fullname)}>
                                <div className='rounded-full bg-[#EEEEEE] p-1 md:p-2'>
                                    <Avatar>
                                        <AvatarFallback>{profile.fullname.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <span className='text-[14px] md:text-[14px] font-semibold'>{profile.fullname}</span>
                                <span className={`text-[12px] md:text-sm ${activeProfile === profile.fullname ? 'gradient-text' : ''}`}>{activeProfile === profile.fullname ? 'Active Profile' : 'Switch Profile'}</span>
                            </li>
                        ))
                    }
                </div>
                <Separator/>
                <div className='flex flex-col items-center w-full gap-2 p-2'>
                    <OtherTabs>
                       <Link href={`/dashboard/settingsandprivacy`} className='flex items-center gap-4'>
                            <div className='rounded-full bg-[#EEEEEE] p-2'>
                                <SettingsIcon color='#C79438' size={18} className="" />
                            </div>
                            
                            <span>Settings</span>
                       </Link>
                    </OtherTabs>
                    <OtherTabs>
                        <Link href={`/dashboard/helpandsupport`} className='flex items-center gap-4'>
                            <div className='rounded-full bg-[#EEEEEE] p-2'>
                                <SettingsIcon color='#C79438' size={18} className="" />
                            </div>
                            
                            <span>Help and Support</span>
                       </Link>
                    </OtherTabs>
                    <OtherTabs>
                       <div className='flex items-center gap-4'>
                            <div className='rounded-full bg-[#EEEEEE] p-2'>
                                <LogOut color='#C79438' size={16} className="mr-2 rounded-full " />
                            </div>
                            
                            <span>Logout</span>
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