'use client'

import { redirect } from 'next/navigation'

const MainPage = () => {
    // const params = useParams()
    // const currentLang = params?.locale as string;
  return (
    redirect(`/login`)
  )
}

export default MainPage