"use client";

import { BasicCard } from "@/components/Cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import ProspectNeed from "./needs-content/ProspectNeeds";
import SavingsandInvestment from "./needs-content/SavingsandInvestment";
import CriticalIllness from "./needs-content/CriticalIllness";
import { useState } from "react";
import { NeedsFormValues } from "@/lib/types";

// ✅ Unified FormValues for the entire form


const Needs = () => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  // ✅ All form fields are typed here
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NeedsFormValues>({
    defaultValues: {
      wealthAccumulation: [],
      protection: [],
      beneficiary: "",
      calculationType: "",
      amountNeeded: 0,
      yearsNeeded: 0,
      totalAmountNeeded: 0,
      c_beneficiary: '',
      c_calculationType: '',
      c_amountNeeded: 0,
      c_yearsNeeded: 0,
      c_liabilities: '',
      c_existingSupport: '',
      c_totalAmountNeeded: 0,
    },
  });

  const onSubmit: SubmitHandler<NeedsFormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  const accordionData = [
    {
      title: "Prospect Needed",
      content: <ProspectNeed control={control} errors={errors} />,
    },
    {
      title: "Savings & Investment",
      content: <SavingsandInvestment control={control} errors={errors} />,
    },
    {
      title: "Critical Illness",
      content: <CriticalIllness control={control} errors={errors} />,
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <BasicCard>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          defaultValue="item-0"
        >
          {accordionData.map((item, id) => (
            <AccordionItem
              key={id}
              className="border-none space-y-3"
              value={!isPreview ? `item-${id}` : "item"}
            >
              <AccordionTrigger className="border shadow-lg border-[#F2F1F1] rounded-[12px] px-3">
                <div>
                  <p>{item.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BasicCard>

      <div>
        {!isPreview ? (
          <Button
            className="rounded-[8px] text-white"
            onClick={() => setIsPreview(true)}
            type="submit"
          >
            Preview
          </Button>
        ) : (
          <div className="flex items-center justify-between">
            <Button
              className="rounded-[8px]"
              onClick={() => setIsPreview(false)}
              variant={"secondary"}
              type="button"
            >
              Edit
            </Button>
            <Button className="rounded-[8px] text-white" type="submit">
              Save
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Needs;
