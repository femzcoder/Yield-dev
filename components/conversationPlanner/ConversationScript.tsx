import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, LucideShare } from "lucide-react"
import { useState } from "react"
import { BasicCard } from "../Cards"
import { BlueText, TitleText } from "../Typo"
import { gamePlanData } from "@/app/(dashboard)/almanac/ScheduleCard"

export function ConverstaionScriptModal() {
  const TabData = [
    { title: 'Scenario 1', content: (
        <>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iste </p>
                <TitleText style="text-[#595657] text-sm mt-6" text="Key Points:"/>
                <ul className="space-y-3 p-2">
                    {
                        gamePlanData.slice(0,2).map((i, ind)=>
                            <li key={ind} className="list-disc text-[12px]"><span className="font-semibold">{i.title}:</span> {i.desc}</li>
                        )
                    }
                </ul>
        </>
    ) },
    { title: 'Scenario 2', content: (
        <>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reprehenderit exercitationem pariatur a enim quasi corporis voluptatum, ex doloribus omnis consequuntur non? Dignissimos nulla explicabo quo unde, itaque optio nihil?</p>
        </>
    ) },
    { title: 'Scenario 2', content: (
        <>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, et quidem. Repudiandae error iusto labore, impedit minima dolor. Maiores ullam necessitatibus ad excepturi exercitationem possimus eligendi, inventore voluptatibus! Quos, maiores!</p>
        </>
    ) },
    ];


        const [activeTab, setActiveTab] = useState(TabData[0])
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="">
          <BlueText style="font-semibold" text="See Script"/>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col bg-white border-none rounded-3xl p-0">
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1">
            <ArrowLeft/>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-3 py-2 px-3 mt-2">
            <div className="w-full flex justify-between items-center">
                <div>
                    <TitleText style="gradient-text" text="Conversational Planner"/>
                    <TitleText style="text-[#595657] text-[14px]" text="Conversational Planner"/>
                </div>
                <Button variant={'outline'} className="rounded-3xl"><LucideShare/> Share</Button>
            </div>

            <TitleText style="font-bold text-[18px]" text="Your Script"/> 
            <BasicCard style="border border-[#E7E5E4]">
                <div>
                     
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

 

        </div>



      </DialogContent>
    </Dialog>
  )
}



