import { BasicCard } from '@/components/Cards'
import CustomerItem from '@/components/CustomerItem'
import { TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const TopCustomers = () => {
  return (
    <BasicCard style='space-y-6'>
        <div>
            <TitleText style='text-[18px]' text='Top 10 Customers'/>

            <div className='flex items-center gap-2 mt-2'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className='rounded-3xl'>Lifetime Value <ChevronDown/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={()=>{}}>
                      Message
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem>
                      Call
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className='rounded-3xl'>This Week<ChevronDown/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={()=>{}}>
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

        </div>

        <div className='space-y-3'>
            <CustomerItem ind={1} customerName='Femi Akerele' amount={460000}/>
            <CustomerItem ind={2} customerName='Femi Akerele' amount={460000}/>
            <CustomerItem ind={3} customerName='Femi Akerele' amount={460000}/>
            <CustomerItem ind={4} customerName='Femi Akerele' amount={460000}/>
            <CustomerItem ind={5} customerName='Femi Akerele' amount={460000}/>
            <CustomerItem ind={6} customerName='Femi Akerele' amount={460000}/>
        </div>

    </BasicCard>
  )
}

export default TopCustomers