"use client"

import { BasicCard } from "@/components/Cards";
import { Grid2Container } from "@/components/Container";
import CustomSlider from "@/components/CustomSlider";
import { WalletButton } from "@/components/OtherButtons";
import { LinkText, TitleText } from "@/components/Typo";
import { TrendingCardData } from "@/lib/data";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  // const t = await getTranslations("HomePage");
  return (
    <div className="p-4 space-y-6">
      <button className="absolute bottom-0 right-4 primary-button-background text-white rounded-full h-[50px] w-[50px] flex justify-center items-center"><Plus size={20}/></button>

      <div className="mb-10">
        <h3 className="font-[400]">Looking Sharp</h3>
        <TitleText text="David Shepard" style="gradient-text font-[900] text-[28px]" />
      </div>

      <Grid2Container>
        <BasicCard style="">
          <div className="mb-6 space-y-2">
            <WalletButton type="button" handleClick={() => {}} />
            <span className="font-semibold text-[18px] mt-4">$5,000.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px]">You are <span className="text-[#009F2B]">+4%</span> up from last year</span>

            <div className="flex items-center gap-2">
              <LinkText text="See More" style="text-[12px]" linkUrl="/"/>
              <Image src="/icons/see-more.png" alt="Arrow Right Icon" width={12} height={12} className="inline-block ml-1" />
            </div>
            
          </div>
        </BasicCard>
        
        <div>
          <TitleText text="My SideKicks" style="font-[500] text-[20px] mb-4" />

          <div>
            <div className="flex justify-between md:justify-normal items-center gap-4">
              {sideKicksData.map((sideKick, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-2">
                  <Image src={sideKick.image} alt={`${sideKick.name} Icon`} width={40} height={40} className="rounded-full" />
                  <span className="text-[14px]">{sideKick.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Grid2Container>

      <div className="">
        <TitleText text="Trending" style="font-[500] text-[20px]" />
         <CustomSlider slidesData={TrendingCardData} />
      </div>
     
    </div>

  );
}

const sideKicksData = [
  {
    name: "Christina",
    image:"/icons/userIcon.png"
  },
  {
    name: "Patrick",
    image:"/icons/userIcon.png"
  },
  {
    name: "Gabriel",
    image:"/icons/userIcon.png"
  },
  {
    name: "Joe",
    image:"/icons/userIcon.png"
  },
  {
    name: "Myra",
    image:"/icons/userIcon.png"
  }
]