'use client'

import { redirect, useParams } from 'next/navigation'

const page = () => {
    const params = useParams()
    const currentLang = params?.locale as string;
  return (
    redirect(`/${currentLang}/login`)
  )
}

export default page