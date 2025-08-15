"use client";
import TabContainer from "@/components/TabContainer";
<<<<<<<< HEAD:app/[locale]/(dashboard)/billboard/page.tsx
import SeedPage from "./subTabs/Seeds";
========
import SeedPage from "./subtabs/Seeds";
>>>>>>>> 5ac0a3352530d53b2dc02ade017b2a985d30b6bd:app/dashboard/billboard/page.tsx
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
