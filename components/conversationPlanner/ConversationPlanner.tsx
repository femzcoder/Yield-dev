import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, LucideSend, Plus, Send, SendIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { BasicCard } from "../Cards"
import { TitleText } from "../Typo"
import { gamePlanData } from "@/app/[locale]/almanac/ScheduleCard"
import { ConverstaionScriptModal } from "./ConversationScript"

export function ConverstaionPlannerModal() {
  const TabData = [
    { title: 'Situation', content: (
        <>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iste atque inventore nobis, eligendi, enim tempore voluptas quod totam possimus dolore ducimus quam, nemo ex suscipit libero cupiditate rerum quibusdam!</p>
        </>
    ) },
    { title: 'Need', content: (
        <>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reprehenderit exercitationem pariatur a enim quasi corporis voluptatum, ex doloribus omnis consequuntur non? Dignissimos nulla explicabo quo unde, itaque optio nihil?</p>
        </>
    ) },
    { title: 'Objection', content: (
        <>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, et quidem. Repudiandae error iusto labore, impedit minima dolor. Maiores ullam necessitatibus ad excepturi exercitationem possimus eligendi, inventore voluptatibus! Quos, maiores!</p>
        </>
    ) },
    ];


        const [activeTab, setActiveTab] = useState(TabData[0])
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#7A003F] text-sm rounded-4xl py-1 px-3 text-white">
          View Conversation Planner
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col bg-white border-none rounded-3xl p-0">
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1">
            <ArrowLeft/>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-3 py-2 px-3 mt-2">


            <BasicCard style="border border-[#E7E5E4]">
                <div>
                    <TitleText style="font-semibold text-[16px]" text="Game Plan"/>  
                    <div className='w-full overflow-x-auto flex  lg:grid grid-cols-4 p-2'>
                        {
                            TabData.map((tab, index) => (
                                <button onClick={() => setActiveTab(tab)} key={index} className={`min-w-[100px] w-full min p-2 text-left text-sm border-b ${activeTab.title === tab.title ? ' gradient-text border-[#C58B18] font-semibold' : ' border-[#DBDBDB] text-[#595657]'}`}>
                                    {tab.title}
                                </button>
                            ))
                        }
                    </div>

                    <div className='p-2'>
                        {activeTab.content}
                    </div>      
                </div>
            </BasicCard>

            <BasicCard style=" border border-[#E7E5E4] space-y-1 p-2 bg-transparent">
                <div className="flex justify-between w-full items-center">
                    <TitleText style="font-semibold text-[16px]" text="Game Plan"/>
                    <ConverstaionScriptModal/>
                </div>
                    

                <ul className="space-y-3 p-2">
                    {
                        gamePlanData.map((i, ind)=>
                            <li key={ind} className="list-disc text-[14px]"><span className="font-semibold">{i.title}:</span> {i.desc}</li>
                        )
                    }
                </ul>
            </BasicCard>  
            <BasicCard style="border border-[#E7E5E4] space-y-1 p-2 bg-transparent">
                <TitleText style="font-semibold text-[16px]" text="Output"/>    

                <ul className="space-y-3 p-2">
                    {
                        (gamePlanData.slice(0,1)).map((i, ind)=>
                            <li key={ind} className="list-disc text-[14px]"><span className="font-semibold">{i.title}:</span> {i.desc}</li>
                        )
                    }
                </ul>
            </BasicCard>  

        </div>



      </DialogContent>
    </Dialog>
  )
}



