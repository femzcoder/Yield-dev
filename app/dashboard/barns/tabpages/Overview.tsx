import { BasicCard, EmptyState, InteractionCard, ProfileCategoryCard } from '@/components/Cards'
import {  Grid2Container } from '@/components/Container'
import { AddProspectButton, PurpleButton } from '@/components/OtherButtons'
import { LinkText, PurpleText, TextWithIcon, TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MessageSquare, Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Needs from './needspages/page'
import { Breadcrumbs } from '@/components/Breadcrumb'
import { useRouter } from 'next/navigation'

const Overview = () => {
    const [activeProspectCard, setActiveProspectCard] = React.useState('');
    const router = useRouter()
    // const handleAddProspectClick = () => {
    //     setActiveProspectCard('');
    // };

    

    useEffect(()=>{
      if(activeProspectCard){
        if(activeProspectCard === 'Demographic'){
          router.push('/dashboard/barns/tabpages/profilepages/demographic')
          // setOpenDemographic(true)
        }else if(activeProspectCard === 'Needs'){
          // setOpenNeeds(true)
        }else if(activeProspectCard === 'Career'){
          router.push('/dashboard/barns/tabpages/careerpages')
        }
      }
    },[activeProspectCard, router])

  return (
    <>
      {/* {
        activeProspectCard ?
        ProfileCategoryCardData.find((i)=>i.title === activeProspectCard)?.content
        :     */}
      <div className='space-y-8'>
        <div>
          <Breadcrumbs
              items={[
                { title: "Barn", url: "/" },
                { title: "Contact", url: "/docs" },
                { title: "Kiara Das" },
              ]}
            />

            <TitleText text="Kiara Das's Profile" style='text-[24px]'/>          
        </div>


        <Grid2Container>
          <BasicCard style=" border border-[#E7E5E4] w-full space-y-4">
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2">
                  <Image src="/icons/userIcon.png" alt="Insight Icon" width={24} height={24} className="inline-block mr-2" />
                  <div>
                      <h3 className="font-semibold text-[#722F37]">Gabriel</h3>
                      <div className="hidden md:flex items-center gap-2">
                          <Button variant="default" size={'sm'} className='rounded-[8px] text-white'>Green Field</Button>
                          <Button variant="default" size={'sm'} className='rounded-[8px] text-white'>VIP-LTV</Button>
                      </div>
                  </div>
              </div>
              <div>
                {/* <PlanConverstaionModal/> */}
                <PurpleButton text='Enrich'/>
              </div>
              

            </div>

            <div className='bg-[#F2F1F1] rounded-3xl p-2 flex items-center justify-between mb-4 blur-xs'>
              <TextWithIcon text="+91 81658 78656" icon={<Phone size={16} color='#C58B18' />} />
              <TextWithIcon text="kias@gmail.com" icon={<MessageSquare size={16} color='#C58B18' />} />
            </div>


            <div className='flex justify-between items-center' >
              <div className='space-y-2'>
                <PurpleText text='Prospect'/>
                <p className='text-xs'>Created at: <span className='font-bold'>Feb 2025</span></p>
                <p className='text-xs'>Active Policies: <span className='font-bold'>0</span></p>
                <p className='text-xs'>Last Enriched: <span className='font-bold'>0</span></p>
              </div>
              <div className='space-y-2'>
                <p className='font-bold border border-[#F2F1F1] rounded-[8px] px-2'> SGD 250,000.00  LTV</p>
                <p className='text-xs'>Last Interaction: <span className='font-bold'>1 day ago</span></p>
                <p className='text-xs'>Last Updated: <span className='font-bold'>Today</span></p>
                <p onClick={()=>{}} className='text-xs underline'>Profile History</p>
              </div>

            </div>


            <div className="w-full border-t border-[#E7E5E4] pt-2">
              <div className="mb-6 flex items-center justify-between">
              <LinkText text="Profile Categories" style="font-bold" linkUrl="/dashboard/barns" />
              </div>
              <Grid2Container>
                {
                    ProfileCategoryCardData.map((item, index) => (
                        <ProfileCategoryCard
                            key={index}
                            status={item.status}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            isActive={item.title === activeProspectCard}
                            handleClick={() => {
                                if(item.status === 'active' && !item.isActive){
                                  setActiveProspectCard(item.title);
                                }
                                
                            }}
                        />
                    ))
                }
              </Grid2Container>
            </div>
          </BasicCard>

          <div className='space-y-4'>
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
                <EmptyState/>
                {/* <Image src="/images/Graph.png" alt="Peer Comparison" width={300} height={200} className="w-full h-auto mb-4" /> */}
            </BasicCard>
            <BasicCard style=" border border-[#E7E5E4]">
              <TitleText text="Interactions" style="mb-4" />
              
                  {
                    InteractionCardData.length === 0 ? (
                      <EmptyState />
                    ) : ( 
                      <div className='grid grid-cols-2 gap-3'>
                        {
                        InteractionCardData.map((item, index) => (
                            <InteractionCard
                                key={index}
                                title={item.title}
                                statusText={item.statusText}
                                date={item.date}
                            />
                        ))}
                    </div>
                    )
                  }



            </BasicCard>
          </div>


        </Grid2Container>




      </div>  
      {/* } */}


      {/* <ProfileHistoryModal
        open={openProfile}
        onOpenChange={setOpenProfile}
      />
      <Demographic
        create={false}
        open={openDemographic}
        onOpenChange={setOpenDemographic}
      />
      <Careers
        open={openCareer}
        onOpenChange={setOpenCareer}
      /> */}
    </>

  )
}

export default Overview

const ProfileCategoryCardData = [
  {
    status: 'active',
    title: "Demographic",
    imageUrl: "/icons/cat1.png",
    content: '',
    isActive: false,
  },
  {
    status: 'active',
    title: "Career",
    imageUrl: "/icons/cat1.png",
    content: '',
    isActive: false,
  },
  {
    status: 'inactive',
    title: "Finance",
    imageUrl: "/icons/cat2.png",

    isActive: false,
  },
  {
    status: 'inactive',
    title: "Needs",
    content: <Needs/>,
    imageUrl: "/icons/cat3.png",
    isActive: false,
  },
  {

    status: 'inactive',
    title: "Network",
    imageUrl: "/icons/cat4.png",
    isActive: false,
  },
  {
    status: 'inactive',
    title: "Media",
    imageUrl: "/icons/cat5.png",
    isActive: false,
  } ,
  {
    status: 'inactive',
    title: "Files",
    imageUrl: "/icons/cat6.png",
    isActive: false,
  },
  {
    status: 'inactive',
    title: "Others",
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