"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { BlueText } from "./Typo"
import { Separator } from "./ui/separator"
import { BasicCard } from "./Cards"

export function CollapsibleCard({
  mainChild,
  collapsibleChildren,
  openedButtonName = "Less Details",
  closedButtonName = "See More",
}: {
  mainChild: React.ReactNode;
  collapsibleChildren: React.ReactNode;
  openedButtonName: string;
  closedButtonName: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <BasicCard style="border border-[#F2F1F1]">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex w-full flex-col gap-2"
      >
        {
          mainChild
        }
        <CollapsibleContent className="flex flex-col gap-2 pt-6">
          {collapsibleChildren}
        </CollapsibleContent>

          <Separator className="border-t border-[#E7E5E4]" />
        
          <CollapsibleTrigger asChild className="">
            <Button variant="ghost" size="icon" className="w-full">
              <BlueText style="text-center" text={isOpen? openedButtonName: closedButtonName} />
            </Button>
          </CollapsibleTrigger>

      </Collapsible>

    </BasicCard>

  )
}
