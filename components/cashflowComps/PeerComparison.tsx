import React from 'react'
import { BasicCard, InsightWarningCard } from '../Cards'
import { TitleText } from '../Typo'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { FilterButton } from '../OtherButtons'
import Image from 'next/image'

const PeerComparison = () => {
  return (
    <BasicCard style='space-y-6'>
        <div className='flex justify-between items-center'>
            <TitleText text='Peer Comparison'/>
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

        <BasicCard style=" border border-[#E7E5E4]">
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
            <Image src="/images/Graph.png" alt="Peer Comparison" width={300} height={200} className="w-full h-auto mb-4" />
        </BasicCard>
    </BasicCard>
  )
}

export default PeerComparison