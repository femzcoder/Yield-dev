"use client"

import { PrimaryTabContainerNoAssistant } from '@/components/Container'
import React from 'react'
import Announcements from './tabpages/announcements/page'
import Leaderboard from './tabpages/leaderboard/page'
import Forum from './tabpages/forum/page'
import QuickAdd from '@/components/quickAdd/QuickAdd'


const Community = () => {
  return (
    <>
      <div className='mb-4 flex w-full justify-end'><QuickAdd/></div>
      <PrimaryTabContainerNoAssistant TabData={TabData}/>
    </>

  )
}

export default Community;

const TabData = [
  { title: 'Announcements', content: <Announcements/> },
  { title: 'Leaderboard', content: <Leaderboard/> },
  { title: 'Forum', content: <Forum/> },
  { title: '', content: '<Partners/>' },
];