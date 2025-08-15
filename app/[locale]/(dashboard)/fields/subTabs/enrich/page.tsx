import { InsightWarningCard } from '@/components/Cards'
import { Grid2Container } from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import { EnrichProfileCard } from './EnrichProfileCard'

const Enrich = () => {
  return (
    <div>
        <div>

        </div>

        <Grid2Container>
          <InsightWarningCard
            flag='Suggestion'
            title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />  

            <div></div>
            <div>
              <EnrichProfileCard/>
            </div>
            <div>
              <EnrichProfileCard/>
            </div>

        </Grid2Container>

        
    </div>
  )
}

export default Enrich