'use client'


import { FormInput } from "@/components/common/FormInput"
import { TitleText } from "@/components/Typo"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

function ProfileModal() {
  const router = useRouter()  
  const [profileData, setProfileData] = useState({
    id: "0000",
    f_name: "",
    l_name: "",
    d_name: "",
    bio: "",
    since: "",
  })

  const handleChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile submitted:", profileData)
  }

  return (
      <div className="w-full h-full  flex flex-col bg-white border-none md:rounded-2xl p-0">
        {/* Header */}
        <div className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => {router.back()}} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Profile</h3>
          </div>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">
          <TitleText
            text="Control what your community sees"
            style="text-[#2D2D2D] text-lg font-medium"
          />

          <div className="px-1 py-2 shadow-lg">
            <p className="font-medium text-[#2D2D2D]">Memebership Details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
            name="id"
            type="text"
            label="Y!elds ID"
            value={profileData.id}
            disabled={true}
            />

            <FormInput
            name="f_name"
            type="text"
            label="First Name"
            value={profileData.f_name}
            onChange={(e) => handleChange("f_name", e.target.value)}
            />

            <FormInput
            name="l_name"
            type="text"
            label="Last Name"
            value={profileData.l_name}
            onChange={(e) => handleChange("l_name", e.target.value)}
            />

            <FormInput
            name="d_name"
            type="text"
            label="Display Name"
            value={profileData.d_name}
            onChange={(e) => handleChange("d_name", e.target.value)}
            />

            <FormInput
            name="bio"
            type="text"
            label="Bio"
            value={profileData.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            />

            <FormInput
            name="since"
            type="text"
            label="Member Since"
            value={profileData.since}
            onChange={(e) => handleChange("since", e.target.value)}
            />

            <div className="flex justify-center ">
              <div>
                <Button className="text-white rounded-[4px]" type="submit">
                  Invite a Friend
                </Button>
              </div>              
            </div>

          </form>
        </div>
      </div>
  )
}

export default ProfileModal
