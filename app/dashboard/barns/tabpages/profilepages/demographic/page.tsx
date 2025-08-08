// components/Demographic.tsx
"use client"

import { BasicCard, BasicCard2 } from "@/components/Cards"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useForm, SubmitHandler } from "react-hook-form"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import PersonalInformation from "./demograph-content/PersonalInformation"
import ContactInformation from "./demograph-content/ContactInformation"
import CitizenInformation from "./demograph-content/CitizenInformation"
// import EducationInformation from "../../careerpages/career-content/EducationInformation"
import { ProfileFormValues } from "@/lib/types"
import { ArrowLeft } from "lucide-react"
import { TitleText } from "@/components/Typo"
import { useEffect, useState } from "react"
import SuccessModal from "@/components/common/modals/SuccessModals"
import HealthInformation from "./demograph-content/HealthInformation"
import { useRouter } from "next/navigation"

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
  const router =  useRouter()
    const [isPreview, setIsPreview] = useState<boolean>(false);
    const [isSuccessful, setIsSuccessful]= useState(false)
    const [isCreate, setIsCreate]= useState(true)
    const [selectedValue, setSelectedValue] = useState('')
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
    setIsSuccessful(true)
  }

  useEffect(()=>{
    if(selectedValue !== ''){
      setIsCreate(false)
    }
  },[selectedValue])

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
      title: "Health Information",
      date: "Created on: 17 Feb 25",
      content: <HealthInformation control={control} register={register} errors={errors}/>
    },
    {
      title: "Others Information",
      date: "Created on: 17 Feb 25",
      content: <p>Other section content here</p>,
    },
  ]

  return (
    <>
        <div className=" flex flex-col bg-white border-none md:rounded-2xl p-0 md:max-h-[85vh] w-full h-full">
          {/* Header */}
          <div className="bg-[#FAFAF9] shadow-xl py-2">
            <div className="flex items-center gap-1 px-4">
              <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
              <h3 className="text-sm font-semibold">{isCreate? 'Create' : 'Demographic'}</h3>
            </div>
          </div>

          { isCreate ?
            <div className="p-10 space-y-1">
              <TitleText text="What would you like to create?" style="!font-medium"/>
              <RadioGroup 
                defaultValue={selectedValue}
                onValueChange={(value) => setSelectedValue(value)}
                >
                <BasicCard2 style="flex items-center justify-between !p-3 !rounded-[12px] gap-3">
                  <Label htmlFor="r1">Create contact as prospect</Label>
                  <RadioGroupItem value="prospect" id="r1" />
                </BasicCard2>
                <BasicCard2 style="flex items-center justify-between !p-3 !rounded-[12px] gap-3">
                  <Label htmlFor="r2">Create contact as customer</Label>                  
                  <RadioGroupItem value="customer" id="r2" />

                </BasicCard2>
                <BasicCard2 style="flex items-center justify-between !p-3 !rounded-[12px] gap-3">
                  <Label htmlFor="r3">Create contact as others</Label>                  
                  <RadioGroupItem value="others" id="r3" />

                </BasicCard2>
              </RadioGroup>
            </div>:

            <>
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
                      <AccordionTrigger className="border shadow-lg border-[#F2F1F1] rounded-[8px] px-3">
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

              <div className="w-full absolute bottom-0 bg-white p-2">
                      {!isPreview ? (
                        <Button
                          className="rounded-[8px] text-white"
                          onClick={() => setIsPreview(true)}
                          type="button"
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
                          <Button type='submit' className="rounded-[8px] text-white" >
                            Save
                          </Button>
                        </div>
                      )}
              </div>

            </form>              
            </>
          }

        
        </div>
   
      <SuccessModal
        open={isSuccessful}
        onOpenChange={setIsSuccessful}
        title="Contact Created Successfully"
      />
    </>


  )
}

export default Demographic
