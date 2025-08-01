'use client'

import { BasicCard } from '@/components/Cards'
import LeaderboardItem from '@/components/LeaderBoardItem'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const LeaderBosrd = () => {
  return (
    <BasicCard style='space-y-6'>
        <div className='flex items-center justify-between'>
            <TitleText style='text-[18px]' text='Leaderboard'/>

            <div className=''>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className='rounded-3xl'>This Week <ChevronDown/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Message
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem>
                      Call
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>


            </div>

        </div>

        <div className='space-y-3'>
            <LeaderboardItem ind={1} customerName='Femi Akerele' country='Nigeria' amount={460000}/>
            <LeaderboardItem ind={2} customerName='Femi Akerele' country='Nigeria' amount={460000}/>
            <LeaderboardItem ind={3} customerName='Femi Akerele' country='Nigeria' amount={460000}/>
            <LeaderboardItem ind={4} customerName='Femi Akerele' country='Nigeria' amount={460000}/>
            <LeaderboardItem ind={5} customerName='Femi Akerele' country='Nigeria' amount={460000}/>
            <LeaderboardItem ind={6} customerName='Femi Akerele' country='Nigeria' amount={460000}/>
        </div>

    </BasicCard>
  )
}

export default LeaderBosrd