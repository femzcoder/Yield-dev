"use client"

import { PrimaryTabContainer } from '@/components/Container'
import React from 'react'
import BankIncome from './income/page'
import BankExpenses from './expenses/page'
import BankAnalysis from './analysis/page'
import BankReport from './reports/page'

const Bank = () => {
  return (
    <PrimaryTabContainer TabData={TabData}/>
  )
}

export default Bank

const TabData = [
  { title: 'Income', content: <BankIncome/> },
  { title: 'Expenses', content: <BankExpenses/> },
  { title: 'Analysis', content: <BankAnalysis/> },
  { title: 'Reports', content: <BankReport/> },
];