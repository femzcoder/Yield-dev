import React, { useState } from 'react'
import { NavbarButton } from "@/components/OtherButtons"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ActivityLog = () => {
  return (
    <Popover>
      <PopoverTrigger >
        <NavbarButton type='button'  iconUrl={"/icons/searchIcon.png"} />
      </PopoverTrigger>
      <PopoverContent className='border-none bg-[#E7E5E4] shadow-lg w-[500px]'>
            <div className=' w-[500px] bg-[#FAFAF9]'>
                <div className='shadow-lg'>
                    <span>Activity Log</span>
                </div>
                <div>
                    {
                        ['New Contact Created', 'Uploaded Document to Toolshed', 'Edited Kiara Profile'].map((i, id)=>(<ActivityCard key={id} title={i} />))
                    }

                </div>
            </div>
      </PopoverContent>
    </Popover>

  )
}

export default ActivityLog

const ActivityCard = ({title, date}:{title:string, date?:string})=>{
    const [hover, setHover] = useState(false)
    return(
        <div className={`${hover? 'bg-[#F2F1F1]': 'bg-white'} p-3 w-full flex items-center gap-3`} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {hover &&<div className='w-[10px] h-[10px] rounded-full bg-[#C79438]'></div>}
            <div className={`${hover? 'border-l-2 border-[#C79438]':''} pl-3 bg-white`}>
                <p>{title} <span>{date}</span></p>
                <Button variant={'ghost'} className='gradient-text '>View Details</Button>                
            </div>

        </div>
    )
}