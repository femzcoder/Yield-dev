import { FormInput } from "@/components/common/FormInput"
import { TitleText } from "@/components/Typo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent,  DialogFooter,  DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

function SubscriptionModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [profileData, setProfileData] = useState({
    id: "0000",
    phone: "",
    alt_phone:'',
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
            <h3 className="text-sm font-semibold">Subscriptions</h3>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-4 overflow-y-auto">
          <TitleText
            text="View your subscription plan & payment method below."
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
                      <p>Plan Details</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                      <FormInput
                      name="l_name"
                      type="text"
                      label="Plan Name"
                      value={profileData.email}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />
                      <FormInput
                      name="l_name"
                      type="text"
                      label="Plan Effective Period"
                      value={profileData.email}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />
                      <FormInput
                      name="l_name"
                      type="text"
                      label="Plan Status"
                      value={profileData.email}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />
                      <FormInput
                      name="l_name"
                      type="text"
                      label="Plan Type"
                      value={profileData.email}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />
                      <FormInput
                      name="l_name"
                      type="text"
                      label="Plan Location"
                      value={profileData.email}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />

                      <FormInput
                      name="d_name"
                      type="text"
                      label="Plan Price"
                      value={profileData.alt_email}
                      onChange={(e) => handleChange("d_name", e.target.value)}
                      />



                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none space-y-3" value={`item-2`}>
                  <AccordionTrigger className="border shadow-lg border-[#F2F1F1] rounded-[12px] px-3">
                    <div>
                      <p>Payment Details</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                      <FormInput
                      name="id"
                      type="text"
                      label="Last Payment Amount"
                      value={profileData.id}
                      disabled={true}
                      />
                      <FormInput
                      name="id"
                      type="text"
                      label="Last Payment Date"
                      value={profileData.id}
                      disabled={true}
                      />
                      <FormInput
                      name="id"
                      type="text"
                      label="Next Payment Amount"
                      value={profileData.id}
                      disabled={true}
                      />
                      <FormInput
                      name="id"
                      type="text"
                      label="Next Payment Date"
                      value={profileData.id}
                      disabled={true}
                      />

                      <FormInput
                      name="f_name"
                      type="text"
                      label="Payment Mode"
                      value={profileData.f_name}
                      onChange={(e) => handleChange("f_name", e.target.value)}
                      />

                      <FormInput
                      name="l_name"
                      type="text"
                      label="Payment Method"
                      value={profileData.l_name}
                      onChange={(e) => handleChange("l_name", e.target.value)}
                      />

                      <FormInput
                      name="d_name"
                      type="text"
                      label="Bank Account Number"
                      value={profileData.d_name}
                      onChange={(e) => handleChange("d_name", e.target.value)}
                      />




                  </AccordionContent>
                </AccordionItem>
            </Accordion>

          {/* <form onSubmit={handleSubmit} className="space-y-4">
   
          </form> */}

            <DialogFooter>

                <Button className="text-white rounded-[8px]" type="submit">
                  Upgrade
                </Button>

            </DialogFooter>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionModal
