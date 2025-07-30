import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
// import ReactSpeedometer from "react-d3-speedometer"
import { BasicCard } from '@/components/Cards'
import { FilterButton } from '@/components/OtherButtons'
import { TitleText } from '@/components/Typo'

const ContestPerformance = () => {
  return (
    <BasicCard style='space-y-6'>
        <div className='flex justify-between items-center'>
            <TitleText text='Contest Performance'/>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <FilterButton type='button' text='Team 1'/>
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

            <div className='w-full h-[30vh] flex items-center justify-center'>

                <div className='h-[80%] w-[60%]'>
                    {/* <ReactSpeedometer
                    height={50}
                    needleColor="black"
                    needleTransitionDuration={1000}
                    fluidWidth={true}
                        minValue={0}
                        maxValue={100}
                        value={30}
                        segments={5}
                        segmentColors={[
                            "#F41740",
                            "#F75875",
                            "#FF823A",
                            "#FFCA3A",
                            "#288D27",
                        ]}/>    */}
                </div>
             
            </div>           


            <div className='w-full flex items-center justify-center space-y-2'>
                <span className='text-[14px] text-[#595657] text-center'>Your team is in the 30th percentile for innovation and collaboration</span>
            </div>
  
    </BasicCard>
  )
}

export default ContestPerformance


