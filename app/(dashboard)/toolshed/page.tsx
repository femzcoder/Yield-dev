'use client'

import { BasicCard } from '@/components/Cards'
import { AssistantContainer } from '@/components/Container'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ShareProfileDialog } from './components/ShareModal'

const Toolshed = () => {
  return (
    <AssistantContainer>
        <BasicCard>
            <TitleText text=' Global Financial Snapshot –  March 2025'/>
        </BasicCard>
        <BasicCard style='space-y-6'>
            <div className='space-y-3'>
              <TitleText text=' Summary'/>  
              <div>
                <p className='text-sm'>Markets remain uncertain amid a mix of economic signals:</p>
                <ul className='list-disc pl-6'>
                    <li className='text-sm'>The US Fed held interest rates steady but expressed concern over economic risks.</li>
                    <li className='text-sm'>US-China trade tensions persist, with shifts in shipping patterns hinting at supply chain uncertainty.</li>
                    <li className='text-sm'>Economic data was mixed: US consumer confidence dipped, Eurozone recovery stalled, and geopolitical tension (e.g., India-Pakistan) shook markets.</li>
                    <li className='text-sm'>Currency and equity markets showed volatility, driven by earnings and investor caution.</li>
                </ul>
              </div>
            </div>
            <div className='space-y-3'>
              <TitleText text='Key Planner Insights'/>  
              <div>
                <ul className='list-disc pl-6'>
                    <li className='text-sm'>Expect continued market volatility.</li>
                    <li className='text-sm'>Emphasize diversification and long-term goals with clients.</li>
                    <li className='text-sm'>Consider defensive assets and review inflation sensitivity.</li>
   
                </ul>
              </div>
            </div>
            <div className='space-y-3'>
              <TitleText text='Action Steps'/>  
              <div>
                <ul className='list-disc pl-6'>
                    <li className='text-sm'>Proactively update and reassure clients.</li>
                    <li className='text-sm'>Tailor advice to individual goals and risk tolerance.</li>
                    <li className='text-sm'>Monitor for both risks and potential opportunities.</li>
                </ul>
              </div>
            </div>

            <div className='flex justify-between items-center'>
                <Button variant={'purple'} className='rounded-[4px]'>Download</Button> 
                <ShareProfileDialog/>
            </div>
            
        </BasicCard>


    </AssistantContainer>
  )
}

export default Toolshed





