import React from 'react'
import { TitleText } from './Typo'
import { Avatar, AvatarFallback } from './ui/avatar'

const CustomerItem = ({ind, customerName, amount}:{ind:number, customerName:string, amount:number}) => {
  return (
    <div style={{borderColor:'rgba(0,0,0,0.1)'}} className='flex justify-between items-center border rounded-2xl px-2 py-3'>
        <div className='flex gap-2 items-center'>
            <TitleText text={String(ind)}/>
            <div className="flex gap-2 items-center">
                <Avatar className='rounded-full bg-[#f2f2f2]'>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <TitleText text={customerName}/>
            </div>
        </div>

        <div>
            <span></span>
            <TitleText text={`SDG ${String(amount)}`}/>
        </div>
    </div>
  )
}

export default CustomerItem


