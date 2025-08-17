import React from 'react'
import { TitleText } from './Typo'
import { Avatar, AvatarFallback } from './ui/avatar'

const LeaderboardItem = ({ind, customerName, country, amount}:{ind:number, customerName:string, country:string, amount:number}) => {
  return (
    <div style={{borderColor:'rgba(0,0,0,0.1)'}} className='flex justify-between items-center border rounded-2xl px-2 py-3'>
        <div className='flex gap-2 items-center'>
            <TitleText text={String(ind)}/>
            <div className="flex gap-2 items-center">
                <Avatar className='rounded-full bg-[#f2f2f2]'>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                     <TitleText text={customerName}/>
                    <span className='text-[12px] text-[#595657]'>{country}</span>
                </div>
               
            </div>
        </div>

        <div>
            <span className='text-[12px] text-[#595657]'>Points</span>
            <TitleText text={`${String(amount)}`}/>
        </div>
    </div>
  )
}

export default LeaderboardItem;