import React from 'react'
import { BasicCard, InsightWarningCard, Legend } from '../Cards'
import { TitleText } from '../Typo'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import ReactSpeedometer from "react-d3-speedometer"
import { FilterButton } from '../OtherButtons'
import Image from 'next/image'
import { Grid2Container } from '../Container'

const DatabaseHealth = () => {
  return (
    <BasicCard style='space-y-6'>
        <div className='flex justify-between items-center'>
            <TitleText text='Database Health'/>
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

        <InsightWarningCard
            showCTA={false}
            isPurple={true}
            flag='Alert'
            title="You have only engaged 10% of your contacts and 2 contacts have terminated their policies" 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />  


        <Grid2Container>
            <div className='w-full'>
            <ReactSpeedometer
              needleColor="black"
              needleTransitionDuration={4000}
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
                ]}/>                
            </div>
  

            <div className='w-full space-y-2 px-6'>
                <Legend color='#F41740' range='0-20' label='Critical'/>
                <Legend color='#F75875' range='21-40' label='Weak'/>
                <Legend color='#FF823A' range='41-60' label='Moderate'/>
                <Legend color='#FFCA3A' range='61-80' label='Good'/>
                <Legend color='#288D27' range='81-100' label='Excellent'/>

            </div>
        </Grid2Container>
    </BasicCard>
  )
}

export default DatabaseHealth


