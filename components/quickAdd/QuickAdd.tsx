import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'


const QuickAdd = () => {
  const [openDemographic, setOpenDemographic] = useState(false)
  console.log(openDemographic)
  return (
    <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className='rounded-3xl text-white '>Quick Add <ChevronDown/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem  onClick={()=>setOpenDemographic(true)}>
                      {/* <Button variant={'ghost'} size={'sm'} >Create</Button> */}Create
                     
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem  >
                      Audio
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem  >
                      Camera
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem  >
                      Upload
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem>
                      Calendar
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
    </div>
  )
}

export default QuickAdd