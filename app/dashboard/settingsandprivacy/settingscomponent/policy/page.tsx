'use client'
import React from "react";
import { X } from "lucide-react"
import { BasicCard2 } from "@/components/Cards"
import Image from "next/image"


function PolicyModal() {
  return (
      <div className=" flex flex-col bg-white border-none md:rounded-2xl p-0 h-screen w-full">
        {/* Header */}
        {/* <div className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => {}} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Policy</h3>
          </div>
        </div> */}

        <div className="p-6 space-y-4 overflow-y-auto">

          <div className="px-1 py-2">
            <p className="font-semibold text-[#2D2D2D]">Access User Agreements, Platform Terms <br/> and Conditions, and other policies in one place</p>
          </div>

         <div className="space-y-2">
            <BasicCard2 style="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/icons/pdf-icon.svg" alt="Terms" width={20} height={30} />
                    <span className="text-sm">Terms of Service</span>
                </div>
                <div>
                    <span className="flex items-center gap-2 text-sm">313KB <X size={14} /></span>
                </div>
            </BasicCard2>
            <BasicCard2 style="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/icons/pdf-icon.svg" alt="Terms" width={20} height={30} />
                    <span className="text-sm">Privacy Policy</span>
                </div>
                <div>
                    <span className="flex items-center gap-2 text-sm">313KB <X size={14} /></span>
                </div>
            </BasicCard2>
         </div>
        </div>
      </div>
  )
}

export default PolicyModal
