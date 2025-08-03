// components/SuccessModal.tsx
"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { TitleText } from "@/components/Typo"
import Image from "next/image"


const SuccessModal = (
  {
  title,
  open,
  onOpenChange,
}: {
    title:string
  open: boolean
  onOpenChange: (open: boolean) => void
}
) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0 max-h-[80vh] py-8">


        <div className="flex justify-center items-center flex-col space-y-2">
          <Image
            src={'/icons/success-modal-icon.svg'}
            alt=''
            width={40}
            height={40}
          />
          <TitleText text={title} style="text-[#2D2D2D] text-sm font-medium"/>
        </div>

      </DialogContent>

    </Dialog>

  )
}

export default SuccessModal
