import { Grid2Container } from '@/components/Container'
import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { FilterButton } from '@/components/OtherButtons'
import ContestPerformance from './ContestPerformance'
import LeaderBosrd from './LeaderBoard'

const Leaderboard = () => {
  return (
    <div>

      <div className='flex items-center justify-between mb-4'>
        <div>
          <p className=' font-bold'>Sprint 0</p>
          <p className=' font-semibold'>4-15 February, 2025</p>
          <span className='text-[12px]'>Enrichment will be performed on 18 February 2025</span>
        </div>        

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <FilterButton type='button' text='This Week'/>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem  >
                    Create
                  </DropdownMenuItem>
                  <Separator/>
                  <DropdownMenuItem  >
                    Audio
                  </DropdownMenuItem>

                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
      </div>


      <Grid2Container>
        <div>
          <ContestPerformance/>
        </div>
        <div>
          <LeaderBosrd/>
        </div>
          
      </Grid2Container>
    </div>
  )
}

export default Leaderboard