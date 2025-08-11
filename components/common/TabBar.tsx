import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TabBar = () => {
  return (

        <div className='grid grid-cols-4 gap-2 fixed bottom-0 left-0 right-0 bg-[#FAFAF9] border-[#D6D3D1] border-t shadow-md p-2 md:hidden'>
            {
                TabBarItem.map((item) => (
                    <Link href={`/dashboard/${item.id}`} key={item.id} className="no-underline">
                        <div className={`flex flex-col items-center gap-2 rounded-lg cursor-pointer `}>
                            <Image src={item.icon} alt={item.label} width={18} height={18} />
                            <span className='gradient-text text-sm'>{item.label}</span>
                        </div>                
                    </Link>

                ))
            }
        </div>   

  )
}

export default TabBar


const TabBarItem = [
    {
        id: 'home',
        label: 'Seed',
        icon: '/icons/seed.png',
        active: true,
    },
    {
        id: 'profile',
        label: 'Crops',
        icon: '/icons/crops.png',
        active: false,
    },
    {
        id: 'settings',
        label: 'Harvest',
        icon: '/icons/Harvest.png',
        active: false,
    },
    {
        id: 'settings',
        label: 'Cellar',
        icon: '/icons/Cellar.png',
        active: false,
    },
]