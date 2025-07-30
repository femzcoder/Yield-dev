import { BasicCard } from '@/components/Cards'
import { Grid2Container } from '@/components/Container'
import { PurpleText } from '@/components/Typo'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

const Contacts = () => {
  
  return (
    <div className='space-y-6'>
      <div>
        <p className=' font-bold'>Barns</p>
        <p className=' font-semibold'>17 February, 2025</p>
      </div>

      <div >
        <div className='flex items-center gap-2 mb-4'>
           <Button className='rounded-3xl text-white'>All (0)</Button>
           <Button variant={'outline'} className='rounded-3xl  '>Prospect (0)</Button>
           <Button variant={'outline'} className='rounded-3xl  '>Customer (0)</Button>
           <Button variant={'outline'} className='rounded-3xl  '>Others (0)</Button>
        </div>
        <Grid2Container>
          <BasicCard style='w-full flex items-center justify-between'>
            <div className='flex flex-col'>
              <p>Elysia Chan</p>
              <span className='text-sm text-gray-500'>Elysia.chan@gmail.com</span>
              <span className='text-sm text-gray-500'>+1234567890</span>
              <PurpleText text='Prospect' style='text-sm'/>              
            </div>

             <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className='rounded-[8px] border border-[#595657] text-[#595657]'>Action <ChevronDown/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem  >
                      Create
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem  >
                      Audio
                    </DropdownMenuItem>

                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>



          </BasicCard>
        </Grid2Container>
      </div>
    </div>
  )
}

export default Contacts