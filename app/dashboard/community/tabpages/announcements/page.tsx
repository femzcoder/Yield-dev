import { BasicCard } from '@/components/Cards'
import FullCarousel from '@/components/courousels/fullcarousel/js'
import { BlueText } from '@/components/Typo'
import Image from 'next/image'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import { FilterButton } from '@/components/OtherButtons'
import { getClientDate } from '@/lib/utils'

const Announcements = () => {
  return (
    <div className=' pt-4'>
      <div className='space-y-8'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <p className=' font-bold'>Sprint 0</p>
            <p className='font-normal text-sm md:font-semibold'>{getClientDate()}</p>
            <span className='hidden md:block text-[12px]'>Enrichment will be performed on 18 February 2025</span>
          </div>        

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <FilterButton type='button' text='This Week'/>
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
        </div>
        {/* speakers sessions */}

        {/* <BasicCard> */}
          <Image
            width={100}
            height={20}
            alt='Speaker Session'
            src="/images/Cardpoc.svg"
            className='w-full'
          />          
        {/* </BasicCard> */}

        <div className='relative px-3 py-8'>
          <Image
            width={50}
            height={20}
            alt='Speaker Session'
            src="/icons/up-quote.svg"
            className='absolute top-0 left-0'
          />
          <Image
            width={50}
            height={20}
            alt='Speaker Session'
            src="/icons/down-quote.png"
            className='absolute bottom-0 right-0 '
          />

          <div className='bg-[#F2F1F1] w-full px-4 md:px-16 py-8'>
            <p className='text-[#2D2D2D] font-medium'>You bring joy to those around you</p>
            <span className='italic text-sm text-[#2D2D2D]'>– David Shepherd</span>
          </div>
        </div>

        <Separator/>
        
        <>
          <FullCarousel/>
        </>

        <BasicCard style='space-y-4 mt-6'>
                    <div>
                      <p className='font-semibold text-lg md:text-2xl'>Useful Links</p>
                    </div>

                    <ul className=" space-x-3">
                      <li className="flex flex-col list-disc">
                        <span>Link 1</span>
                        <a href="https://onetime.com"><BlueText style='font-medium text-sm' text='https://onetime.com' /></a>
                      </li>
                      <li className="flex flex-col">
                        <span>Link 2</span>
                        <a href="https://onetime.com"><BlueText style='font-medium text-sm' text='https://onetime.com' /></a>
                      </li>
                    </ul>
                  
        </BasicCard>

      </div>
    </div>

  )
}

export default Announcements
