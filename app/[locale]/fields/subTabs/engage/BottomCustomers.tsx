import { BasicCard } from '@/components/Cards'
import CustomerItem from '@/components/CustomerItem'
import { TitleText } from '@/components/Typo'
import React from 'react'

const BottomCustomers = () => {
  return (
    <BasicCard style='space-y-6'>
        <div>
            <TitleText style='text-[18px]' text='Bottom 10 Customers'/>
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

export default BottomCustomers