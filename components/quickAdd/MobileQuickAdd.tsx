import { Plus } from 'lucide-react'
import React from 'react'

const MobileQuickAdd = () => {
  return (
    <button
        //   onClick={() => setOpen(true)}
          className="flex items-center justify-center w-[50px] h-[50px] primary-button-background rounded-full shadow-lg transition  z-49"
        >
          <Plus className="text-white" size={24} />
        </button>
  )
}

export default MobileQuickAdd