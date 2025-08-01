"use client"


import { Grid2Container } from '@/components/Container'
import { FilterButton } from '@/components/OtherButtons'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { ScheduleCard } from './ScheduleCard'

const Almanac = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className='p-4 space-y-6'>
        <div className='flex justify-between items-center'>
            <div className="mb-10">
                <h3 className="font-[400]">Welcome</h3>
                <TitleText text="David Shepard" style="gradient-text font-[800] text-[20px]" />
            </div>
            <div className="flex items-center gap-3">
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


                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="default" size={"sm"} className='text-white rounded-3xl'>Quick Add <ChevronDown size="white"/></Button>
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
        </div>

        <div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
            />
        </div>

        <div>
            <TitleText text='Schedules'/>
            <Grid2Container>
                <div>
                    <ScheduleCard/>
                </div>
                <div>
                    <ScheduleCard/>
                </div>
            </Grid2Container>
        </div>
    </div>
  )
}

export default Almanac