// components/Careers.tsx
"use client"

import { BasicCard } from "@/components/Cards"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { ProfileFormValues } from "@/lib/types"
import { Dialog, DialogContent,  DialogFooter,  DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft } from "lucide-react"
import { TitleText } from "@/components/Typo"
import { useState } from "react"
import EmploymentInformation from "./career-content/EmploymentInformation"
import EducationInformation from "./career-content/EducationInformation"
import CompanyInformation from "./career-content/CompanyInformation"

const Careers = (
  {
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}
) => {
    const [isPreview, setIsPreview] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      occupation: '',
      employer: '',
      citizen_status: '',
      country: '',
      province: '',
      city: '',
      id_method: '',
      id_number: '',
      degree: '',
        firstname: '',
      lastname: '',
      gender: '',
      marital_status: '',
      dob: '',
        phone: '',
      email: '',
      address: '',
      languages: [{
        name: 'English',
        level: "basic" 
      }]
    }
  })

  const onSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    console.log("Form Submitted:", data)
  }

  const accordionData = [

    {
      title: "Employment Information",
      date: "Created on: 17 Feb 25",
      content: (
        <EmploymentInformation control={control} register={register} errors={errors} />
      ),
    },
    {
      title: "Company Information",
      date: "Created on: 17 Feb 25",
      content: (
        <CompanyInformation control={control} register={register} errors={errors} />
      ),
    },
    {
      title: "Education Information",
      date: "Created on: 17 Feb 25",
      content: (
        <EducationInformation register={register} control={control} errors={errors} />
      ),
    },

  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0 max-h-[80vh] ">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Demographic</h3>
          </div>
        </DialogHeader>

        <div className="px-6">
          <TitleText text="Demographics"style="text-[#2D2D2D] text-sm font-semibold"/>
          <TitleText text="17 February, 2025"style="text-[#2D2D2D] text-sm font-medium"/>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 h-full overflow-y-auto">
          <BasicCard>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4 "
              defaultValue="item-0"
            >
              {accordionData.map((item, id) => (
                <AccordionItem key={id} className="border-none space-y-3" value={`item-${id}`}>
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

          {/* <Button type="submit">Submit</Button> */}
        </form>
        <DialogFooter className="p-3">
                {!isPreview ? (
                  <Button
                    className="rounded-[8px] text-white"
                    onClick={() => setIsPreview(true)}
                    type="submit"
                  >
                    Preview
                  </Button>
                ) : (
                  <div className="flex w-full items-center justify-between">
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
        </DialogFooter>
      </DialogContent>

    </Dialog>

  )
}

export default Careers
