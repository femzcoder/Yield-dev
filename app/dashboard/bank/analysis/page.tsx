import React from 'react'
import AnalysisCashFlow from './cashflow/page'
import AnalysisROS from './returnonspend/page'
import AnalysisIncome from './income/page'
import { SecondaryTabContainer } from '@/components/Container'

const BankAnalysis = () =>{
  return (
    <SecondaryTabContainer TabData={TabData}/>

  )
}

export default BankAnalysis

const TabData = [
  { title: 'Cashflow', content: <AnalysisCashFlow/> },
  { title: 'Return on Spend', content: <AnalysisROS/> },
  { title: 'New Income Streams', content: <AnalysisIncome/> },
];