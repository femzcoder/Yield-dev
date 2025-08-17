'use client'

import { ChevronRight} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import UserProfileDetails from '@/components/UserProfileDetails'
import { useRouter } from 'next/navigation'

const SettingsAndPrivacy = () => {

    const router = useRouter()
    const settingUrl ='/dashboard/settingsandprivacy/settingscomponent'

    const settingsOptions=[
        {
            icon:"/icons/Iconssp1.svg",
            title:'Profile',
            handleClick:()=>{router.push(`${settingUrl}/profile`)}
        },
        {
            icon:"/icons/Iconssp2.svg",
            title:'Particulars',
            handleClick:()=>{router.push(`${settingUrl}/particulars`)}
        },
        {
            icon:"/icons/Iconssp3.svg",
            title:'Subscriptions',
            handleClick:()=>{router.push(`${settingUrl}/subscription`)}
        },
        {
            icon:"/icons/Vectorsp4.svg",
            title:'Password',
            handleClick:()=>{router.push(`${settingUrl}/password`)}
        },
        {
            icon:"/icons/Iconssp5.svg",
            title:'Policies',
            handleClick:()=>{router.push(`${settingUrl}/policy`)}
        }
    ]

  return (
    // <AssistantContainer>
    <>
        <div className='px-2 py-6 md:p-6 space-y-2'>
            <span className='text-[#2D2D2D] mb-4'>Settings & Privacy</span>

            <UserProfileDetails />

            <div className='py-2 rounded-[8px] space-y-4'>
                {
                    settingsOptions.map((setting, index) => (
                        <div onClick={setting.handleClick} key={index} className='flex bg-white justify-between items-center  rounded-[8px] p-2 hover:bg-[#F2F1F1] cursor-pointer'>
                            <div className='flex items-center gap-2'>
                               <Image
                                    src= {setting.icon}
                                    alt="Settings Icon"
                                    width={18}
                                    height={18}
                               />
                               <span className=''>{setting.title}</span> 
                            </div>
                            <ChevronRight size={16} className='' />
                            
                        </div>
                    ))
                }
            </div>
        </div>    

    </>

    // </AssistantContainer>
  )
}

export default SettingsAndPrivacy