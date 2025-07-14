"use client"

import { PrimaryTabContainer } from '@/components/Container'
import React from 'react'
import Overview from './tabPages/Overview'
import Prospects from './tabPages/Prospects'
import Customers from './tabPages/Customers'
import Partners from './tabPages/Partners'

const Barns = () => {
  return (
    <PrimaryTabContainer TabData={TabData}/>
  )
}

export default Barns

const TabData = [
  { title: 'Overview', content: <Overview/> },
  { title: 'Prospect', content: <Prospects/> },
  { title: 'Customer', content: <Customers/> },
  { title: 'Partner', content: <Partners/> },
];