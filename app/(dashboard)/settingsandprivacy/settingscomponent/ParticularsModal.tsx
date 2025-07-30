import { FormInput, FormPhoneInput } from "@/components/common/FormInput"
import { TitleText } from "@/components/Typo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent,  DialogFooter,  DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"


function ParticularsModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [profileData, setProfileData] = useState<{
    id: string
    phone: string 
    alt_phone: string
    email: string
    alt_email: string
    f_name: string
    l_name: string
    d_name: string
    bio: string
    since: string
  }>({
    id: "0000",
    phone: "",
    alt_phone: "",
    email: "",
    alt_email: "",
    f_name: "",
    l_name: "",
    d_name: "",
    bio: "",
    since: "",
  })

  const handleChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Profile submitted:", profileData)
  //   onOpenChange(false)
  // }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Profile</h3>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-4 overflow-y-auto">
          <TitleText
            text="Control what your community sees"
            style="text-[#2D2D2D] text-lg font-medium"
          />

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4 "
              defaultValue="item-0"
            >
                <AccordionItem className="border-none space-y-3" value={`item-1`}>
                  <AccordionTrigger className="border shadow-lg border-[#F2F1F1] rounded-[12px] px-3">
                    <div>
                      <p>Contact Information</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                    <FormPhoneInput
                      label="Primary Phone Number"
                      name="phone"
                      value={profileData.phone}
                      onChange={(value) => handleChange("phone", value || "")}
                      placeholder="Enter phone number"
                    />

                    <FormPhoneInput
                      label="Alternate Phone Number"
                      name="alt_phone"
                      value={profileData.alt_phone || ''}
                      onChange={(value) => handleChange("alt_phone", value || "")}
                      placeholder="Enter alternate phone number"
                    />


                      <FormInput
                      name="l_name"
                      type="email"
                      label="Primary Email"
                      value={profileData.email}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />

                      <FormInput
                      name="d_name"
                      type="email"
                      label="Alternate Email"
                      value={profileData.alt_email}
                      onChange={(e) => handleChange("d_name", e.target.value)}
                      />



                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none space-y-3" value={`item-2`}>
                  <AccordionTrigger className="border shadow-lg border-[#F2F1F1] rounded-[12px] px-3">
                    <div>
                      <p>Professional Information</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                      <FormInput
                      name="id"
                      type="text"
                      label="Employment Type"
                      value={profileData.id}
                      disabled={true}
                      />

                      <FormInput
                      name="f_name"
                      type="text"
                      label="License Number"
                      value={profileData.f_name}
                      onChange={(e) => handleChange("f_name", e.target.value)}
                      />

                      <FormInput
                      name="l_name"
                      type="text"
                      label="Company"
                      value={profileData.l_name}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />

                      <FormInput
                      name="d_name"
                      type="text"
                      label="Title"
                      value={profileData.d_name}
                      onChange={(e) => handleChange("d_name", e.target.value)}
                      />

                      <FormInput
                      name="bio"
                      type="text"
                      label="Department"
                      value={profileData.bio}
                      onChange={(e) => handleChange("bio", e.target.value)}
                      />



                  </AccordionContent>
                </AccordionItem>
            </Accordion>

          {/* <form onSubmit={handleSubmit} className="space-y-4">
   
          </form> */}

            <DialogFooter>
              <div className="flex justify-between items-center w-full">
                <Button type="button" variant={'secondary'}>Cancel</Button>

                <Button className="text-white rounded-[8px]" type="submit">
                  Update Profile
                </Button>
              </div>

            </DialogFooter>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ParticularsModal
