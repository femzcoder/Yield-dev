import { BasicCard, BasicCard2 } from '@/components/Cards'
import { OwnPost, ReaderPost } from '@/components/Container'
import { TitleText } from '@/components/Typo'
import { Star } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { FilterButton } from '@/components/OtherButtons'
import { getClientDate } from '@/lib/utils'

const Forum = () => {
  return (
    
    <div className='pt-6'>
      <div className='space-y-8'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className=' font-bold'>Sprint 0</p>
                    <p className='font-normal text-sm md:font-semibold'>{getClientDate()}</p>
                    <span className='hidden md:block text-[12px]'>Enrichment will be performed on 18 February 2025</span>
                  </div>        
        
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <FilterButton type='button' text='Add'/>
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
        

        <BasicCard2>
          <div className='space-y-2'>
            <span>Poll</span>
            <TitleText text='How would you rate your experience?' style='text-[#2D2D2D] text-lg font-medium' />

            <div className='space-y-2'>
              <StarCard title='XX' rating={4} />
              <StarCard title='Feature 2' rating={3} />
              <StarCard title='Feature' rating={2} />
            </div>
          </div>
        </BasicCard2>


        {/* featured */}
        <BasicCard style='space-y-6 border border-[#E7E5E4]'>
          <TitleText style='text-[#2D2D2D] text-lg' text='Featured' />
          <OwnPost
            icon="/icons/userIcon.png"
            title="Featured Session"
            name="Gabriel"
            time="2 hours ago"
            description="Join us for an in-depth discussion on the latest market trends."
            tags={['Finance', 'Market Analysis']}
            likeCount={10}
            commentCount={5}
            repostCount={2}
            engagementCount={17}
          />
          <ReaderPost
            icon="/icons/userIcon.png"
            name="Andrew Koh"
            time="2 hours ago"
            description="Join us for an in-depth discussion on the latest market trends."
            likeCount={1}
          />
          <OwnPost
            icon="/icons/userIcon.png"
            title="Featured Session"
            name="Gabriel"
            time="2 hours ago"
            description="Join us for an in-depth discussion on the latest market trends."
            tags={['Finance', 'Market Analysis']}
            likeCount={10}
            commentCount={5}
            repostCount={2}
            engagementCount={17}
          />
        </BasicCard>

        {/* <Grid2Container>
          <HorizontalBarChart 
            title="Positive"
            preTitle="Sentiment Analysis"
            chartData={[
              { tag: "Very Positive", Positive: 186 },
              { tag: "Positive", Positive: 305 },
              { tag: "Neutral", Positive: 237 },
              { tag: "Negative", Positive: 73 },
              { tag: "Very Negative", Positive: 209 },
            ]}
            percentChange="5.2%"
            icon={<Image width={24} height={24} src="/icons/desktopIcon.png" alt="Desktop Icon" />}
          />
          <HorizontalBarChart 
            title="Top Challenges"
            preTitle="Challenge Rankings"
            chartData={[
              { tag: "Challenge 1", Challenge: 186 },
              { tag: "Challenge 2", Challenge: 305 },
              { tag: "Challenge 3", Challenge: 237 },
              { tag: "Challenge 4", Challenge: 73 },
              { tag: "Challenge 5", Challenge: 209 },
            ]}
            percentChange="5.2%"
            icon={<Image width={24} height={24} src="/icons/desktopIcon.png" alt="Desktop Icon" />}
          />
        </Grid2Container> */}
      </div>
    </div>

  )
}

export default Forum


const StarCard = ({title, rating}:{title:string, rating:number}) =>{
  return(
    <div>
      <span className='text-[12px]'>{title}</span>
      <div className='flex items-center gap-1'>
        <Star size={18} color='#FFB400'/>
        <Star size={18} color='#FFB400'/>
        <Star size={18} color='#FFB400'/>
        <Star size={18} color='rgba(89, 86, 87, 0.3)'/>
        <Star size={18} color='rgba(89, 86, 87, 0.3)'/>

        <p className='hidden'>{rating}</p>
        {/* {[...Array(5)].map((_, index) => (
          <Star key={index} size={18} color={index < rating ? 'text-yellow-500' : 'text-gray-300'} />
        ))} */}
      </div>
    </div>
  )
}