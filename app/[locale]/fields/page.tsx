"use client"

import { AssistantContainer } from '@/components/Container'
import React, {useState} from 'react'
import Enrich from './subTabs/enrich/page';
import Engage from './subTabs/engage/page';


const Barns = () => {
    const [activeTab, setActiveTab] = useState({ title: 'Enrich', content: <Enrich/> });
  return (
    <AssistantContainer>
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 p-2 bg-[#F2F1F1]'>
            {
                TabData.map((tab, index) => (
                    <button onClick={() => setActiveTab(tab)} key={index} className={`w-full p-2 text-center ${activeTab.title === tab.title ? 'primary-button-background text-white rounded-3xl' : 'bg-transaperent text-[#722F37]'}`}>
                        {tab.title}
                    </button>
                ))
            }
        </div>

        <div className='p-4'>
            {activeTab.content}
        </div>
    </AssistantContainer>
  )
}

export default Barns

const TabData = [
  { title: 'Enrich', content: <Enrich/> },
  { title: 'Engage', content: <Engage/> },
];