"use client"

import * as React from "react"
import { ChevronDown, Link2, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BasicCard } from "@/components/Cards"
import { CollapsibleCard } from "@/components/CollapsibleCard"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BlueText, PurpleText, TitleText } from "@/components/Typo"
import { Separator } from "@/components/ui/separator"

export function ScheduleCard() {

  return (
    
      <CollapsibleCard
        mainChild={
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
                <div className="h-full">
                    <p>10:00am</p>
                    <Separator orientation="vertical" className="w-[10px] h-[100px] bg-gray-400"/>
                    <p>10:30am</p>
                </div>
              <div className="space-y-1">
                <h2 className="font-semibold text-[14px]">Doris Parker</h2>
                <p className="text-sm flex items-center gap-2"><MapPin size={18}/> Online meeting</p>
                <p className="text-sm flex items-center gap-2"><Link2 size={18}/> meet.google.com/xsc-vfd-vfv</p>
                <PurpleText text="Prospect" style="text-sm" />
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Action <ChevronDown/></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem  >
                    Message
                  </DropdownMenuItem>
                  <Separator/>
                  <DropdownMenuItem>
                    Call
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        }
        collapsibleChildren={
          <div className="space-y-6 list-disc">
            <BasicCard style="space-y-4">
                <TitleText style="font-semibold text-[24px]" text="Game Plan"/>    

                <ul className="space-y-3">
                    {
                        gamePlanData.map((i, ind)=>
                            <li key={ind} className="list-disc text-[14px]"><span className="font-semibold">{i.title}:</span> {i.desc}</li>
                        )
                    }
                </ul>
            </BasicCard>   
            <BasicCard style="space-y-4">
                <TitleText style="font-semibold text-[24px]" text="Resource"/>    

                <ul>
                    <li className="list-disc text-[14px]"><BlueText text="Scripts"/></li>

                </ul>
            </BasicCard>   
     
          </div>

        }
        openedButtonName="Less Details"
        closedButtonName="See More"
      />
  )
}



export const gamePlanData = [
    {
        title:'Establish Rapport',
        desc:'Demonstrate that you’ve taken the time to understand who she is based on her profile, this thoughtful approach builds intimacy and trust from the start.'
    },
    {
        title:'Demonstrate Credibility',
        desc:"Highlight relevant experience and similar cases you've successfully handled, this shows you’re not just capable, but the right fit for her needs."
    },
    {
        title:'Minimize self-orientation',
        desc:''
    }
]