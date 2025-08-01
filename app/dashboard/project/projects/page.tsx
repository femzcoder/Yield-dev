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
                        <DropdownMenuItem  >
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
                <PurpleButton iconUrl={''} text={'Add Task'}/>
                {/* <PurpleButton iconUrl={<Plus/>} text={'Add Task'}/> */}
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Projects