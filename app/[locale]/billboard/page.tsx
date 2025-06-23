"use client";
import TabContainer from "@/components/TabContainer";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SeedPage from "./subTabs/Seeds";
import { AssistantContainer } from "@/components/Container";

export default function Billboard() {
  // const t = await getTranslations("HomePage");
  return (
    <AssistantContainer>
      <TabContainer tabData={TabData}/>
    </AssistantContainer>
  );
}

const TabData = [
  { title: 'Seed', content: <SeedPage/> },
  { title: 'Crops', content: 'Content for Tab 2' },
  { title: 'Harvest', content: 'Content for Tab 3' },
  { title: 'Cellar', content: 'Content for Tab 4' },
];
