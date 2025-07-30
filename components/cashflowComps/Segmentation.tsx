import React from 'react'
import { BasicCard, InsightWarningCard, Legend } from '../Cards'
import { TitleText } from '../Typo'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { FilterButton } from '../OtherButtons'
import Image from 'next/image'
import { Grid2Container } from '../Container'
import { CustomerPieChart } from '../charts/PieChart'

const Segmentation = () => {
  return (
    <BasicCard style='space-y-6'>
        <div className='flex justify-between items-center'>
            <TitleText text='Segmentation'/>
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
            showCTA={true}
            isPurple={false}
            flag='Insight'
            title="You have only engaged 10% of your contacts and 2 contacts have terminated their policies" 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />  
        
        <div>
                      <div className="mb-6 flex items-center justify-end w-full">
                        
            
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <FilterButton type='button' text='Age'/>
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

            <Grid2Container>
                <div className='w-full'>
                    <CustomerPieChart/>              
                </div>
      
    
                <div className='w-full space-y-2 '>
                    <Legend color="#A3E2FA" range='0-20' label="Young Adults"/>
                    <Legend color="#7A003F" range='21-40' label="Early Career"/>
                    <Legend color="#822EA7" range='41-60' label="Mid Career"/>
                    <Legend color="#7092F7" range='61-80' label="Senior Professional"/>
                    <Legend color="#CD0067" range='81-100' label="Near Retirement/Retirees"/>
    
                </div>
            </Grid2Container>                      
        </div>


    </BasicCard>
  )
}

export default Segmentation