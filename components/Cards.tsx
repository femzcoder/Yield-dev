"use client "
import Image from "next/image";
import { BlueText, PurpleText, TitleText } from "./Typo";
import { ChevronRight, OctagonAlert } from "lucide-react";
import { Separator } from "./ui/separator";
import { SlideCardProps } from "@/lib/types";

export const BasicCard = ({ children, style }: { children: React.ReactNode, style?: string }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-3 md:p-6 ${style}`}>
      {children}
    </div>
  );
}
export const BasicCard2 = ({ children, style }: { children: React.ReactNode, style?: string }) => {
  return (
    <div className={`bg-white border border-[#F2F1F1] rounded-2xl p-3 md:p-6 ${style}`}>
      {children}
    </div>
  );
}

export const InsightWarningCard = ({ title, flag, showCTA, isPurple, handleDismiss, handleProceed}: { title: string, icon: React.ReactNode, flag?: string, showCTA?:boolean, isPurple?:boolean, handleDismiss?:()=>void, handleProceed?:()=>void }) => {
  return (
    <div className="primary-button-background py-[.8px] px-[1px] shadow-md rounded-[8px]">
      <div className="  p-4 flex items-start gap-4 bg-white rounded-[8px]">
        <div className="text-blue-500">
          <Image src="/icons/userIcon.png" width={100} height={100} alt="Warning Icon" className="inline-block mr-2" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center">
            <Image src="/icons/warningIcons.png" alt="Insight Icon" width={24} height={24} className="inline-block mr-2" />
            {isPurple ? <PurpleText text={flag || ""}/> : <span className="text-[#C79438]">{flag}</span>}
          </div>
          <h3 className="text-[14px] font-[300]">{title}</h3>
          {
            showCTA &&
            <div className="flex items-center gap-3">
              <button onClick={handleDismiss} className="bg-[#F2F1F1] text-[12px] border border-[#595657] rounded-4xl py-1 px-3 text-[#2D2D2D]">Dismiss</button>
              <button onClick={handleProceed} className="bg-[#7A003F] text-[12px] border border-[#595657] rounded-4xl py-1 px-3 text-white">Get Briefing</button>
            </div>            
          }

        </div>
      </div>
    </div>

  );
}



export const IdeaCard = ({ title, description, imageUrl, buttonText, handleClick }: SlideCardProps) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="z-[-1] relative bg-white shadow-md rounded-2xl flex-col flex items-start justify-center p-6 w-[250px] md:w-[300px] min-w-[250px] min-h-[150px]">
      <div className="overlay"></div>
      <h3 className="text-lg text-white">{title}</h3>    
      <span className="text-white font-[300] text-[12px]">{description}</span>
      <button onClick={handleClick} className="bg-[#F2F1F1] text-[14px] border border-[#595657] rounded-4xl py-[2px] px-4 text-[#2D2D2D] font-medium mt-2">{buttonText}</button>

    </div>
  );
}
export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Image src="/icons/no-data.png" alt="Empty State" width={50} height={50} className="mb-3" />
      <span className="text-gray-500">You have no data</span>
    </div>
  );
}

export const ProfileCategoryCard = ({ title, imageUrl, isActive, handleClick }: { title: string, imageUrl: string, isActive: boolean, handleClick: () => void }) => {
  return (
    <div className={`bg-white shadow-md rounded-[8px] px-4 relative py-3 flex items-center gap-4 ${isActive ? 'border-2 border-[#C58B18]' : ''}`} onClick={handleClick}>
      {
        isActive && <div className="absolute top-3 right-3 primary-button-background w-[7px] h-[7px] rounded-full"></div>
      }

      <Image src={imageUrl} alt={title} width={20} height={20} className="" />

      <div>
        <span className={`text ${isActive ? 'gradient-text font-semibold' : ''}`}>{title}</span>
      </div>
    </div>
  );
}

export const InteractionCard = ({ title, statusText, date }: { title: string, statusText: string, date: string }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-start justify-between border-[#F2F1F1] border-[.5px] ">
      <div className="flex w-full items-center gap-3">
        <div className="primary-button-background w-[7px] h-[7px] rounded-full"></div>
        <div className="flex w-full items-center justify-between gap-4 ">
          <h3 className="text-[14px] font-medium">{title}</h3>
          {
            statusText === "Done"? <PurpleText text={statusText} style="text-sm"/>:
            statusText === "Upcoming"? <span className="text-sm gradient-text">{statusText}</span>:
            ""
          }
          
        </div>
      </div>

    <div className="flex gap-3">
      <Separator className="w-[3px] ml-[3px] mt-[-5px] primary-button-background" orientation="vertical"/>
      <div className="">
        <p className="text-gray-600 text-[14px] font-medium">{date}</p>
        <div className="flex items-center">
          <BlueText style="text-sm" text="View" />
          <ChevronRight color="#007AFF" size={16}/>
        </div>        
      </div>      
    </div>


    </div>
  );
}


export const ContactStartCard = ({title, value}:{title:string, value:number}) =>(
  <div className="bg-[#7A003F] px-3 py-4 rounded-2xl space-y-4">
    <div className="flex w-full justify-between items-center">
      <TitleText style="text-white" text={title}/>
      <OctagonAlert size={18} color="white"/>
    </div>

    <TitleText style="text-white" text={String(value)} />
  </div>
)

export const Legend = ({range, color, label}:{range:string, color:string, label:string}) =>(
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
            <div style={{backgroundColor:color}} className={` h-[5px] w-[5px] rounded-full`}></div>
            <span className='text-sm font-medium'>{range}</span>
        </div>

        <span className='text-sm font-medium'>{label}</span>

    </div>
)