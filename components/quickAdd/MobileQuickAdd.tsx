import { Plus, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const MobileQuickAdd = () => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{backgroundColor:`${open &&'rgba(0,0,0,0.5)'}`}} className={`lg:hidden fixed bottom-10 right-0 z-50  ${open && 'h-screen w-full'}`}>

      {open && 
        <div className='absolute bottom-20 right-2 space-y-2'>
            <button
              disabled={true}
              className="group flex items-center gap-2 justify-end w-full bg-transparent  transition"
              onClick={() => console.log('Quick Add Clicked')}
            >
              <p className='bg-[#EEEEEE] group-hover:bg-white  rounded-2xl p-1 text-xs '>Create</p>
              <div className='p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#EEEEEE] group-hover:bg-white '>
                <Image src="/icons/pencil.png" alt="Plus Icon" width={24} height={24} />
              </div>
              
            </button>
            <button
              className="flex items-center gap-2 justify-end w-full bg-transparent  transition"
              onClick={() => console.log('Quick Add Clicked')}
            >
              <p className='bg-[#EEEEEE] group-hover:bg-white  rounded-2xl p-1 text-xs'>Audio</p>
              <div className='p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#EEEEEE] group-hover:bg-white '>
                <Image src="/icons/audio.png" alt="Plus Icon" width={24} height={24} />
              </div>
            </button>
            <button
              className="group flex items-center gap-2 justify-end w-full bg-transparent  transition"
              onClick={() => console.log('Quick Add Clicked')}
            >
              <p className='bg-[#EEEEEE] group-hover:bg-white  rounded-2xl p-1 text-xs'>Camera</p>
              <div className='p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#EEEEEE] group-hover:bg-white '>
                <Image src="/icons/camera.png" alt="Plus Icon" width={24} height={24} />
              </div>
            </button>
            <button
              className="group flex items-center gap-2 justify-end w-full bg-transparent  transition"
              onClick={() => console.log('Quick Add Clicked')}
            >
              <p className='bg-[#EEEEEE] group-hover:bg-white  rounded-2xl p-1 text-xs'>Upload</p>
              <div className='p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#EEEEEE] group-hover:bg-white '>
                <Image src="/icons/career.png" alt="Plus Icon" width={24} height={24} />
              </div>
            </button>
            <button
              className="group flex items-center gap-2 justify-end w-full bg-transparent  transition"
              onClick={() => console.log('Quick Add Clicked')}
            >
              <p className='bg-[#EEEEEE] group-hover:bg-white  rounded-2xl p-1 text-xs'>Calendar</p>
              <div className='p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center bg-[#EEEEEE] group-hover:bg-white '>
                <Image src="/icons/calendar.png" alt="Plus Icon" width={24} height={24} />
              </div>
            </button>


        </div>
        }

        <button
          onClick={() => setOpen(!open)}
          className={`absolute bottom-6 right-2 flex items-center justify-center w-[50px] h-[50px] ${open?'bg-white':'primary-button-background'} rounded-full shadow-lg transition  z-49`}
        >
          {
            open ? <X className="text-black" size={20} /> : <Plus className="text-white" size={20} />
          }
        </button>      
    </div>

  )
}

export default MobileQuickAdd