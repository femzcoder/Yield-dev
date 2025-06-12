"use client "
import Image from "next/image";

export const BasicCard = ({ children, style }: { children: React.ReactNode, style?: string }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-3 md:p-6 ${style}`}>
      {children}
    </div>
  );
}

export const InsightWarningCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return (
    <div className="primary-button-background py-[.8px] px-[1px] shadow-md rounded-[8px]">
      <div className="  p-4 flex items-start gap-4 bg-white rounded-[8px]">
        <div className="text-blue-500">
          <Image src="/icons/userIcon.png" alt="Warning Icon" width={28} height={28} className="inline-block mr-2" />
        </div>
        <div className="space-y-3">
          <div>
            <Image src="/icons/warningIcons.png" alt="Insight Icon" width={24} height={24} className="inline-block mr-2" />
            <span className="text-[#C79438]">Insights</span>
          </div>
          <h3 className="text-[14px] font-[300]">{title}</h3>
          <div className="flex items-center gap-3">
            <button className="bg-[#F2F1F1] text-[12px] border border-[#595657] rounded-4xl py-1 px-3 text-[#2D2D2D]">Dismiss</button>
            <button className="bg-[#7A003F] text-[12px] border border-[#595657] rounded-4xl py-1 px-3 text-white">Get Briefing</button>
          </div>
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