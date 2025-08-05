"use client "
import React from 'react'
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

const TabContainer = ({tabData}: {tabData: {title: string; content: React.ReactNode}[]}) => {
    const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <div>
        <div className=' items-center justify-between mb-4 hidden lg:flex'>
            <div className='space-x-3'>
                {tabData.map((tab, index) => (
                    <Tab
                        key={index}
                        title={tab.title}
                        isActive={index === selectedTab}
                        onClick={() => setSelectedTab(index)}
                    />
                ))}
            </div>

            <Button className='rounded-[10px]'> <Plus color='white' size={20}/> <span className='text-white'>Add</span> </Button>
        </div>
        <div className='lg:border border-[#F2F1F1] lg:p-4'>
            {tabData[selectedTab].content}
        </div>
    </div>
  )
}

export default TabContainer

const Tab = ({ title, isActive, onClick }: { title: string; isActive: boolean; onClick: () => void }) => {
  return (
    <button
      className={`px-4 text-gray-700 border-[#F2F1F1] ${isActive ? 'border-t border-l border-r font-semibold rounded-t-[12px] p-3' : ' py-[2px] border border-gray-200 rounded-full '}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
