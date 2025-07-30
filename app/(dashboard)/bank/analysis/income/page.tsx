'use client'

import { BasicCard, InsightWarningCard } from '@/components/Cards'
import { ChatModal, Grid2Container } from '@/components/Container'
import { PurpleButton } from '@/components/OtherButtons'
import { BasicText, TitleText } from '@/components/Typo'
import { Message } from '@/lib/types'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const AnalysisIncome = () => {
  const [open, setOpen] = useState(false);
    // const params = useParams()
    // const currentLang = params?.locale as string;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: (
        <div className='w-full'>
          <p>From your barn we have noticed that 30% of your customers are business owners. You will not only meet their evolving needs but also boost your revenue potential.
            <br/>
            <br/>
        These are 3 concrete ways on how to achieve this.</p>
        <ol className='list-decimal pl-3'>
            <li>Create Employee Benefits Insurance</li>
            <li>Get equipped on business/commercial insurance</li>
            <li>Run worksite events</li>
        </ol>
        <Link href={`/project`}>
            <PurpleButton styles='w-full' text='Create Project'/>
        </Link>
            
        </div>
      ),
    },
  ]);

  const user = { name: "Smart Assistant", position: "AI Chatbot" };

const handleSendMessage = (text: string) => {
  const userMsg: Message = {
    id: messages.length + 1,
    sender: "user", // string literal
    text,
  };

  const botResponse: Message = {
    id: messages.length + 2,
    sender: "bot", // string literal
    text: `You said: ${text}`,
  };

  setMessages((prev) => [...prev, userMsg, botResponse]);
};

  return (
    <div className='space-y-6'>
        <div>
            <TitleText style='text-[24px]' text='New Income Streams'/>
            <BasicText style='font-[400]' text='Grow your other income streams'/>
        </div>
        <Grid2Container>
            <BasicCard style='space-y-4'>
                <div className='w-full lis flex items-center justify-between '>
                    <BasicText text='Explore commercial Insurance'/>
                    <ChevronDown/>
                </div>
                
                <InsightWarningCard
                    handleProceed={()=>setOpen(true)}
                    showCTA={true}
                    flag='Insight'
                    title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
                    icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />  
            </BasicCard>
            <BasicCard style='space-y-4'>
                <div className='w-full flex items-center justify-between '>
                    <BasicText text='Explore commercial Insurance'/>
                    <ChevronDown/>
                </div>

                <InsightWarningCard
                    showCTA={true}
                    flag='Insight'
                    title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
                    icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />  
            </BasicCard>
        </Grid2Container>


        <ChatModal
            open={open}
            onOpenChange={setOpen}
            user={user}
            messages={messages}
            onSendMessage={handleSendMessage}
        />
    </div>
  )
}

export default AnalysisIncome