import React from 'react'

import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import AnalysisCashFlow from './cashflow/page'
import AnalysisROS from './returnOnSpend/page'
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