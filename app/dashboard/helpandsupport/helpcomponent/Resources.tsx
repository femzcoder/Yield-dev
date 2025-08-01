import { BasicCard2 } from "@/components/Cards"
import { BlueText, TitleText } from "@/components/Typo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent,  DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

function ResorcesModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Resources</h3>
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
                      <p>Useful Links</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                    <ul className="list-disc">
                      <li className="flex flex-col">
                        <span>Article 1</span>
                        <a href="https://onetime.com"><BlueText style='font-semibold' text='https://onetime.com' /></a>
                      </li>
                      <li className="flex flex-col">
                        <span>Article 2</span>
                        <a href="https://onetime.com"><BlueText style='font-semibold' text='https://onetime.com' /></a>
                      </li>
                    </ul>

                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none space-y-3" value={`item-2`}>
                  <AccordionTrigger className="border shadow-lg border-[#F2F1F1] rounded-[12px] px-3">
                    <div>
                      <p>Tutorials</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance ">
                    <div>
                        <BasicCard2 style="flex items-center gap-2 ">
                          <Image
                            src ={'/icons/tutorial-icon.svg'}
                            width={20}
                            height={30}
                            alt=""
                          />
                          <div>
                            <p className="font-semibold text-[14px]">Introduction to the App</p>
                            <span className="text-sm text-gray-500">Learn the basics of using our app</span>
                          </div>
                        </BasicCard2>
                    </div>

                  </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ResorcesModal
