"use client"

import { AssistantContainer } from '@/components/Container'
import React, {useState} from 'react'
import Overview from './tabPages/Overview'
import Prospects from './tabPages/Prospects'
import Customers from './tabPages/Customers'
import Partners from './tabPages/Partners'

const Barns = () => {
    const [activeTab, setActiveTab] = useState({ title: 'Overview', content: <Overview/> });
  return (
    <AssistantContainer>
        <div className='w-full grid grid-cols-4 p-2 bg-[#F2F1F1]'>
            {
                TabData.map((tab, index) => (
                    <button onClick={() => setActiveTab(tab)} key={index} className={`w-full p-2 text-center ${activeTab.title === tab.title ? 'primary-button-background text-white rounded-3xl' : 'bg-transaperent text-[#722F37]'}`}>
                        {tab.title}
                    </button>
                ))
            }
        </div>

        <div className='lg:p-4'>
            {activeTab.content}
        </div>
    </AssistantContainer>
  )
}

export default Barns

const TabData = [
  { title: 'Overview', content: <Overview/> },
  { title: 'Prospect', content: <Prospects/> },
  { title: 'Customer', content: <Customers/> },
  { title: 'Partner', content: <Partners/> },
];