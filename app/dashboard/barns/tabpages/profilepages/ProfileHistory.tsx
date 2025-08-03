// components/ProfileHistoryModal.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { ActivityCard } from "@/components/common/navbarElements/ActivityLog"



const ProfileHistoryModal = (
  {
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}
) => {



  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0 max-h-[80vh] ">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Profile History</h3>
          </div>
        </DialogHeader>

            <div className='flex items-end justify-end w-full px-6'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline"size={'sm'} className='rounded-3xl'>This Week<ChevronDown/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem  >
                      Message
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem>
                      Call
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

                <div className="p-6 space-y-1 ">
                    {
                        ['New Contact Created', 'Uploaded Document to Toolshed', 'Edited Kiara Profile'].map((i, id)=>(<ActivityCard key={id} date={'0 min ago'} title={i} />))
                    }

                </div>

      </DialogContent>

    </Dialog>

  )
}

export default ProfileHistoryModal
