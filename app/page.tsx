'use client'

// import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation'

const MainPage = async () => {
  // const session = await auth0.getSession();
  // if (!session) {
  //   return (
  //     <main>
  //       <a href="/auth/login?screen_hint=signup">
  //         <button>Sign up</button>
  //       </a>
  //       <a href="/auth/login">
  //         <button>Log in</button>
  //       </a>
  //     </main>
  //   );
  // }
    // const params = useParams()
    // const currentLang = params?.locale as string;
  return (
    redirect(`/login`)
  )
}

export default MainPage