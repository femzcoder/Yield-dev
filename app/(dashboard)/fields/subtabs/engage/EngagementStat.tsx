import { BasicCard, InsightWarningCard } from '@/components/Cards'
import { ChartBarStacked } from '@/components/charts/BarChart'
import { TitleText } from '@/components/Typo'
import Image from 'next/image'
import React from 'react'

const EngagementStat = () => {
  return (
    <BasicCard style='space-y-6'>
        <div>
            <TitleText style='text-[18px]' text='Engagement Stat'/>
        </div>
        
        <InsightWarningCard
            flag="Insight"
            title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} /> 

        <ChartBarStacked/>
    </BasicCard>
  )
}

export default EngagementStat