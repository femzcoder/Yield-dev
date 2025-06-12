"use client";
import TabContainer from "@/components/TabContainer";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SeedPage from "./subTabs/Seeds";

export default function Billboard() {
  // const t = await getTranslations("HomePage");
  return (
    <div className="p-4 space-y-6">
      <div className="bg-white pl-2 flex items-center justify-between gap-4">
        <h3 className="font-semibold">Need Assistant?</h3>
        <div className="flex items-center gap-2 border-2 border-[#722F37]  rounded-l-full px-2 py-1">
          <Image src="/icons/userIcon.png" alt="Assistant Icon" width={24} height={24} />
          <div>
            <h3 className="font-semibold text-[#722F37]">Gabriel</h3>
            <span className="text-[#595657]">Field Analyst</span>
          </div>
          </div>
      </div>

      <TabContainer tabData={TabData}/>
    </div>

  );
}

const TabData = [
  { title: 'Seed', content: <SeedPage/> },
  { title: 'Crops', content: 'Content for Tab 2' },
  { title: 'Harvest', content: 'Content for Tab 3' },
  { title: 'Cellar', content: 'Content for Tab 4' },
];
