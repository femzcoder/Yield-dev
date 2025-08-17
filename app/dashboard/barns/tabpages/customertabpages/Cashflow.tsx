import { InsightWarningCard } from '@/components/Cards'
import Contact from '@/components/cashflowComps/Contact'
import DatabaseHealth from '@/components/cashflowComps/DatabaseHealth'
import PeerComparison from '@/components/cashflowComps/PeerComparison'
import Segmentation from '@/components/cashflowComps/Segmentation'
import { FlexContainer, Grid2Container } from '@/components/Container'
import { TitleText } from '@/components/Typo'
import Image from 'next/image'
import React from 'react'

const Cashflow = () => {
  return (
    <div className='space-y-6'>
        <div>
            <TitleText style='text-[28px]' text='Barn'/>

        </div>

        <FlexContainer>
            <div className='w-full lg:w-[40%]'>
            <InsightWarningCard
                flag='Insight'
                title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
                icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />            
            </div>
        </FlexContainer>
        


        
        <Grid2Container>
            <DatabaseHealth/>
            <Contact/>
            <PeerComparison/>
            <Segmentation/>
        </Grid2Container>
    </div>
  )
}

export default Cashflow