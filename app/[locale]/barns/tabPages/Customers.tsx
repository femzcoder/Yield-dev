import { BasicCard, InsightWarningCard, InteractionCard, ProfileCategoryCard } from '@/components/Cards'
import { FlexContainer, Grid2Container } from '@/components/Container'
import { AddProspectButton, PurpleButton } from '@/components/OtherButtons'
import { LinkText, PurpleText, TextWithIcon } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MessageSquare, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Customers = () => {
    const [activeProspectCard, setActiveProspectCard] = React.useState('Needs');

    const handleAddProspectClick = () => {
        setActiveProspectCard('Needs');
    };

  return (
    <div className='space-y-8'>
      <FlexContainer>
        <div className='w-full lg:w-[40%]'>
          <InsightWarningCard
          flag='Insight'
            title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />            
        </div>

        

        <BasicCard style=" border border-[#E7E5E4] w-full lg:w-[60%]">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Image src="/icons/userIcon.png" alt="Insight Icon" width={24} height={24} className="inline-block mr-2" />
                <div>
                    <h3 className="font-semibold text-[#722F37]">Gabriel</h3>
                    <div className="flex items-center gap-2">
                        <Button variant="default" size={'sm'} className='rounded-[8px] text-white'>Green Field</Button>
                        <Button variant="default" size={'sm'} className='rounded-[8px] text-white'>VIP-LTV</Button>
                    </div>
                </div>
            </div>
           <PurpleButton
              type='button'
              text="Plan Conversation"
              handleClick={() => {}}
              styles="hidden lg:inline"
            />

          </div>

          <div className='bg-[#F2F1F1] rounded-3xl p-2 flex items-center justify-between mb-4'>
            <TextWithIcon text="+91 81658 78656" icon={<Phone size={16} color='#C58B18' />} />
            <TextWithIcon text="kias@gmail.com" icon={<MessageSquare size={16} color='#C58B18' />} />
          </div>


          <FlexContainer>
            <div className='space-y-1'>
              <PurpleText text='Prospect'/>
              <p>Joined: <span className='font-bold'>Feb 2025</span></p>
              <p>Active Policy: <span className='font-bold'>0</span></p>
            </div>
            <div className='space-y-1'>
              <p className='font-bold border border-[#F2F1F1] rounded-[8px] px-2'> SGD 250,000.00  LTV</p>
              <p>Last Interaction: <span className='font-bold'>1 day ago</span></p>
              <p>Last Updated: <span className='font-bold'>Today</span></p>
            </div>

          </FlexContainer>

        </BasicCard>
      </FlexContainer>
      <Grid2Container>

        <BasicCard style=" border border-[#E7E5E4]">
          <div className="mb-6 flex items-center justify-between">
           <LinkText text="Profile Categories" style="font-bold" linkUrl="/barns" />
          </div>
          <Grid2Container>
            {
                ProfileCategoryCardData.map((item, index) => (
                    <ProfileCategoryCard
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        isActive={item.title === activeProspectCard}
                        handleClick={() => {
                            setActiveProspectCard(item.title);
                        }}
                    />
                ))
            }
          </Grid2Container>
        </BasicCard>

        <BasicCard style=" border border-[#E7E5E4]">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-bold">Peer Comparison</span>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AddProspectButton type="button" handleClick={() => {}}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

            </DropdownMenuContent>
            </DropdownMenu>


          </div>
            <Image src="/images/Graph.png" alt="Peer Comparison" width={300} height={200} className="w-full h-auto mb-4" />
        </BasicCard>
      </Grid2Container>

      <BasicCard style=" border border-[#E7E5E4]">
        <Grid2Container>
            {
                InteractionCardData.map((item, index) => (
                    <InteractionCard
                        key={index}
                        title={item.title}
                        statusText={item.statusText}
                        date={item.date}
                    />
                ))
            }

        </Grid2Container>

      </BasicCard>
    </div>
  )
}

export default Customers

const ProfileCategoryCardData = [
  {
    title: "Demograph",
    imageUrl: "/icons/cat1.png",
    isActive: true,
  },
  {
    title: "Portfolio",
    imageUrl: "/icons/cat2.png",
    isActive: false,
  },
  {
    title: "Needs",
    imageUrl: "/icons/cat3.png",
    isActive: false,
  },
  {
    title: "Network",
    imageUrl: "/icons/cat4.png",
    isActive: false,
  },
  {
    title: "Photos/Videos",
    imageUrl: "/icons/cat5.png",
    isActive: false,
  } ,
  {
    title: "Reports",
    imageUrl: "/icons/cat6.png",
    isActive: false,
  }
];

const InteractionCardData = [
    {
        title: "Contact Acquired",
        statusText: "Pending",
        date: "2023-10-01",
    },
    {
        title: "First Meeting Appointment",
        statusText: "Completed",
        date: "2023-10-02",
    },

]