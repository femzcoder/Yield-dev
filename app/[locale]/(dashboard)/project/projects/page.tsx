import { FilterButton, PurpleButton } from '@/components/OtherButtons'
import { TitleText } from '@/components/Typo'
// import { Plus } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'

const Projects = () => {
  return (
    <div>
        <div>
            <div>
                <span>Manage your Project</span>
                <PurpleButton styles={'gradient-text'} text={'Almanac'}/>
                <span>3 March 2025</span>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <FilterButton type='button' text='This Month'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                    <DropdownMenuGroup>
<<<<<<<< HEAD:app/[locale]/(dashboard)/project/projects/page.tsx
                        <DropdownMenuItem onClick={()=>{}}>
========
                        <DropdownMenuItem  >
>>>>>>>> 5ac0a3352530d53b2dc02ade017b2a985d30b6bd:app/dashboard/project/projects/page.tsx
                            Audio
                        </DropdownMenuItem>
                        <Separator/>
                        <DropdownMenuItem>
                            Camera
                        </DropdownMenuItem>
                        <DropdownMenuItem  >
                            Upload
                        </DropdownMenuItem>
                        <Separator/>
                        <DropdownMenuItem>
                            Calendar
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <div>
            <div className='flex justify-between items-center'>
                <TitleText text='Commercial Insurance'/>
<<<<<<<< HEAD:app/[locale]/(dashboard)/project/projects/page.tsx
                <PurpleButton styles={'gradient-text'} text={'Add Task'}/>
========
                <PurpleButton iconUrl={''} text={'Add Task'}/>
                {/* <PurpleButton iconUrl={<Plus/>} text={'Add Task'}/> */}
>>>>>>>> 5ac0a3352530d53b2dc02ade017b2a985d30b6bd:app/dashboard/project/projects/page.tsx
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Projects