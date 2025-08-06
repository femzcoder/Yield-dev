"use client"

import { PrimaryTabContainer } from '@/components/Container'
import React from 'react'
import Customers from './tabpages/Customers'
import Overview from './tabpages/Overview'
import Queue from './tabpages/Partners'
import Contacts from './tabpages/Contacts'


const Barns = () => {
  return (
    <PrimaryTabContainer TabData={TabData}/>
  )
}

export default Barns

const TabData = [
  { title: 'Overview', content: <Overview/> },
  { title: 'Contacts', content: <Contacts/> },
  // { title: 'Customer', content: <Customers/> },
  { title: 'Queue', content: <Queue/> },
];