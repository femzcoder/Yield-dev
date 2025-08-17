import React, { useRef } from 'react'
import { TitleText } from './Typo'
import { CameraIcon } from 'lucide-react'
import Image from 'next/image'

const UserProfileDetails = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = e.target.files?.[0]
    if (file) {
      // You can add upload logic or preview here
      console.log('Selected file:', file)
    }
  }

  return (
    <div className='flex items-center gap-4'>
      <div className="relative w-24 h-24 mb-4">
        <Image
          src="/icons/EmptyUser.png"
          width={200}
          height={200}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border border-gray-200"
        />
        <button
          type="button"
          className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
          onClick={handleCameraClick}
        >
          <CameraIcon size={20} className="text-gray-600" />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <TitleText text='David Shepherd' style='text-[#2D2D2D] text-lg font-medium' />
        <span className='text-[#2D2D2D] text-xs block'>@Y!elds ID: 000011</span>
        <span className='text-[#2D2D2D] text-xs'>Member since 17 January 2021</span>
      </div>
    </div>
  )
}

export default UserProfileDetails