import { BasicCard, EmptyState, InsightWarningCard } from "@/components/Cards";
import { Grid2Container } from "@/components/Container";
import CustomSlider from "@/components/CustomSlider";
import { LinkText, TitleText } from "@/components/Typo";
import { TrendingCardData } from "@/lib/data";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddProspectButton } from "@/components/OtherButtons";

export default function SeedPage() {
  // const t = await getTranslations("HomePage");
  return (
    <div className="space-y-6">

      <div className="">
        <TitleText text="Ideas from barn" style="font-[500] text-[20px]" />
         <CustomSlider slidesData={TrendingCardData} />
      </div>

      <Grid2Container>
        <BasicCard style="h-[400px] border border-[#E7E5E4]">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-bold">From your Market</span>
            <div className="flex items-center gap-2">
                <Image src="/icons/goto-market.png" alt="Arrow Right Icon" width={12} height={12} className="inline-block ml-1" />
                <LinkText style="font-[500]" text="Go to Market" linkUrl="/market" />
            </div>
          </div>
          <InsightWarningCard 
            title="You do not have any relevant leads in the market" 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />
        
            <EmptyState />

        </BasicCard>

        <BasicCard style="h-[400px] border border-[#E7E5E4]">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-bold">Staging 0: Opportunities</span>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AddProspectButton type="button" handleClick={() => {}}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

            </DropdownMenuContent>
            </DropdownMenu>


          </div>
          <InsightWarningCard 
            title="You do not have any relevant leads in the market" 
            icon={<Image src="/icons/insightIcon.png" alt="Insight Icon" width={24} height={24} />} />
            <EmptyState />
        </BasicCard>
      </Grid2Container>
    </div>

  );
}
