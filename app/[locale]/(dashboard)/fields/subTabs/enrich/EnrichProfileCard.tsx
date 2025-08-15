"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { InsightWarningCard } from "@/components/Cards"
import { CollapsibleCard } from "@/components/CollapsibleCard"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PurpleText } from "@/components/Typo"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export function EnrichProfileCard() {
  const [showMessage, setShowMessage] = React.useState(false)

const MessageView = () => (
  <div className="grid w-full gap-2">
    <Textarea className="bg-[#F2F1F1] border-none outline-none" placeholder="Type your message here." />
    <div className="flex justify-end">
      <Button variant={'purple'} className="rounded-[12px]">Send</Button>
    </div>
  </div>
)


  return (
    
      <CollapsibleCard
        mainChild={
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-[14px]">Doris Parker</h2>
                <p className="text-sm text-[#57534E]">doris.parker@gmail.com</p>
                <p className="text-sm text-[#57534E]">+65 1282 4033</p>
                <PurpleText text="Prospect" style="text-sm" />
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Action <ChevronDown/></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={()=>setShowMessage(true)}>
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
          <div className="space-y-6">
            <InsightWarningCard
              flag="Insight"
              title="Kiara was promoted 2 years ago. This signals strong career stability and upward momentum which is a great indicator of long-term financial planning potential." 
              icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />     

              {
                showMessage && <MessageView/>
              }       
          </div>

        }
        openedButtonName="Less Details"
        closedButtonName="See More"
      />
  )
}
