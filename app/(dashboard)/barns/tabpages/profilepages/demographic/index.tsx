// components/Demographic.tsx
"use client"

import { BasicCard } from "@/components/Cards"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useForm, SubmitHandler } from "react-hook-form"
import EmploymentInformation from "./demograph-content/EmploymentInformation"
import { Button } from "@/components/ui/button"
import PersonalInformation from "./demograph-content/PersonalInformation"
import ContactInformation from "./demograph-content/ContactInformation"
import CitizenInformation from "./demograph-content/CitizenInformation"
import EducationInformation from "./demograph-content/EducationInformation"
import { ProfileFormValues } from "@/lib/types"

type FormValues = {
  occupation: string
  employer: string
  citizen_status: string
  country: string
  province: string
  city: string
  id_method: string
  id_number: string
  degree: string
}

const Demographic = () => {
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data)
  }

  const accordionData = [
    {
      title: "Personal Information",
      date: "Created on: 17 Feb 25",
      content: <PersonalInformation control={control} register={register} errors={errors} />
    },
    {
      title: "Contact Information",
      date: "Created on: 17 Feb 25",
      content: <ContactInformation control={control} register={register} errors={errors} />,
    },
    {
      title: "Citizen Information",
      date: "Created on: 17 Feb 25",
      content: <CitizenInformation control={control} register={register} errors={errors}/> ,
    },
    {
      title: "Employment Information",
      date: "Created on: 17 Feb 25",
      content: (
        <EmploymentInformation control={control} register={register} errors={errors} />
      ),
    },
    {
      title: "Education Information",
      date: "Created on: 17 Feb 25",
      content: (
        <EducationInformation register={register} control={control} errors={errors} />
      ),
    },
    {
      title: "Health Information",
      date: "Created on: 17 Feb 25",
      content: <p>Health section content here</p>,
    },
    {
      title: "Others Information",
      date: "Created on: 17 Feb 25",
      content: <p>Other section content here</p>,
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  <p className="text-[#595657] font-[300] text-[12px]">{item.date}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BasicCard>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Demographic
