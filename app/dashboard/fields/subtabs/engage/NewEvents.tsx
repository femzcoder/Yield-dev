import { BasicCard } from '@/components/Cards'
import React from 'react'
import { EnrichProfileCard } from '../enrich/EnrichProfileCard'
import { TitleText } from '@/components/Typo'

const NewEvents = () => {
  return (
    <BasicCard style='space-y-6'>
        <div>
            <TitleText style='text-[18px]' text='New Live Event'/>
        </div>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
            <EnrichProfileCard/>
            <EnrichProfileCard/>
        </div>
    </BasicCard>
  )
}

export default NewEvents